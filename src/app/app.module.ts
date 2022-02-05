import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy, NavParams } from '@ionic/angular';
import {  HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { PagesPageRoutingModule } from './pages/pages-routing.module';
import { AuthService } from './services/auth.service';
import { ApiService } from './services/api.service';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';
import { Storage } from '@ionic/storage';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { FormBuilder } from '@angular/forms';




@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireAuthModule,
    // AngularFireStorageModule,
    // AngularFireDatabaseModule,
    AppRoutingModule,
    PagesPageRoutingModule,
    HttpClientModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    AuthService,
    ApiService,
    Facebook,
    GooglePlus,
    Storage,
    NavParams,
    EmailComposer,
    FormBuilder,
      { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  exports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
