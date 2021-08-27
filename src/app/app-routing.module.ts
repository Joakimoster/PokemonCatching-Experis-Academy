import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthGuard } from './auth.guard';
import { LoginComponentComponent } from './loginSide/login-component/login-component.component';
import { PokemonComponentComponent } from './pokemonFolder/pokemon-component/pokemon-component.component';
import { TrainerComponentComponent } from './trainerSide/trainer-component/trainer-component.component';

const routes: Routes = [
    {
        path: "",
        component: LoginComponentComponent
    },
    {
        path: "pokemons", component: 
        PokemonComponentComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "trainer", component:
        TrainerComponentComponent,
        canActivate:[AuthGuard]
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}