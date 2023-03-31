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

  showChannels(param: boolean) {
    this.channelsVisible = param;
  }

  showUsers(param: boolean) {
    this.usersVisible = param;
  }
}
