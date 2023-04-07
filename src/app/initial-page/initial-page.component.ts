import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserHolderComponent } from '../dialog-add-user-holder/dialog-add-user-holder.component';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.scss']
})
export class InitialPageComponent implements OnInit {
  docID = 'P9JqkUnlL2iGANgAKXMm';
  constructor(public dialogAddUser: MatDialog, private router: Router, private firestore: AngularFirestore) { }


  ngOnInit() {

  }

  bypassLogIn() {
        this.router.navigateByUrl('/main/' + this.docID);
  }

  logIn() {
    console.log('anmeldung');
  }

  openDialogAddUser() {
    this.dialogAddUser.open(DialogAddUserHolderComponent)
  }
}
