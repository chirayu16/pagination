
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; 

  constructor(private http: HttpClient) {}

  getData(page: number, itemsPerPage: number): Observable<{ data: any[], total: number }> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((response: any[]) => {
        const total = response.length; 
        const startIndex = (page - 1) * itemsPerPage; 
        const data = response.slice(startIndex, startIndex + itemsPerPage); 

        return {
          data, 
          total
        };
      })
    );
  }
}
