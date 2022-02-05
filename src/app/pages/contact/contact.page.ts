import { Component, OnInit } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { AngularFireDatabase } from '@angular/fire/database';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage {

  user: any = {};

  constructor(
    // public af: AngularFireAuth,
    // public db: AngularFireDatabase,
    public router : Router,
    public navParams: NavParams,
    public emailComposer: EmailComposer
  ) { }

  // async onSend(user: NgForm) {
  //   if (this.af.currentUser) {
  //     this.user.userId = (await this.af.currentUser).uid;
  //     this.db
  //       .list("/contact")
  //       .push(this.user)
  //       .then(res => {
  //         this.user = {};
  //       });
  //   }
  //   let email = {
  //     // to: "san10694@gmail.com",
  //     to: "vinodpraja075@gmail.com",
  //     subject: this.user.name,
  //     body: this.user.message,
  //     isHtml: true
  //   };
  //   this.emailComposer.open(email, function () { });
  //   this.user = "";
  // }

}
