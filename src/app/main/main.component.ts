import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';
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
          user.statusTime = this.logInTime.getTime();
          this.user = user;
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

  getUserStatus(){
    if(this.activeFor() < 2000){
      this.user.status = true;
    } else{
      this.user.status = false;
    }
  }

  activeFor(){
    let checkTime: Date = new Date;
    let diff = checkTime.getTime() - this.user.statusTime;
    return diff
  }

  openDialogAddStatus(){
    this.dialogAddStatus.open(DialogAddStatusComponent)
  }
}
