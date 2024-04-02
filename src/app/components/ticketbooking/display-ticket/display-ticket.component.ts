import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Passengers } from 'src/app/models/passengers';
import { PassengersService } from 'src/app/services/passengers.service';
import { displayticket } from 'src/app/models/displayticket';
import { displayticketService } from 'src/app/services/displayticketservice';
import { RouterService } from 'src/app/services/router.service';
import { Product } from 'src/app/models/product';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-display-ticket',
  templateUrl: './display-ticket.component.html',
  styleUrls: ['./display-ticket.component.css']
})
export class DisplayTicketComponent implements OnInit {
  passengerss!: Array<Passengers>
  passenger!: Passengers;
  displaytickets: Array<displayticket>
  display: displayticket;
  products!:Array<Product>
  product:Product;

  constructor(private displayService: displayticketService, private routerService: RouterService) {
    this.passenger = new Passengers();
    this.passengerss = [];
    this.display = new displayticket();
    this.displaytickets = [];
    this.products=[];
    this.product=new Product();

  }

  ngOnInit(): void {

  }


  getbookedticket()
   {
    this.displaytickets?.push(this.display);
    this.displayService.gettickets(this.display).subscribe((res) => {
      debugger;
      console.log(`The Add Product Result:${res}`);
      this.passengerss = res;
      debugger;
      this.passenger=this.passengerss[0];

      this.displayService.getFlightByID(this.passenger).subscribe((res1)=>
      {
      console.log(res1);
      this.products=res1;
      });
    });
  }

  CancelTicket(passengerss:Passengers[])
  {
  //this.passenger.passengerId=passengerId;
  console.log(passengerss[0].flightID);
  console.log(passengerss[0].pnr);
  this.displayService.CancelTicket(passengerss[0])
  .subscribe((res1)=>
  {
  console.log(res1);
  if(res1==true)
  {
  this.routerService.gotoDisplayTicket();
  Swal.fire('Ticket Cancelled', '', 'success');
  
  }
  if(res1==false)
  {
  Swal.fire('Ticket Cannot be Cancelled:Your Trip Date From Current Date is Than 24 hrs', '', 'success');
  }
  });
  }

  // // getTickets()
  // // {
  //    this.observablepass = this.passengerService.getTickets();
  //      this.observablepass.subscribe(
  //      pass =>{ this.passengers = pass;
  //      console.log('pass', pass);
  //      })
  //     this.routerService.gotoDisplayTicket();
  // }

}
