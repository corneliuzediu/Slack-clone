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
  constructor(public dialogAddUser: MatDialog, private router: Router, private firestore: AngularFirestore) { }


  ngOnInit() {

  }

  bypassLogIn() {


    this.firestore
      .collection('users')
      .get()
      .subscribe((docID) => {
        console.log(docID);
        this.router.navigateByUrl('/main/' + docID);
        })
  }

  openDialogAddUser() {
    this.dialogAddUser.open(DialogAddUserHolderComponent)
  }
}
