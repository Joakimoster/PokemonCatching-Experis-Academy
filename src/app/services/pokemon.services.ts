import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { pokemonObject, Pokemons } from "../models/pokemon.model";
import { TrainerServices } from "./trainer.services";

@Injectable({
    providedIn: 'root'
})

export class PokemonServices {
    private pokemons: Pokemons[] = []


    constructor(private readonly http: HttpClient, private readonly trainerService: TrainerServices) {
    }

    /**
     * The function fetches the a JSOn object consisted of the properties found in the pokemonObject model.
     * Some of the fetched data is set as properties of the pokemon model which is also being added upon with other values not fetched from the API (such as "is caught") 
     */
    public fetchPokemons(): void {
        this.http.get<pokemonObject>('https://pokeapi.co/api/v2/pokemon/?limit=150')
            .subscribe(pokemons => {

                this.pokemons = pokemons.results.map(x => {

                    let temp = x.url.slice(0, x.url.length - 1)
                    temp = temp.slice(temp.lastIndexOf('/') + 1, temp.length)

                    let caught = false

                    this.trainerService.getCaughtPokemon().forEach(v => {
                        if (v.name === x.name) {
                            caught = true;
                            console.log("exists", caught);

                        }
                    })

                    return {
                        ...x,
                        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${temp}.png`,
                        isCaught: caught
                    }
                });

            })
    }

    /**
     * 
     * @returns returns the array consisted of the pokemon objects
     */
    public getPokemon(): Pokemons[] {
        return this.pokemons;
    }
}