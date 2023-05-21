import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { DocumentSnapshot, Firestore, collection, collectionData, doc, getDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {
  urlID: string;
  userRoute: any;
  user = this.dataservice.user;
  channels$: Observable<any>;
  channel: any;
  docSnap: DocumentSnapshot;


  constructor(
    private route: ActivatedRoute,
    private firestore: Firestore,
    private dataservice: DataService
  ) {
    this.channels$ = collectionData(collection(this.firestore, 'channels'), { idField: 'id'});
  }


  ngOnInit() {
    this.userRoute = this.route.params.subscribe((params) => {
      this.urlID = params['id'];
      console.log('URL Channel id:', this.urlID);
      console.log(this.user);
    })
    this.channels$.forEach(async (channels) => {
      for (let i = 0; i < channels.length; i++) {
        if (channels[i].ID == this.urlID) {
          this.docSnap = await getDoc(doc(this.firestore, 'channels', channels[i]['id']));
          this.channel = this.docSnap.data();
        }
      }
    });
  }
}
