import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private signoutController: AlertController){}

  async signoutAlert(){
    const alert = await this.signoutController.create({
      header: 'Sign out',
      mode: 'ios',
      message: 'Are you sure to sign out?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Tak jadi Sign out');
        }
      },
      {
        text: 'Sign Out',
        cssClass: 'danger',
        handler: () => {
          console.log("Go to sign in");
        }
      }]
    });

    await alert.present();
  }

}
