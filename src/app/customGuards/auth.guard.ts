// import { CanActivateFn } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = localStorage.getItem('isLoggedIn'); // Check login status

    if (isAuthenticated === 'true') {
      return true; // ✅ Allow access
    } else {
      this.router.navigate(['/admin/login']); // ❌ Redirect to login
      return false;
    }
  }
}
