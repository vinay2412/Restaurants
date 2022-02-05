import { Component } from '@angular/core';
// import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage {
  noOfItems: any;
  public Categories: Array<any> = [];
  // categories: AngularFireList<any>;


  constructor(
    public router: Router,
    // public af: AngularFireDatabase,
    public loadingCtrl: LoadingController
  ) {
  //   const loader = this.loadingCtrl.create({
  //     message: "Please wait..."
  //   });
  //   loader.then(() => {
  //     this.categories = af.list("/categories");
  //     this.categories.snapshotChanges()
  //       .pipe(
  //         map(changes =>
  //           changes.map(c => ({ $key: c.payload.key, ...c.payload.val() }))
  //         )
  //       ).subscribe((res: any) => {
  //         this.Categories = res;
  //       })
    //  loader.present();
      // .subscribe(data => {
      //   this.Categories = [];
      //   loader.dismiss();
      //   data.forEach(item => {
      //     let temp = item.payload.toJSON();
      //     temp["$key"] = item.payload.key;
      //     this.Categories.push(temp);
      //   });
      // });

    // });
  }

//   ionViewWillEnter() {
//     let cart: Array<any> = JSON.parse(localStorage.getItem("Cart"));
//     this.noOfItems = cart != null ? cart.length : null;
//   }

//   navigate(id) {
//     this.router.navigate(["/ProductListPage", { id: id }]);
//   }

//   // navcart() {
//   //   this.navCtrl.push("CartPage");
//   // }
// }
}
