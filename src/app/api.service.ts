import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrackerService {
  private apiUrl = 'http://103.92.47.69/hitechErp/Api/Accounting/CashierAccountingCashRecieve.php';

  constructor(private http: HttpClient) {}

  fetchTrackerData(payload: any): Observable<any> {
    return this.http.post(this.apiUrl, payload);
  }
}


