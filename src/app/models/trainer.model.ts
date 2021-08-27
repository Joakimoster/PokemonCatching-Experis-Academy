import { Pokemons } from "./pokemon.model";

export interface Trainer {
    name: string;
    pokemons: Pokemons[]
}
