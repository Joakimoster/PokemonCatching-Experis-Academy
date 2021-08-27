import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

/**
 * Service which is used to the Auth guard for this project.
 */
export class AuthService{
    constructor() {  }

    /**
     * Checks whether there is an active user in the localstorage.
     * @returns username from localstorage
     */
    isLoggedIn() {
        return !!localStorage.getItem('username')
    }
}