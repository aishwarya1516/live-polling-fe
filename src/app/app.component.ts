import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private socketService: SocketService) {

  }
  title = 'live-polling-fe';

  ngOnInit(): void {
    this.socketService.connectSocket();
    
  }
}
