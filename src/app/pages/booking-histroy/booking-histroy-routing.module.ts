import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth.guard';

import { BookingHistroyPage } from './booking-histroy.page';

const routes: Routes = [
  {
    path: '',
    component: BookingHistroyPage,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingHistroyPageRoutingModule {}
