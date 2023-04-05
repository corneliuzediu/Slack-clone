import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  urlID: string;
  userRoute: any;
  public userHolder: any;



  searchlist: Array<any> = ['Liu', 'Marco', 'Danny'];
  searchValue: string;
  // panelOpenState = false;

  constructor(public dialog: MatDialog,
    private route: ActivatedRoute,
    private firestore: AngularFirestore) { }


  ngOnInit() {
    this.userRoute = this.route.params.subscribe((params) => {
      this.urlID = params['id'];
      this
        .firestore
        .collection('users')
        .doc(this.urlID)
        .valueChanges()
        .subscribe((user: any) => {
          // console.log(user);
          // console.log(params['id']);
          // console.log(this.userRoute);
          
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
}
