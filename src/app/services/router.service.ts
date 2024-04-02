import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) {
  }
  gotoLogin() {
    this.router.navigate(['login']);
  }
  gotoRegister() {
    this.router.navigate(['register']);
  }

  gotoDisplayProduct() {
    this.router.navigate(['display-product']);
  }

  gotoBookingHistory(){
    this.router.navigate(['booking-history']);
  }

  gotoDisplayTicket(){
    this.router.navigate(['display-ticket']);
  }

  gotosearchInventory(){
    this.router.navigate(['searchinventory'])
  }
  gotoProducts() {
    this.router.navigate(['products']);
  }
  
  // getUsersMultipleParams(){
  //   this.router.navigate(['products']);
  // }

  gotobookTickets(flightId?: number)
  {
    this.router.navigate(['booking/'+flightId]);

  }

  gotoAddPassenger(flightId?: number)
  {
    this.router.navigate(['add-passengers/'+flightId]);
  }
  gotoAddProduct() {
    this.router.navigate(['newproduct']);
  }
 
  gotoSearchFlights()
  {
    this.router.navigate(['search']);
  }

  getUserToken() {
    return localStorage.getItem("USERTOKEN");
  }
  SetUserToken(userToken: string) {
    localStorage.setItem("USERTOKEN", userToken);
  }
  clearLocalStorage() {
    localStorage.clear();
  }
}
