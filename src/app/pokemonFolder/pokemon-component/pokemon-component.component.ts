import { Component, OnInit } from '@angular/core';
import { Pokemons } from 'src/app/models/pokemon.model';
import { PokemonServices } from 'src/app/services/pokemon.services';
import { TrainerServices } from 'src/app/services/trainer.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-component',
  templateUrl: './pokemon-component.component.html',
  styleUrls: ['./pokemon-component.component.css']
})
export class PokemonComponentComponent implements OnInit{

  constructor(private router: Router, private readonly pokemonService: PokemonServices, private readonly trainerService: TrainerServices){

    /**
     * The code checks if the available pokemon are already aught in which case they are set to caught and are not available to get caught by the same trainer again 
     */
    this.pokemons.forEach(x=>{  
      if(this.trainerService.getCaughtPokemon().includes(x)){
        x.isCaught=true
      }else{
        x.isCaught=false
      }
  })
  }

  /**
   * The function returns all the pokemon directly from the API through pokemon services 
   */
  ngOnInit(): void{
    this.pokemonService.fetchPokemons();
  }

  /**
   * The function returns all the pokemon fetched in pokemon services 
   */
  get pokemons() { 
    return this.pokemonService.getPokemon();
  }

  /**
   * The function redirects the user to the trainer page
   */ 
  redirectTrainer(): void {
    this.router.navigateByUrl("/trainer")
  }

  /**
   * 
   * @param pokemon Is the pokemon model being inserted in the trainer model array
   * The pokemon is set to caught and added through the trainer service
   * The user is notified of the caught pokemon with an alert box and the name of the pokemon
   */
  catchThePokemon(pokemon: Pokemons) {
    pokemon.isCaught=true
    this.trainerService.addPokemon(pokemon)
    alert("Success you have caught the pokemon: " + pokemon.name )
  }
}