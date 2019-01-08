import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData: User = {
    email: '',
    password: '',
    token: ''
  };

  constructor(
    private _loginService: LoginService,
    private _router: Router
    ) { }

  ngOnInit() {
  }

  loginUser() {
    this._loginService.loginUser(this.loginUserData)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this._router.navigate(['/editing']);
        },
        err => console.log(err)
      );
  }

}
