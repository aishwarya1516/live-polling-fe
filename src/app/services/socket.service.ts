import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import {  Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  voteDataList: any;
  constructor(private socket: Socket) { }
  message = new BehaviorSubject<any>('');
  connectSocket() {
    this.socket.on('connect', () => {
      
    })
  }

  sendVote(data) {
    this.socket.emit('vote', data);
  }

  getVoteDetails() {
    return Observable.create((observer) => {
      this.socket.on('voteData', (values) => {
        observer.next(values);
      })
    })
   
  }
}
