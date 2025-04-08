import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../service/user.service';  // ✅ Import Service
import { DatePipe } from '../../customPipes/date.pipe'; // Import your custom pipe

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  users: any[] = [];
  formattedDate: string;

  constructor(
    private router: Router,
    private userService: UserService, 
    private datePipe: DatePipe,
  ) {
    this.formattedDate = this.datePipe.transform('2025-04-02', 'long'); // ✅ Applying the pipe
  }

  ngOnInit(): void {
    this.fetchUsers(); // ✅ Fetch users when component loads
  }

  fetchUsers(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }


  truncateTitle(title: string): string {
    return title.length > 50 ? title.substring(0, 50) + '...' : title;
  }

  logout() {
    localStorage.removeItem('isLoggedIn'); // ❌ Remove login status
    this.router.navigate(['/admin/login']); // 🔄 Redirect to login page
  }
  
}
