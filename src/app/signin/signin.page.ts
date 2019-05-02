import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  username: any = '';
  password: any = '';
  token:any

  constructor(private auth: AuthService,
    public route: NavController) { }

  ngOnInit() {
    this.token = window.localStorage.getItem('@token')
    if(this.token){
      this.route.navigateForward("/tabs/tab1")
    }
  }

  async signin() {
    try {
    var body = {
      username: this.username,
      password: this.password
    }
    const res: any = await this.auth.onSignin(body)
    console.log(res)
    window.localStorage.setItem('@token', res.token)
    if(res){
      this.route.navigateForward("/tabs/tab1")
    }
  }
  catch (error) {
    throw error
  }

}
 
}
