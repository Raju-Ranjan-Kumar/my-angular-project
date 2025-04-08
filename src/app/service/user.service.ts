
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  
  constructor(private http: HttpClient) {}

  /**
   * Fetch users from API
   * @returns Observable<any[]> List of users
   */
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
