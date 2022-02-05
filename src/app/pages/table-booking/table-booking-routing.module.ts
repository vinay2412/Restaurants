import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableBookingPage } from './table-booking.page';

const routes: Routes = [
  {
    path: '',
    component: TableBookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableBookingPageRoutingModule {}
