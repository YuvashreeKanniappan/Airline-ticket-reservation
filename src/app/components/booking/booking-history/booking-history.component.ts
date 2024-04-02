import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/booking';
import { BookingService } from 'src/app/services/booking.service';
import { RouterService } from 'src/app/services/router.service';
import { History } from 'src/app/models/history';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {
  // observableticket: Observable<Booking[]>;
  // bookedtickets : Booking[] =[];
  bookings!: Array<Booking>
booking!: Booking;
histories : Array<History>
history: History;

  constructor(private bookingService: BookingService, private routerService: RouterService) { 
    // this.observableticket = this.bookingService.getBookingHistory();
    this.booking! = new Booking();
this.bookings! = [];
this.history = new History();
this.histories = [];
  }

  ngOnInit(): void {
  }

  // getBookingHistory()
  //  {
  //    this.observableticket = this.bookingService.getBookingHistory();
  //      this.observableticket.subscribe(
  //      pass =>{ this.bookedtickets = pass;
  //      console.log('pass', pass);
  //      })
  //     this.routerService.gotoBookingHistory();
  // }


  BookingHistory()
{

this.histories?.push(this.history);
// let starttime=this.search.trip_Date;
// let fromplace=this.search.Fromplace;
// let Toplace=this.search.ToPlace;
//let airlinename=this.inventory.airline




// let starttime=JSON.stringify(this.inventory.startdatetime);
// let fromplace=JSON.stringify(this.inventory.fromPlace);
// let Toplace=JSON.stringify(this.inventory.toPlace);
// let airlinename=JSON.stringify(this.inventory.airline);
this.bookingService.getBookingHistory(this.history).subscribe((res) => {
debugger;
console.log(`The Add Product Result:${res}`);
this.bookings=res;
debugger;



});
}

}
