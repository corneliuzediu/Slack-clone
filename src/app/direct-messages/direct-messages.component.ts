import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-direct-messages',
  templateUrl: './direct-messages.component.html',
  styleUrls: ['./direct-messages.component.scss']
})
export class DirectMessagesComponent implements OnInit {
  urlID: string;
  userRoute: any;
  users: any;
  users$: Observable<any>;
  channels: any;
  channels$:Observable<any>;


  constructor(
    private route: ActivatedRoute,
    private firestore: Firestore,

  ) {
    this.users = collection(this.firestore, 'users');
    this.users$ = collectionData(this.users);
    this.channels = collection(this.firestore, 'channels');
    this.channels$ = collectionData(this.channels);

  }


  ngOnInit() {
    this.userRoute = this.route.params.subscribe((params) => {
      this.urlID = params['id'];
      console.log('URL id: DM', this.urlID);
      console.log(this.users);

    })
  }
}
