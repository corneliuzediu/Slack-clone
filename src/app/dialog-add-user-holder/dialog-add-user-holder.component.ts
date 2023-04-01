import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-add-user-holder',
  templateUrl: './dialog-add-user-holder.component.html',
  styleUrls: ['./dialog-add-user-holder.component.scss']
})
export class DialogAddUserHolderComponent {
  user = new User();
  registrationTime: Date;
  loading: boolean = false;

  constructor(
    private firestore: AngularFirestore,
    public dialogRef: MatDialogRef<DialogAddUserHolderComponent>,

  ) { }

  saveUser(){
    this.registrationTime = new Date();
    this.loading= true;
    this.user.ID = this.registrationTime.getTime();
  
  
    this.firestore
    .collection('users')
    .add(this.user.toJSON())
    .then((result: any) => {
      this.loading = false;
    });
  }
}
