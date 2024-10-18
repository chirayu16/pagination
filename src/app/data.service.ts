import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'https://api.example.com/data'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getData(page: number, itemsPerPage: number): Observable<any> {
    const params = {
      page: page.toString(),
      per_page: itemsPerPage.toString()
    };

    return this.http.get(this.apiUrl, { params }).pipe(
      map((response: any) => ({
        data: response.data,
        total: response.total
      }))
    );
  }
}
