import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-users-search',
  templateUrl: './users-search.component.html',
  styleUrls: ['./users-search.component.css']
})
export class UsersSearchComponent implements OnInit {

  @Input() users: User[];

  constructor() { }

  ngOnInit() {
  }

}
