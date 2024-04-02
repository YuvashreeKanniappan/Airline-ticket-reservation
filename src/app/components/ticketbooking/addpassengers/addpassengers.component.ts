import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Passengers } from 'src/app/models/passengers';
import { PassengersService } from 'src/app/services/passengers.service';
import { RouterService } from 'src/app/services/router.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addpassengers',
  templateUrl: './addpassengers.component.html',
  styleUrls: ['./addpassengers.component.css']
})
export class AddpassengersComponent implements OnInit {
  passengerss: Array<Passengers>
  passenger : Passengers;
  constructor(private passengerService: PassengersService, private routerService: RouterService, private route: ActivatedRoute) { 
  this.passenger = new Passengers();
  this.passengerss = [];
  }
  ngOnInit(): void {
    var id = this.route.snapshot.paramMap.get('id');
    this.passenger.flightID = Number(id);
  }

  addPassenger() {
    this.passengerss.push(this.passenger);
    this.passengerService.addPassengers(this.passengerss).subscribe((res: any) => {
      console.log(`The Add Product Result:${res}`);
      this.passengerss=res;
      // if (res == true) {
        Swal.fire('Passenger Details', 'Added Successfully!!', 'success');
        this.routerService.gotoAddPassenger();
    //}
      // else {
       // this.routerService.gotoLogin();
      //}
    });
}

  showticket(flightID?: number)
  {
    this.routerService.gotoDisplayTicket();
  }

}
