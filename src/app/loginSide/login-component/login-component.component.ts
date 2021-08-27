import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TrainerServices } from 'src/app/services/trainer.services';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('')
  })

  constructor(private router: Router, private readonly trainerService: TrainerServices) {

  }

  ngOnInit(): void {

    /**
     * The code prevents the user from entering the login page if there already is a user stored in local storage.
     */
    if (localStorage.getItem("username") !== "") {
      this.router.navigateByUrl("/trainer")
    }
  }
  
  /**
   * 
   * @param event the user name being stored as the name of the user in local storage.
   * The inital condition checks if the input is empty and promps the user to enter a valid user name.
   * The other condition sets the user name of the user and navigates to the trainer page.
   */
  onSubmit(event: any) {
    if (event.target.username.value == '') {
      alert("Please enter your trainer name!")
    } else {
      this.trainerService.setTrainer(event.target.username.value)
      this.router.navigateByUrl("/trainer")
    }
  }
}
