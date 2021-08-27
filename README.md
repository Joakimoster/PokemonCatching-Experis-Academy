# Assignment

This assignment is called Pokémon Trainer web app which is built using the Angular Framework. The application interact with a user who can log in to the application and later collect a list of pokemons to their own pokemon list. The available pokemons has been fetched from an API and later displayed on a catalogue page where the user can see the list of pokemons with following images. Required features for this assignment were Angular framework, Angular router between components, local storage to store username and collected pokemons, and lastly Angular services to manage state. This assignment has been done utilizing pair-programming.

# Project structure

The basic structure for this project is between three components, loginSide, pokemonFolder and trainerSide. Basic routing through the components is handled in the components, and an Angular guard service to ensure that loged in users only can see the available pokemons and their own list of catched pokemons. Two services and models which represent a trainer/user and pokemons are used to manage state and representation for user and pokemons.

## Members

**Joakim Österberg & Aljosa Vuckovic**

# MyAngularProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
