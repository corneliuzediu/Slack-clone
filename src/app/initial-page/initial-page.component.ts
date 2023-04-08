import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserHolderComponent } from '../dialog-add-user-holder/dialog-add-user-holder.component';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { environment } from '../../environments/environment';
import 'firebase/auth';
import 'firebase/firestore';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.scss']
})

export class InitialPageComponent implements OnInit {
  docID = 'P9JqkUnlL2iGANgAKXMm';
  loginForm: any;
  formBuilder: any;

  constructor(public dialogAddUser: MatDialog, private router: Router, private firestore: AngularFirestore) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password:['', [Validators.required]]
    });
  }

  bypassLogIn() {
        this.router.navigateByUrl('/main/' + this.docID);
  }

  loginAsUser() {

  }

  onSignup() {
    
  }



  openDialogAddUser() {
    this.dialogAddUser.open(DialogAddUserHolderComponent)
  }
}
