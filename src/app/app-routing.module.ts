import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path: 'home',
  loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
},
{
  path: 'login',
  loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
},
{
  path: 'about-us',
  loadChildren: () => import('./pages/about-us/about-us.module').then( m => m.AboutUsPageModule)
},
{
  path: 'cart',
  loadChildren: () => import('./pages/cart/cart.module').then( m => m.CartPageModule)
},
{
  path: 'chat',
  loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
},
{
  path: 'contact',
  loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
},
{
  path: 'checkout',
  loadChildren: () => import('./pages/checkout/checkout.module').then( m => m.CheckoutPageModule)
},
{
  path: 'add-address',
  loadChildren: () => import('./pages/add-address/add-address.module').then( m => m.AddAddressPageModule)
},
{
  path: 'address-list',
  loadChildren: () => import('./pages/address-list/address-list.module').then( m => m.AddressListPageModule)
},
{
  path: 'category',
  loadChildren: () => import('./pages/category/category.module').then( m => m.CategoryPageModule)
},
{
  path: 'favourite',
  loadChildren: () => import('./pages/favourite/favourite.module').then( m => m.FavouritePageModule)
},
{
  path: 'forget-password',
  loadChildren: () => import('./pages/forget-password/forget-password.module').then( m => m.ForgetPasswordPageModule)
},
{
  path: 'news',
  loadChildren: () => import('./pages/news/news.module').then( m => m.NewsPageModule)
},
{
  path: 'location',
  loadChildren: () => import('./pages/location/location.module').then( m => m.LocationPageModule)
},
{
  path: 'order-details',
  loadChildren: () => import('./pages/order-details/order-details.module').then( m => m.OrderDetailsPageModule)
},
{
  path: 'news-details',
  loadChildren: () => import('./pages/news-details/news-details.module').then( m => m.NewsDetailsPageModule)
},
{
  path: 'order-list',
  loadChildren: () => import('./pages/order-list/order-list.module').then( m => m.OrderListPageModule)
},
{
  path: 'order-status',
  loadChildren: () => import('./pages/order-status/order-status.module').then( m => m.OrderStatusPageModule)
},
{
  path: 'orders',
  loadChildren: () => import('./pages/orders/orders.module').then( m => m.OrdersPageModule)
},
{
  path: 'product-details',
  loadChildren: () => import('./pages/product-details/product-details.module').then( m => m.ProductDetailsPageModule)
},
{
  path: 'product-list',
  loadChildren: () => import('./pages/product-list/product-list.module').then( m => m.ProductListPageModule)
},
{
  path: 'rating',
  loadChildren: () => import('./pages/rating/rating.module').then( m => m.RatingPageModule)
},
{
  path: 'registration',
  loadChildren: () => import('./pages/registration/registration.module').then( m => m.RegistrationPageModule)
},
{
  path: 'settings',
  loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
},
{
  path: 'table-booking',
  loadChildren: () => import('./pages/table-booking/table-booking.module').then( m => m.TableBookingPageModule)
},

{
  path: 'booking-histroy',
  loadChildren: () => import('./pages/booking-histroy/booking-histroy.module').then( m => m.BookingHistroyPageModule)
},
{
  path: 'offer',
  loadChildren: () => import('./pages/offer/offer.module').then( m => m.OfferPageModule)
},
{
  path: 'pages',
  loadChildren: () => import('./pages/pages.module').then( m => m.PagesPageModule)
},
  {
    path: '',
    redirectTo: 'pages',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
