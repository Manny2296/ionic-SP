import { AlertController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
constructor(public alertController: AlertController) {}
  usuario  = {}
  ngOnInit(){
    
  }
  logForm() {
    console.log(this.usuario)
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: '<b>Messagem enviada!</b>',
      buttons: ['OK']
    });
     this.usuario = {}
    await alert.present();
  }}
