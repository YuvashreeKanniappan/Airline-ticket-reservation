import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { RouterService } from 'src/app/services/router.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/models/booking';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
 // regiterForm?: NgForm
 bookings: Array<Booking>
  booking: Booking;
  constructor(private routerService: RouterService, private bookingservice: BookingService ,private route: ActivatedRoute) { 
    this.booking = new Booking();
    this.bookings=[]
  }

  ngOnInit(): void {
    debugger;
    var id = this.route.snapshot.paramMap.get('id');
    this.booking.flightID = Number(id);
  }

  bookingLogin() {

    this.bookings.push(this.booking);
   this.bookingservice.bookingLogin(this.bookings).subscribe((res: any) => {
   console.log(`The Add Booking Result:${res}`);
   this.bookings=res;

    //console.log(regiterForm.value);
    //this.booking = regiterForm.value;
    // console.log(this.booking);
    // this.bookingservice.bookingLogin(this.booking).subscribe({

    //   next: (res) => {
    //     this.bookings=res;
        // if (res == true) {
          Swal.fire('Booking Initiated', 'success');
         // this.routerSerive.gotoAddPassenger(this.bookings[0].flightID);
          console.log(res);

          this.routerService.gotoAddPassenger(this.bookings[0].flightID);
        // }
        // else {
        //   this.routerSerive.gotobookTickets();
        // }
      
      // error: (e) => console.error(e);
   });

   // });

  }

  addpasengers(flightId?: number)
{
  //this.router.navigate(['/hotels/' + id]);
  //this.routerservice.gotobookTickets(['/booking/' + id]);
  this.routerService.gotoAddPassenger(flightId);
  //return this.routerservice.gotobookTickets.find((h: any) => h.flightId === flightId);
}


}
