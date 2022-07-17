import { Component, OnInit } from '@angular/core';
import { PollingService } from '../../services/polling.service';
import { Router } from '@angular/router';
import { SocketService } from 'src/app/services/socket.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  voteCount: any;
  nomineeData = [];
  constructor(private pollingService: PollingService,
    private router: Router,
    private socketService: SocketService) {
      this.socketService.getVoteDetails().subscribe(response => {
        this.voteCount = response.total;
      this.nomineeData = response.data;
      })
     }

  ngOnInit(): void {
    this.getPollingData();
  }
  

  getPollingData() {
    this.pollingService.getPolling(sessionStorage.getItem('uuid')).then(response => {
      this.voteCount = response.total;
      this.nomineeData = response.data;
    })
  }

  goToHome() {
    this.router.navigate(['']);
  }

}
