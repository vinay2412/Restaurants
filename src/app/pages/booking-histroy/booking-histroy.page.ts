import { Component, OnInit } from '@angular/core';
// import { AngularFireDatabase } from '@angular/fire/database';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-booking-histroy',
  templateUrl: './booking-histroy.page.html',
  styleUrls: ['./booking-histroy.page.scss'],
})
export class BookingHistroyPage implements OnInit {

  // public bookingDetails: Array<{}>;
  // private uid: string;
  // private username: string;

  // constructor(
  //    private dbService: AngularFireDatabase,
  //   private toastCtrl: ToastController
  // ) {
  //   this.uid = localStorage.getItem("uid");
  //   this.dbService
  //     .object("users/" + this.uid)
  //     .valueChanges()
  //     .subscribe((user: any) => {
  //       console.log(user);
  //       if (user != null) {
  //         this.username = user.name;
  //       }

  //     });
  //   dbService
  //     .list("table-bookings")
  //     .valueChanges()
  //     .subscribe(
  //       res => {
  //         this.bookingDetails = [];
  //         res.forEach((item: any) => {
  //           if (item.userID == this.uid) {
  //             item["username"] = this.username;
  //             this.bookingDetails.push(item);
  //           }
  //         });
  //       },
  //       error => {
  //         this.presentToast(error.message);
  //       }
  //     );
  // }

  ngOnInit() {
  
  }

  // async presentToast(msg) {
  //   let toast =await this.toastCtrl.create({
  //     message: msg,
  //     duration: 3000,
  //     position: "bottom"
  //   });
  //   await toast.present();
  // }

 

}
