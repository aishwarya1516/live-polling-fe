import { Component, OnInit } from '@angular/core';
import { PollingService } from '../../services/polling.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SocketService } from 'src/app/services/socket.service';
@Component({
  selector: 'app-polling',
  templateUrl: './polling.component.html',
  styleUrls: ['./polling.component.css']
})
export class PollingComponent implements OnInit {
  public nomineeList = [];
  constructor(private pollingService: PollingService,
    private snackBar: MatSnackBar,
    private router: Router,
    private socketService: SocketService
    ) { }

  ngOnInit(): void {
    
    this.getNominee();
  }

  goToHome() {
    this.router.navigate(['']);
  }

  getNominee() {
    this.pollingService.getNominees().subscribe(response => {
      if(response) {
        this.nomineeList = response;
      }
    }, err => {
      this.nomineeList = [];
    })
  }

  selectedCandidate(nominee) {
    console.log('nominee data', nominee);
    const data = {
      candidateId: nominee._id
    }
    if(sessionStorage.getItem('candidate') === null && sessionStorage.getItem('party') === null) {
    //   this.pollingService.createPolling(data).subscribe(response => {
    
    //   console.log('response');
    // })
    this.socketService.sendVote(data);
    //   sessionStorage.setItem('candidateId', nominee._id);
    } else {
      this.openSnackBar();
    }
    
  }

  openSnackBar() {
    this.snackBar.open('You have already voted!!', '', {
      duration: 3000
    });
  }


}
