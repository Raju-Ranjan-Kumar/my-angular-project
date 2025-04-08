import { Component } from '@angular/core';
import { MenuItem } from '../model/sidbar.model';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  activeIndex: number | null = null;

  menuItems: MenuItem[] = [
    { label: 'Dashboard', icon: 'fas fa-home', route: '/admin/dashboard' },
    { label: 'User Management', icon: 'fas fa-home', route: '/admin/user' },
    {
      label: 'Settings',
      icon: 'fas fa-cog',
      children: [
        { label: 'Profile', route: '/settings/profile' },
        { label: 'Account', route: '/settings/account' },
        { label: 'Security', route: '/settings/security' }
      ]
    },
  ];

  toggle(index: number): void {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}

