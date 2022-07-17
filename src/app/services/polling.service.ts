import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PollingService {

  constructor(private httpClient: HttpClient) { }



  getNominees(): Promise<any> {
    return this.httpClient.get(`${environment.apiEndPointUrl}/nominee`).toPromise();
  }

  createPolling(data): Promise<any> {
    return this.httpClient.post(`${environment.apiEndPointUrl}/polling`, data).toPromise();
  }

  getPolling(id): Promise<any> {
    let header = new HttpHeaders().set(
      "Authorization",
       sessionStorage.getItem('uuid')
    );
    return this.httpClient.get(`${environment.apiEndPointUrl}/polling`,{ headers: header}).toPromise();
  }
}
