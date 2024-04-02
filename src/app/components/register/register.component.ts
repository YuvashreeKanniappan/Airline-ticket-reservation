import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { RouterService } from 'src/app/services/router.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  regiterForm?: NgForm
  user: User;
  constructor(private userService: UserService, private routerSerive: RouterService) {
    console.log('Register contructor');
    this.user = new User();

  }

  ngOnInit(): void {
  }

  registerUser(regiterForm: NgForm) {

    console.log(regiterForm.value);
    this.user = regiterForm.value;
    console.log(this.user);
    this.userService.registerUser(this.user).subscribe({

      next: (res) => {

        if (res == true) {
          Swal.fire('Register successfull', 'User Registration', 'success');
          this.routerSerive.gotoLogin();
        }
        else {
          this.routerSerive.gotoRegister();
        }
      },
      error: (e) => console.error(e)


    });


  }

}
