import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {
  urlID: string;
  userRoute: any;


  constructor(
    private route: ActivatedRoute,
    private firestore: AngularFirestore,

  ) {

  }


  ngOnInit() {
    this.userRoute = this.route.params.subscribe((params) => {
      this.urlID = params['id'];
      console.log('URL Channel id:', this.urlID);

    })
  }
}
