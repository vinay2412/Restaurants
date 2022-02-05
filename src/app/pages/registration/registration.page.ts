import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  registration: FormGroup;

  constructor(
  public router: Router,
  // public events: Events,
  public fb: FormBuilder,
  // public af: AngularFireAuth,
  // public db: AngularFireDatabase,
  public loadingCtrl: LoadingController,
  public alertCtrl: AlertController,
  public platform: Platform
) { }

onSubmit() {
  // this.af.createUserWithEmailAndPassword(this.registration.value.email, this.registration.value.password)
  //   .then((success: any) => {
  //     this.db.object("/users/" + success.uid).update({
  //       name: this.registration.value.name,
  //       email: this.registration.value.email,
  //       mobileNo: this.registration.value.mobileNo,
  //       role: "User"
  //     });
  //     localStorage.setItem("uid", success.uid);
  //     this.router.navigate(["/home"]);
  //   }).catch(error => {
  //     console.log("Firebase failure: " + JSON.stringify(error));
  //     this.showAlert(error.message);
  //   });
}

  async showAlert(message) {
  let alert = await this.alertCtrl.create({
    header: message,
    buttons: ["OK"]
  });
  alert.present();
}

navLogin() {
  this.router.navigate(["/login"]);
}

ngOnInit(): any {
  this.buildForm();
}

//Validation
buildForm(): void {
  this.registration = this.fb.group({
    name: new FormControl("", Validators.required),
    mobileNo: new FormControl("", Validators.required),
    email: new FormControl("", [
      Validators.required,
      Validators.pattern("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{1,63}$")
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.pattern('(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[$#@$!%*?&])[A-Za-zd$#@$!%*?&].{7,}'),
   
    ])
  });
}

}
