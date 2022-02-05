import { Component, OnInit } from '@angular/core';
import {
  Platform,
} from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class LoginPage implements OnInit {

  login: FormGroup;
  email:string;
  password: string;
 
  constructor(
    public inAppBrowser: InAppBrowser,
    private authService: AuthService,
    public pltfrom: Platform,
    public router: Router,
    public fb: FormBuilder
   ) { 
     if(this.authService.logedInRes){
       this.router.navigate(['/pages'])
     }
   }


  /**
   * ngOnInit  load
   */
 ngOnInit() {   
    /**
     * Validators process
     */
    // this.login = this.fb.group({
    //   email: new FormControl(
    // //     '',
    //     [
    //       Validators.required,
    //       Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
    //     ]
    // //   ),
      // login: new FormControl(true, Validators.pattern('true')),
      // password: new FormControl(
    //     '',
    //     [
    //       Validators.required,
    //       Validators.minLength(8),
    //       Validators.maxLength(20),
    //       Validators.pattern(
    //         '(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[$#@$!%*?&])[A-Za-zd$#@$!%*?&].{7,}'
    //       ),
    //     ]
    //   ),
    // });
    // setTimeout(async () => {
    //   this.loginModal = await this.modalCtrl.dismiss();
    // }, 2000);
    this.build();
  }

  build(){
    this.login = this.fb.group({
      email: new FormControl(''),
      password: new FormControl(''),
    })
  }

  doLogin() {
    const param = this.login.getRawValue();
    if(this.email != '' && this.password != ''){
      if(this.authService.login(this.email, this.password)){
        console.log(param)
        alert('login sucessful');
        this.router.navigate(['/pages'])
      }
      else{
        alert('no record found')
      }
    }
  }

}
