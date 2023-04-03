import { Component } from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dialog-add-channel',
  templateUrl: './dialog-add-channel.component.html',
  styleUrls: ['./dialog-add-channel.component.scss']
})
export class DialogAddChannelComponent {
  newChannel: string;
  channelExists: boolean = false;
  showErrorMessage: boolean = false;
  coll: any;
  channels$: Observable<any>;

  constructor(public firestore: Firestore, public dialogRef: MatDialogRef<DialogAddChannelComponent>) {
    this.coll = collection(this.firestore, 'channels');
    this.channels$ = collectionData(this.coll);
  }

  saveChannel() {
    let addedChannel = this.newChannel.toLowerCase();
    this.channels$.forEach((channel) => {
      for (let i = 0; i < channel.length; i++) {
        if(addedChannel == channel[i].title){
          this.channelExists = true;
          this.showErrorMessage = true;
        }
      }
      if (this.channelExists == false){
        addDoc(this.coll, {title: addedChannel});
        this.dialogRef.close();
      }
        this.channelExists = false;
    });
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
