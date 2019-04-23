import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  username: any = '';
  password: any = '';

  constructor(private auth: AuthService) { }

  ngOnInit() {
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
  }
  catch (error) {
    throw error
  }

}
 
}
