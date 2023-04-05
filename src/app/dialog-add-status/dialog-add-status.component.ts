import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog-add-status',
  templateUrl: './dialog-add-status.component.html',
  styleUrls: ['./dialog-add-status.component.scss']
})
export class DialogAddStatusComponent {
  status: string;

  selectStatus(value) {
    this.status = value;
    console.log(value);
    console.log(this.status);
    

  }
}
