import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.services';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
    constructor (private _authService: AuthService,
       private _router: Router) 
    { }

    /**
     * Checks if theres an active user in the local storage. Return true if there is a user in local storage, which allows a user to navigate to all components.
     * Return false if local storage is empty for a username. Then navigate back to the login screen. 
     * The auth guard protects the pokemon catalogue and trainer page if there are no active user.
     * @returns §boolean
     */
    canActivate(): boolean {
      if(this._authService.isLoggedIn()) {
        return true
      } else {
        this._router.navigate([''])
        return false
      }
    }
  
}
