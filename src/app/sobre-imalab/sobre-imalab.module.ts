import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SobreIMALABPage } from './sobre-imalab.page';

const routes: Routes = [
  {
    path: '',
    component: SobreIMALABPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SobreIMALABPage]
})
export class SobreIMALABPageModule {}
