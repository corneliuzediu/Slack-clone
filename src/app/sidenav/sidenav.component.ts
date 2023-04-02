import { Component } from '@angular/core';

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
  users: any = [
    'Marco von Baumbach',
    'Peter Müller',
    'Marie Kunze',
    'Paul Panzer'
  ];

  firstLetter: any = [];

  constructor() {
    this.generateFirstLetter();
  }

  generateFirstLetter() {
    for (let i = 0; i < this.users.length; i++) {
      this.firstLetter.push(this.users[i].split('')[0]);      
    }
  }

  showChannels(param: boolean) {
    this.channelsVisible = param;
  }

  showUsers(param: boolean) {
    this.usersVisible = param;
  }

  openItem(param, index){
    this.highlightMenuItem(param, index);
  }

  highlightMenuItem(param, index) {
    for(let i = 0; i < this.channels.length; i++) {
      if(document.getElementById(`channel${i}`).classList.contains('background-focused')){
      document.getElementById(`channel${i}`).classList.remove('background-focused');
      }
    }
    for(let i = 0; i < this.users.length; i++) {
      if(document.getElementById(`user${i}`).classList.contains('background-focused')){
      document.getElementById(`user${i}`).classList.remove('background-focused');
      }
    }
    document.getElementById(param + index).classList.add('background-focused');
  }
}
