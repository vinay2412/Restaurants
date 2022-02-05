import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { IonSlides, NavController, NavParams, Platform } from '@ionic/angular';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  @ViewChild(NavController) nav: NavController;
  contactNo: any = 8109829687;

  constructor(
    public platform: Platform,
    public router : Router,
    public callNumber: CallNumber,
    public navParams: NavParams,
    public emailComposer: EmailComposer
  ) {}
  ngOnInit(){

  }

  goToSlide() {
    this.slides.slideTo(2, 500);
  }

  callUs() {
    this.callNumber
      .callNumber(this.contactNo, true)
      .then(() => {})
      .catch(() => {});
  }

  gotogoogleMap() {
    this.router.navigate(["/LocationPage"]);
  }

  contact() {
    let email = {
      // You can change This Email to your own Email to receive contact Email.
      to: "vinodpraja075@gmail.com",
      isHtml: true
    };
    this.emailComposer.open(email);
  }

}
