import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TableBookingPageRoutingModule } from './table-booking-routing.module';

import { TableBookingPage } from './table-booking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TableBookingPageRoutingModule
  ],
  declarations: [TableBookingPage]
})
export class TableBookingPageModule {}
