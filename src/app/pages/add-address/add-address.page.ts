import { Component, OnInit } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { AngularFireDatabase } from '@angular/fire/database';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.page.html',
  styleUrls: ['./add-address.page.scss'],
})
export class AddAddressPage  {

  // address: any = {};

  // constructor(
  //   public af: AngularFireAuth,
  //   public db: AngularFireDatabase,
  //   public router : Router,
  //   public navParams: NavParams
  // ) { }
  
  // ngOnInit() {
  // }

  // async addAddress(form: NgForm) {
  //   if (this.af.currentUser) {
  //      this.db
  //     .list("/users/" + (await this.af.currentUser).uid + "/address")
  //       .push(this.address)
  //       .then(res => {
  //         var id = this.navParams.get("id");
  //         if (id == 1) {
  //           this.router.navigateByUrl("UserAddressListPage");
  //         } else {
  //           this.router.navigate(["/"])
  //         }
  //       });
  //   }
  // }

 

}
