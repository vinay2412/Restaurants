import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingHistroyPageRoutingModule } from './booking-histroy-routing.module';

import { BookingHistroyPage } from './booking-histroy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingHistroyPageRoutingModule
  ],
  declarations: [BookingHistroyPage]
})
export class BookingHistroyPageModule {}
