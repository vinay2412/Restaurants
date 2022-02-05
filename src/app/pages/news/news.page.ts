import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { LoadingController, NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage {

  public ordersDetails: any[] = [];


  public noOfItems: number;
  public currency: {};
  public orderId: any;
  public key: any;

  constructor(
    public navParams: NavParams,
    // public af: AngularFireAuth,
    // public db: AngularFireDatabase,
    public router : Router,
    public loadingCtrl: LoadingController
  ) {

    this.orderId = this.navParams.get("orderId");
    this.key = this.navParams.get('orderKey');
    console.log("orderID", this.orderId);


  //   this.currency = JSON.parse(localStorage.getItem('currency'));
  //   if (this.af.currentUser) {
  //     let loader = this.loadingCtrl.create({
  //       message: "Please wait..."
  //     });
  //     // loader.present();

  //     this.db.object("/orders/" + this.orderId + "/cart/")
  //       .valueChanges()
  //       .subscribe((res: any) => {
  //         this.ordersDetails = res;
  //         console.log("details--" + JSON.stringify(this.ordersDetails));
  //         // loader.dismiss();
  //       });

  //   }
  // }
  }

  ionViewWillEnter() {
    let cart: Array<any> = JSON.parse(localStorage.getItem("cart"));
    this.noOfItems = cart != null ? cart.length : null;
  }

  orderDetails() {
    this.router.navigate(["/order-list"]);
    //   index: index,
    //   orderId: this.orderId,
    //   orderKey: this.key
    // }]);
  }

  orderStatus() {
    this.router.navigate(["/order-status"]);
  }

  isOrders(): boolean {
    return this.ordersDetails.length == 0 ? false : true;
  }

  navcart() {
    this.router.navigate(["cart"]);
  }

}
