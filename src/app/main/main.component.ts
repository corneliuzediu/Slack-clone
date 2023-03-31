import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  searchlist: Array<any> = ['Liu', 'Marco', 'Danny'];
  searchValue: string;
  // panelOpenState = false;

  constructor(public dialog: MatDialog) { }


  clearSearch() {
    this.searchlist = []
  }

  search() {
    this.searchlist.unshift(this.searchValue);
    this.searchValue = '';
  }
}
