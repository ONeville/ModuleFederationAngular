import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export interface User {
  name: string;
  email: string;
}


@Component({
  selector: 'app-profile-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
  exportAs: 'ListUserComponent',
})
export class ListUserComponent implements OnInit {
  users: User[] = [];
  constructor() {}

  ngOnInit(): void {}

  /**
   * Handle the remove user when the "Remove User" button is clicked
   * @param user: the user info
   */
  removeUser(user: User): void {}
}
