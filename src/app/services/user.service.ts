import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserLoginInfo } from '../models/user-login-info';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private httpClient: HttpClient) {
  }
  registerUser(user: User): Observable<boolean> {

    return this.httpClient.post<boolean>('https://localhost:5009/api/v1.0/flight/airline/register', user);
  }
  LoginUser(loginInfo: UserLoginInfo): Observable<string> {
    console.log(`User Login Details in Service Layer ${loginInfo}`);
    return this.httpClient.post<string>('https://localhost:5009/api/v1.0/flight/user/login', loginInfo)
  }

}
