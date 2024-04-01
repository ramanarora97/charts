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
      { date: '2024-03-25', value: 50 },
      { date: '2024-03-26', value: 60 },
      { date: '2024-03-27', value: 70 },
      { date: '2024-03-28', value: 80 },
      { date: '2024-03-29', value: 90 },
      { date: '2024-03-30', value: 100 },
      { date: '2024-03-31', value: 110 }
    ]);
  }

}
