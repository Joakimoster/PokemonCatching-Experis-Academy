
/**
 * The model being used in the app
 */
export interface Pokemons {
    name: string;
    url: string;
     img: string;
     isCaught:boolean
}

/**
 * the odel being used when fetching the pokemon JSON fro the API
 */

export interface pokemonObject {
    count: number;
    next: string;
    previous: string;
    results: [
        {
            name: string;
            url: string;
        }
    ]
}

