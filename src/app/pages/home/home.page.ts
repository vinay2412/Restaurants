import { Component, OnInit } from '@angular/core';
// import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor(
        public router :Router
  ){ }
  loginPage() {
    this.router.navigate(["/home"]);
  }


}
//   mySlideOptions = {
//     initialSlide: 1,
//     loop: true,
//     autoplay: 2000,
//     pager: false
//   };
//   Cart: any = [];
//   noOfItems: any;
//   uid;

//   public ComingData: Array<any> = [];
//   public Categories: Array<any> = [];
//   comingData: AngularFireList<any>;
//   categories: AngularFireList<any>;

//   constructor(
//     public router :Router,
//     public af: AngularFireDatabase,
//     public loadingCtrl: LoadingController
//   ) {
//     let loader = this.loadingCtrl.create({
//       message: "Please wait..."
//     });
//       then(() => {
//       this.comingData = af.list("/coming");
//       this.categories = af.list("/categories");
//       this.comingData.valueChanges().subscribe(data => {
//         this.ComingData = data;
//       });
//       this.categories.snapshotChanges()
//         .pipe(
//           map(changes =>
//             changes.map(c => ({ $key: c.payload.key }))
//           )
//         ).subscribe((data: any) => {
//           this.Categories = data;
//           console.log(this.Categories);
//           // loader.dismiss();
//         })

//       // .subscribe(data => {
//       //   this.Categories = [];
//       //   data.forEach(item => {
//       //     let temp = item.payload.toJSON();
//       //     temp["$key"] = item.payload.key;
//       //     this.Categories.push(temp);
//       //   });
//       //   loader.dismiss();
//       // });
//     });
//   }

//   ionViewWillEnter() {
//     this.Cart = JSON.parse(localStorage.getItem("Cart"));
//     this.noOfItems = this.Cart != null ? this.Cart.length : null;
//     this.uid = localStorage.getItem('uid');
//     if (this.uid != null) {
//       if (localStorage.getItem("playerId")) {
//         this.af.object("/users/" + this.uid).update({
//           playerId: localStorage.getItem("playerId")
//         });
//       }
//     }
//   }

//   navigate(id) {
//     console.log(id)
//     this.router.navigate(["/ProductListPage", { id: id }]);
//   }

//   navcart() {
//     this.router.navigate(["/CartPage"]);
//   }
// }
// function then(arg0: () => void) {
//   throw new Error('Function not implemented.');
// }

