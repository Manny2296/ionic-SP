import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'socios', loadChildren: './socios/socios.module#SociosPageModule' },
  { path: 'sobre-imalab', loadChildren: './sobre-imalab/sobre-imalab.module#SobreIMALABPageModule' },
  { path: 'leisvigentes', loadChildren: './leisvigentes/leisvigentes.module#LeisvigentesPageModule' },
  { path: 'servicos', loadChildren: './servicos/servicos.module#ServicosPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
