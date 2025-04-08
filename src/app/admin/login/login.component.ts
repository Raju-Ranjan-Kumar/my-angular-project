import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  // ✅ Static credentials
  private validEmail = 'admin@gmail.com';
  private validPassword = 'Admin@12345';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.email === this.validEmail && this.password === this.validPassword) {
      localStorage.setItem('isLoggedIn', 'true'); // ✅ Set login status
      this.router.navigate(['/admin/user']); // ✅ Redirect to user page
    } else {
      this.errorMessage = 'Invalid email or password. Please try again.';
    }
  }
  
}
