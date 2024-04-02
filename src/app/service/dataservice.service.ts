import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  constructor(private http: HttpClient) { }

  getLastSevenDaysData(): Observable<any[]> {
    // Implement HTTP call to fetch data from your backend API
    // Example:
    // return this.http.get<any[]>('your-backend-api-url/last-seven-days-data');
    // For demo, returning static data
    return of([
      { date: '25', value: 10 },
      { date: '26', value: 15 },
      { date: '27', value: 20 },
      { date: '28', value: 25 },
      { date: '29', value: 30 },
      { date: '30', value: 40 },
      { date: '31', value: 50 }
    ]);
  }

}
