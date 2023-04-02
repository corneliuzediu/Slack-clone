import { Component } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  channelsVisible: boolean = true;
  usersVisible: boolean = true;
  channels: any = [
    'allgemein',
    'angular',
    'community',
    'html/css',
    'javascript',
    'live-calls',
    'projekt-feedback'
  ];
  users: any;
  users$: Observable<any>;
  firstLetter: any = [];

  constructor(public firestore: Firestore) {
    this.users = collection(this.firestore, 'users');
    this.users$ = collectionData(this.users);
    this.generateFirstLetter();
  }

  generateFirstLetter() {
    this.users$.forEach((user) => {
      for (let i = 0; i < user.length; i++) {
        this.firstLetter.push(user[i].firstName.split('')[0]);
        console.log(user[i].firstName);
      }
    })
  }

  showChannels(param: boolean) {
    this.channelsVisible = param;
  }

  showUsers(param: boolean) {
    this.usersVisible = param;
  }

  openMenuItem(param, index) {
    this.highlightMenuItem(param, index);
  }

  highlightMenuItem(param, index) {
    for (let i = 0; i < this.channels.length; i++) {
      if (document.getElementById(`channel${i}`).classList.contains('background-focused')) {
        document.getElementById(`channel${i}`).classList.remove('background-focused');
      }
    }
    this.users$.forEach((user) => {
      for (let i = 0; i < user.length; i++) {
        if (document.getElementById(`user${i}`).classList.contains('background-focused')) {
          document.getElementById(`user${i}`).classList.remove('background-focused');
        }
      }
      document.getElementById(param + index).classList.add('background-focused');
    });
  }
}
