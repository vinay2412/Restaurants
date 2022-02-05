import { Component, OnInit } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage  {

  valForm: FormGroup;

  constructor(
    public router :Router,
    public fb: FormBuilder,
    // public af: AngularFireAuth,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
  ) {
    this.valForm = fb.group({
      email: [
        "",
        Validators.compose([Validators.required, CustomValidators.email])
      ]
    });
  }

  async OnSubmit($ev, value: any) {
    let loader = await this.loadingCtrl.create({
      message: 'Sending Mail...',
    });
    await loader.present();
    $ev.preventDefault();
    for (let c in this.valForm.controls) {
      this.valForm.controls[c].markAsTouched();
    }
    // if (this.valForm.valid) {
    //   this.af.sendPasswordResetEmail(value.email).then(success => {
    //     this.showAlert('Password Reset mail has been sent to your registered mail!');
    //     this.router.navigate(["/LoginPage"]);
    //     // loader.dismiss();
    //   }).catch(error => {
    //     this.showAlert(error.message);
    //     // loader.dismiss();
    //   });
    // } else {
    //   this.showAlert('Please enter Valid email address');
    //   // loader.dismiss();
    // }
  }

  async showAlert(message) {
    let alert = await this.alertCtrl.create({
      header: message,
      buttons: ["OK"]
    });
    await alert.present();
  }

  goToLogin() {
    this.router.navigate(["/LoginPage"]);
  }

  Register() {
    this.router.navigate(["/RegistrationPage"]);
  }

}
