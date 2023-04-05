import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, UrlTree } from '@angular/router';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userRoute: any;
  urlID: any;
  user: User = new User;


  constructor(public dialog: MatDialog,
    private route: ActivatedRoute,
    private firestore: AngularFirestore) { }



  ngOnInit(): void {
    console.log(UrlTree);

    this.userRoute = this.route.parent.params.subscribe((params) => {
      this.urlID = params['id'];
      this
        .firestore
        .collection('users')
        .doc(this.urlID)
        .valueChanges()
        .subscribe((user: any) => {
          console.log(user);
          this.user = user;
        });
    })

  }
}
