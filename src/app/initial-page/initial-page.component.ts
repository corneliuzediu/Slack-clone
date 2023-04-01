import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserHolderComponent } from '../dialog-add-user-holder/dialog-add-user-holder.component';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.scss']
})
export class InitialPageComponent {
  constructor(public dialogAddUser: MatDialog) {}

  openDialogAddUser() {
    this.dialogAddUser.open(DialogAddUserHolderComponent)
  }
}
