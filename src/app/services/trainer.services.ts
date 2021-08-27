import { Injectable } from "@angular/core";
import { Trainer } from "../models/trainer.model";
import { FormControl, FormGroup } from "@angular/forms";
import { Pokemons } from "../models/pokemon.model";

@Injectable({
    providedIn: 'root'
})

export class TrainerServices{
private trainer:Trainer={
    name:'',
    pokemons:[]
};

/**
 * FormGroup is used fetch from input field and store it in localstorage.
 */
loginForm: FormGroup = new FormGroup({
    username: new FormControl('')
  })

    constructor(){}

    /**
     * 
     * @param name The name being set as the name of the trainer model
     * The function sets the trainers name, 
     * empties the trainers array of pokemons, 
     * sets the trainer model as a string in the local storage
     * 
     */
    public setTrainer(name:string):void{
        this.trainer.name=name
        this.trainer.pokemons=[]
        localStorage.setItem("username",JSON.stringify(this.trainer))
    }
    /**
     * 
     * @returns the trainer set in local storage as a JSON model
     */
    public getTrainer():Trainer{
        return JSON.parse(localStorage.getItem("username")||"{}")
    }

    /**
     * 
     * @param pokemon the pokemon model being inserted in the trainer pokemon array
     * The updated trainer model is being inserted into the local storage as a string
     */
    public addPokemon(pokemon: Pokemons) {
        this.trainer.pokemons.push(pokemon)
        localStorage.setItem("username",JSON.stringify(this.trainer))
    }

    /**
     * 
     * @returns the trainers array of pokemon that is stored in local storage as part of the model
     */
    public getCaughtPokemon():Pokemons[]{
        this.trainer=JSON.parse(localStorage.getItem("username")||"{}")
        return this.trainer.pokemons
    }

}
