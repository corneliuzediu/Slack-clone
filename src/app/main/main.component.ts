import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';
import { Observable } from 'rxjs';
import { DialogAddStatusComponent } from '../dialog-add-status/dialog-add-status.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  user: User = new User;
  urlID: string;
  userRoute: any;
  userStatus: string;
  logInTime: Date = new Date;
  public userHolder: any;
  color: string;



  searchlist: Array<any> = ['Liu', 'Marco', 'Danny'];
  searchValue: string;
  // panelOpenState = false;

  constructor(public dialog: MatDialog,
    private route: ActivatedRoute,
    private firestore: AngularFirestore,
    public dialogAddStatus: MatDialog) { }


  ngOnInit() {
    this.userRoute = this.route.params.subscribe((params) => {
      this.urlID = params['id'];
      this
        .firestore
        .collection('users')
        .doc(this.urlID)
        .valueChanges()
        .subscribe((user: any) => {
          console.log("User from firebase:", user);
          this.user = user;
          // this.user.firstName = user.firstName;
          // this.user.lastName = user.lastName;
          // this.user.email = user.email;
          // this.user.password = user.password;
          // this.user.telephone = user.telephone;
          // this.user.ID = user.ID;
          // this.user.img = user.img;
          // this.user.title = user.title;
          // this.user.status = user.status;
          // this.user.statusTime = user.statusTime;
          // this.user.channels = user.channels;
          // this.user.contacts = user.contacts;
          // this.user.searchHistory = user.searchHistory;


          // user.statusTime = this.logInTime.getTime();
          // user.status = true;
          // this.user = user;
          // console.log(this.user);

          this.getUserStatus();

        });
    })
  }

  ngOnDestroy() {
    this.userRoute.unsubscribe();
  }


  clearSearch() {
    this.searchlist = []
  }

  search() {
    this.searchlist.unshift(this.searchValue);
    this.searchValue = '';
  }

  getUserStatus() {
    let statusObj;
    if (this.user.status == '') {
      statusObj = { status: 'Active' }
      this.firestore
        .collection('users')
        .doc(this.urlID)
        .update(statusObj)
        .then(() => {
          console.log(this.user);

        })
    }
  }


  openDialogAddStatus() {
    this.dialogAddStatus.open(DialogAddStatusComponent)
  }
}
