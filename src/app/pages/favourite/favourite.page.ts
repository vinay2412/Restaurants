import { Component, OnInit } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.page.html',
  styleUrls: ['./favourite.page.scss'],
})
export class FavouritePage  {

  favouriteItems: any[] = [];
  Cart: any[];
  noOfItems: number;

  // constructor(
  //   public af: AngularFireAuth,
  //   public db: AngularFireDatabase,
  //   public router: Router,
  //   public toastCtrl: ToastController
  // ) {
  //   this.Cart = JSON.parse(localStorage.getItem("Cart"));
  //   this.noOfItems = this.Cart != null ? this.Cart.length : null;
  //   if (this.af.currentUser) {
  //     this.db
  //       .list("/users/" + this.af.currentUser + "/favourite/")
  //       .snapshotChanges()
  //       .pipe(
  //         map(changes =>
  //           changes.map(c => ({ $key: c.payload.key}))
  //         )
  //       ).subscribe((res: any) => {
  //         this.favouriteItems = res;
  //       })
  //     // .subscribe((res: any) => {
  //     //   this.favouriteItems = [];
  //     //   res.forEach(item => {
  //     //     let temp = item.payload.val();
  //     //     temp["$key"] = item.payload.key;
  //     //     this.favouriteItems.push(temp);
  //     //   });
  //     // });
  //   }
  // }

  // isFavourite(): boolean {
  //   if (this.favouriteItems.length == 0) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  // buyNow(key) {
  //   this.router.navigate(["/ProductDetailsPage", { id: key }]);
  // }

  // navcart() {
  //   this.router.navigate(["/CartPage"]);
  // }

  // async removeFromFavourites(key) {
  //   if (this.af.currentUser) {
  //     this.db
  //       .object("/users/" + (await this.af.currentUser).uid + "/favourite/" + key)
  //       .remove();
  //     this.createToaster("removed from favourites", "3000");
  //   }
  // }

  // async createToaster(message, duration) {
  //   let toast = await this.toastCtrl.create({
  //     message: message,
  //     duration: duration
  //   });
  //   await toast.present();
  // }
}
