// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable, map } from 'rxjs';


// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {

//   private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Replace with your API URL

//   constructor(private http: HttpClient) {}

//   getData(page: number, itemsPerPage: number): Observable<{ data: any[], total: number }> {
//     return this.http.get<any[]>(this.apiUrl).pipe( // Expecting the response as an array of any type
//       map((response: any[]) => {
//         const total = response.length; // Total number of items
//         const startIndex = (page - 1) * itemsPerPage;
//         const data = response.slice(startIndex, startIndex + itemsPerPage); // Paginate data
  
//         return {
//           data, // Paginated data
//           total // Total number of items
//         };
//       })
//     );
//   }
  

// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // API URL

  constructor(private http: HttpClient) {}

  // Fetch data from API and paginate it
  getData(page: number, itemsPerPage: number): Observable<{ data: any[], total: number }> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((response: any[]) => {
        const total = response.length; // Total number of items
        const startIndex = (page - 1) * itemsPerPage; // Start index for slicing
        const data = response.slice(startIndex, startIndex + itemsPerPage); // Paginate data

        return {
          data, // Paginated data
          total // Total number of items
        };
      })
    );
  }
}
