import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainerServices } from 'src/app/services/trainer.services';

@Component({
  selector: 'app-trainer-component',
  templateUrl: './trainer-component.component.html',
  styleUrls: ['./trainer-component.component.css']
})
export class TrainerComponentComponent implements OnInit {
// tempJSONstring = localStorage.getItem("username")

  constructor(private router: Router, private readonly trainerService: TrainerServices) {

  }

  ngOnInit(): void {
  }

  /**
   *    * The function returns the trainer model from the trainer services
   */
  get trainer() {
    return this.trainerService.getTrainer();
  }

  /**
   * The function clears local storage of the stored user and naviagates back to the login page
   */
  logoutUser(): void {
    localStorage.clear();
    this.router.navigateByUrl("")
    
  }

  /**
   * The function navigates the user to the pokemon catalogue page
   */
  routeToPokemons(): void {
    this.router.navigateByUrl("/pokemons")
  }
}
