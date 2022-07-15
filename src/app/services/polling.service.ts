import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PollingService {

  constructor(private httpClient: HttpClient) { }



  getNominees(): Observable<any> {
    return this.httpClient.get(`${environment.apiEndPointUrl}/nominee`);
  }

  createPolling(data): Observable<any> {
    return this.httpClient.post(`${environment.apiEndPointUrl}/polling`, data);
  }

  getPolling(): Observable<any> {
    return this.httpClient.get(`${environment.apiEndPointUrl}/polling`);
  }
}
