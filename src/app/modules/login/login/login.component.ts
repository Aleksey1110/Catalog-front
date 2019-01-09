import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { FlashMessageService } from 'src/app/services/flash-message.service';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public message: Message;
  loginUserData: User = {
    email: '',
    password: '',
    token: ''
  };

  constructor(
    private _loginService: LoginService,
    private _router: Router,
    private _flashMessagesService: FlashMessageService
  ) { }

  ngOnInit() {
  }

  loginUser() {
    this._loginService.loginUser(this.loginUserData)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token);
          this._router.navigate(['/editing']);

        },
        err => this._flashMessagesService.showMessage('Проверьте введенные данные').subscribe(data => this.message = data)
      );
  }

}
