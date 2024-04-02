import { TokenizeResult } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserLoginInfo } from 'src/app/models/user-login-info';
import { RouterService } from 'src/app/services/router.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginInfo: UserLoginInfo;
  constructor(private routerService: RouterService, private userService: UserService, private formBuilder: FormBuilder) {
    console.log('login contructor');
    this.loginInfo = new UserLoginInfo();
    this.loginForm = formBuilder.group({
      name: ["", Validators.compose([Validators.required, Validators.minLength(5)])],
      password: ["", Validators.compose([Validators.required, Validators.minLength(5)])]
    });
  }

  ngOnInit(): void {
  }

  userLogin(loginForm: FormGroup) {
    this.loginInfo = loginForm.value;
    this.userService.LoginUser(this.loginInfo).subscribe({
      next: (res) => {
        console.log(res);
        let jsonObjectDetails = JSON.stringify(res);
        let userRequiredToken = JSON.parse(jsonObjectDetails);
        console.log(`TOKEN afeter Login ::::::${userRequiredToken["token"]}`);
        this.routerService.SetUserToken(userRequiredToken["token"]);
        Swal.fire('Login Sucesss', 'User Login!!', 'success');
         this.routerService.gotoProducts();
        this.routerService.gotoDisplayProduct();
      },
      error: (e) => console.error(e)
    })
  }
}



