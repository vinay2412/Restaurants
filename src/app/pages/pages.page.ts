import { Component, OnInit, ViewChild } from '@angular/core';
import {  Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.page.html',
  styleUrls: ['./pages.page.scss'],
 })
export class PagesPage {
 public login: boolean = false;
 public logout: boolean = false;
  constructor(        
    private router: Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public authService: AuthService
  
  ) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if(this.authService.logedInRes){
      this.logout = true;
      // this.login = false;
    }
    else{
      this.login = true;
      // this.logout = false;
    }
  }

  logIN(){
    this.router.navigate(['/login'])
  }

  logOut(){
    this.authService.logout()
    this.router.navigate(['/pages'])
  }

  homePage() {
    this.router.navigate(["/home"]);
  }

  bookingPage() {
    this.router.navigate(["/booking-histroy"]);
  }

  newsPage() {
    this.router.navigate(["/news"]);
  }

  offerPage() {
    this.router.navigate(["/offer"]);
  }

  loginPage() {
    this.router.navigate(["/login"]);
  }

  registerPage() {
    this.router.navigate(["/registration"]);
  }

  contactPage() {
    this.router.navigate(["/contact"]);
  }
}
  












  
  // @ViewChild(NavController) nav: NavController;
  // Cart: any = [];
  // noOfItemsInCart: any;
  // noOfItemsInFevrt: any;
  // noOfItemsInNews: any;
  // noOfItemsInOffer: any;
  // name: any;
  // imageUrl: any = "assets/img/profile.jpg";
  // rootPage: string = "HomePage";
  // private uid: string;


  // constructor(
  //   private router :Router,
  //   private af: AngularFireAuth,
  //   private platform :Platform,
  //   public statusbar: StatusBar,
  //   public splashscreen: SplashScreen,
  //   private db: AngularFireDatabase,
  //   private oneSignal : OneSignal,
  //   private translateService: TranslateService,
  //   private socialSharing: SocialSharing,
  //   // private events :Event
  // ) {
  //   this.initializeApp();
  // }

  // initializeApp() {
  //   this.db.object('/settings/currency').valueChanges().subscribe(res => {
  //     localStorage.setItem('currency', JSON.stringify(res));
  //   }, _err => {
  //     localStorage.setItem('currency', JSON.stringify({ currencyName: 'USD', currencySymbol: '$' }));
  //   });
  //   if (this.platform.ready()) {
  //     this.platform.ready().then(res => {
  //       if (res == "cordova") {
  //         this.oneSignal.startInit(
  //            "f62c8bcb-8479-495d-a216-e921f90dcb6e",
  //                "114449481595"
  // //           "9740a50f-587f-4853-821f-58252d998399",
  // //           "714618018341"
  //         );
  //         this.oneSignal.getIds().then(response => {
  //           if (this.uid != null) {
  //             this.uid = localStorage.getItem("uid");
  //             localStorage.setItem('playerId', response.userId);
  //             this.db.object("/users/" + this.uid).update({
  //               playerId: response.userId
  //             });
  //           }
  //         });
  //         this.oneSignal.inFocusDisplaying(
  //           this.oneSignal.OSInFocusDisplayOption.InAppAlert
  //         );
  //         this.oneSignal.handleNotificationReceived().subscribe(() => { });
  //         this.oneSignal.handleNotificationOpened().subscribe(() => { });
  //         this.oneSignal.endInit();
  //       }
  //     });
  //   }
  // }
  // openPage(Pages) {
  //   this.router.navigate(Pages);
  // }

  // ngOnInit() {
  //   this.uid = localStorage.getItem("uid");
  //   if (this.uid != null) {
  //     this.db
  //       .object("/users/" + this.uid)
  //       .valueChanges()
  //       .subscribe((res: any) => {
  //         if (res != null) {
  //           this.name = res.name;
  //           this.imageUrl =
  //             res.image != "" && res.image != null
  //               ? res.image
  //               : "assets/img/profile.jpg";
  //         } else {
  //           this.name = 'USER'
  //           this.imageUrl = 'assets/img/profile.jpg';
  //         }

  //       });
  //   }
  //   this.useTranslateService();
  //   this.getNewsCount();
  //   this.getOfferCount();
    
  //   // this.listenEvent();
    
  // }
  // // private listenEvent() {
  // //   this.events.subscribe(response => {
  // //     this.imageUrl =
  // //       response.image != "" && response.image != null
  // //         ? response.image
  // //         : "assets/img/profile.jpg";
  // //     this.name = response.name;
  // //   });
  // // }
  

  // private getNewsCount() {
  //   this.db
  //     .list("/news")
  //     .valueChanges()
  //     .subscribe(res => {
  //       this.noOfItemsInNews = res.length;
  //     });
  // }

  // private getOfferCount() {
  //   this.db
  //     .list("/menuItems", ref => ref.orderByChild("offer").equalTo(true))
  //     .valueChanges()
  //     .subscribe(queriedItems => {
  //       this.noOfItemsInOffer = queriedItems.length;
  //     });
  // }


  // private useTranslateService() {
  //   let value = localStorage.getItem("language");
  //   let language = value != null ? value : "en";
  //   if (language === 'ar') {
  //     document.documentElement.dir = "rtl";
  //     this.translateService.setDefaultLang(language);
    
  //   } else {
  //     document.documentElement.dir = "ltr";
  //     this.translateService.setDefaultLang(language);
  //   }
  // }

 

  // invite() {
  //   this.socialSharing.share(
  //     "share Restaurant App with friends to get credits",
  //     null,
  //     null,
  //     "https://ionicfirebaseapp.com/#/"
  //   );
  // }

