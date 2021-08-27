import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AuthGuard } from './auth.guard';
import { AuthService } from './services/auth.services';

import { AppComponent } from './app.component';
import { LoginComponentComponent } from './loginSide/login-component/login-component.component';
import { PokemonComponentComponent } from './pokemonFolder/pokemon-component/pokemon-component.component';
import { AppRoutingModule } from './app-routing.module';
import { TrainerComponentComponent } from './trainerSide/trainer-component/trainer-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    PokemonComponentComponent,
    TrainerComponentComponent,
    TrainerComponentComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
