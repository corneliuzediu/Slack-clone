import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-search',
  templateUrl: './dialog-search.component.html',
  styleUrls: ['./dialog-search.component.scss']
})
export class DialogSearchComponent {
  searchlist: Array<any> = ['Liu','Marco', 'Danny'];
  constructor(public dialog: MatDialog) { }



  closeDialog() {
    this.dialog.closeAll();
  }


  clearSearch() {

  }

}
