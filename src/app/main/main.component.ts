import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogSearchComponent } from '../dialog-search/dialog-search.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  constructor(public dialog: MatDialog) { }

  openSearch() {
    const dialogRef = this.dialog.open(DialogSearchComponent, {
      width: '200px',
      height: '300px'
    });
  }
}
