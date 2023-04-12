import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  selectedItem: any = [];
  constructor(public dataservice: DataService) {
    this.selectedItem.title = '';
    this.selectItem();
  }

  selectItem() {
    if (this.dataservice.selectedChannel) {
      if (!this.dataservice.selectedChannel.firstName) {
        this.selectedItem.title = this.dataservice.selectedChannel.firstName;
      }
    } else {
      this.selectedItem.title = '';
    }
  }
}
