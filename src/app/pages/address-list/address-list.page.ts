import { Component, OnInit } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Router } from '@angular/router';
import { AlertController, NavParams } from '@ionic/angular';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.page.html',
  styleUrls: ['./address-list.page.scss'],
})
export class AddressListPage {

  // grandTotal: any;
  // subTotal: any;
  // address: any = {};
  // addressList: any = [];
  // payTotal: any;
  // couponDiscount: any;
  // deductedPrice: any;
  // cart: Array<any>;
  // orderDetails: any = {};
  // pincodes: Array<any>;
  // public pincodeMatched: boolean = false;
  // public loyaltyPercentage: number = 0;
  // public loyaltyPoints: number = 0;
  // public leftLoyaltyPoint: number = 0;
  // public checked: boolean = false;
  // public userRef: AngularFireList<any>;
  // public loyaltyArray: any[] = [];
  // public loyaltyLimit: number;
  // public currency: {};

  // constructor(
  //   public af: AngularFireAuth,
  //   public db: AngularFireDatabase,
  //   public  router: Router,
  //   public navParams: NavParams,
  //   public alertCtrl: AlertController
  // ) {
  //   this.currency = JSON.parse(localStorage.getItem('currency'));
  //   this.orderDetails.grandTotal = this.navParams.get("grandTotal");
  //   this.payTotal = this.orderDetails.grandTotal;
  //   this.orderDetails.couponDiscount = this.navParams.get("couponDiscount");
  //   this.orderDetails.subTotal = this.navParams.get("subTotal");
  //   this.orderDetails.deductedPrice = this.navParams.get("deductedPrice");
  //   this.orderDetails.tax = this.navParams.get("totalVat");
  //   if (this.orderDetails.grandTotal == undefined) {
  //     this.router.navigate(["/CartPage"]);
  //   }
  //   if (this.af.currentUser) {
  //     this.db
  //       .list("/users/" + this.af.currentUser + "/address")
  //       .snapshotChanges()
  //       .pipe(
  //         map(changes =>
  //           changes.map(c => ({ $key: c.payload.key}))
  //         )
  //       ).subscribe((res: any) => {
  //         this.addressList = res;
  //       })

  //     // .subscribe(res => {
  //     //   this.addressList = [];
  //     //   res.forEach(item => {
  //     //     let temp = item.payload.toJSON();
  //     //     temp["$key"] = item.payload.key;
  //     //     this.addressList.push(temp);
  //     //   });
  //     // });

  //     this.db
  //       .list("delivery-options")
  //       .valueChanges()
  //       .subscribe(res => {
  //         this.pincodes = res;
  //         console.log("pincodes-" + JSON.stringify(res));
  //       });
  //     this.db
  //       .object("loyalitys")
  //       .valueChanges()
  //       .subscribe(loyalty => {
  //         let res: any = loyalty;
  //         if (res.enable) {
  //           this.loyaltyPercentage = res.loylityPercentage;
  //           this.loyaltyLimit = res.minLoyalityPointes;
  //         }
  //       });

  //     this.userRef = this.db.list(
  //       "users/" + this.af.currentUser + "/loyaltyPoints"
  //     );
  //     this.userRef.valueChanges().subscribe(res => {
  //       let points: any = res;
  //       this.loyaltyArray = points;
  //       let _points: number = 0;
  //       for (let i = 0; i < this.loyaltyArray.length; i++) {
  //         _points = Number(
  //           Number(_points) + Number(this.loyaltyArray[i].points)
  //         );
  //         this.loyaltyPoints = _points;
  //       }
  //     });
  //   }
  //   this.orderDetails.cart = JSON.parse(localStorage.getItem("Cart"));
  // }
  // ngOnInit(){

  // }
  // // Add Address
  // addAddress() {
  //   this.router.navigate(["/AddAddressPage", {
  //     id: 0
  //   }]);
  // }

  // //Selected Address
  // selectAddress(key, address) {
  //   this.pincodeMatched = false;
  //   this.orderDetails.shippingAddress = address;
  //   for (let i = 0; i < this.pincodes.length; i++) {
  //     if (this.pincodes[i].pincode == address.pincode) {
  //       this.pincodeMatched = true;
  //     }
  //   }
  // }

  // checkOut() {
  //   this.orderDetails.usedLoyaltyPoints =
  //     this.checked == true ? this.loyaltyPoints : 0;
  //   this.orderDetails.appliedLoyaltyPoints = this.checked;
  //   this.orderDetails.orderView = false;
  //   if (this.orderDetails.shippingAddress && this.pincodeMatched) {
  //     this.router.navigate(["/CheckoutPage", {
  //       orderDetails: this.orderDetails
  //     }]);
  //   } else if (this.pincodeMatched == false) {
  //     this.showAlert("We can not deliver to your Area!");
  //   } else {
  //     this.showAlert("Select Your Address First!");
  //   }
  // }

  // async showAlert(message) {
  //   let alert = await this.alertCtrl.create({
  //     // title: "Sorry!",
  //     // subTitle: message,
  //     header:"Sorray",
  //     buttons: ["OK"]
  //   });
  //  await alert.present();
  // }

  // updateLoyality(event) {
  //   if (this.loyaltyPoints >= this.loyaltyLimit) {
  //     this.checked = event.value;
  //     if (event.value == true) {
  //       if (this.payTotal < this.loyaltyPoints) {
  //         this.orderDetails.grandTotal = 0;
  //         this.leftLoyaltyPoint = this.loyaltyPoints - this.payTotal;
  //       } else if (this.payTotal > this.loyaltyPoints) {
  //         this.orderDetails.grandTotal = this.payTotal - this.loyaltyPoints;
  //         this.leftLoyaltyPoint = 0;
  //       }
  //     } else {
  //       this.orderDetails.grandTotal = this.navParams.get("grandTotal");
  //     }
  //   }
  // }
}

