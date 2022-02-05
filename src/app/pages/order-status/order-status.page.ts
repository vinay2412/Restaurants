import { Component, OnInit } from '@angular/core';

import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.page.html',
  styleUrls: ['./order-status.page.scss'],
})
export class OrderStatusPage implements OnInit {

  orderId: any;
  orderStatus: any = [];

  constructor(
    // public af: AngularFireDatabase,
    // public navCtrl: NavController,
    public navParams: NavParams
  ) {
    // this.orderId = this.navParams.get("orderId");
    // this.af
    //   .list("/orders/" + this.orderId + "/statusReading/")
    //   .valueChanges()
    //   .subscribe((res: any) => {
    //     this.orderStatus = res;
    //     console.log("status---" + JSON.stringify(res));
      // });
  }
  ngOnInit() {
  }

}
