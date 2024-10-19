// import { Component, OnInit } from '@angular/core';
// import { DataService } from '../data.service';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-pagination',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './pagination.component.html',
//   styleUrl: './pagination.component.scss'
// })
// export class PaginationComponent implements OnInit {

//   data: any[] = [];
//   currentPage = 1;
//   itemsPerPage = 10;
//   totalItems = 0;
//   loading = false;

//   constructor(private dataService: DataService) {}

//   ngOnInit() {
//     this.loadData();
//   }

//   loadData() {
//     this.loading = true;
//     this.dataService.getData(this.currentPage, this.itemsPerPage).subscribe(
//       (response: any) => {
//         this.data = response.data;
//         this.totalItems = response.total;
//         this.loading = false;
//       },
//       (error: any) => {
//         console.error('Error fetching data:', error);
//         this.loading = false;
//       }
//     );
//   }

//   getTotalPages(): number {
//     return Math.ceil(this.totalItems / this.itemsPerPage);
//   }

//   onPageChange(page: number) {
//     this.currentPage = page;
//     this.loadData();
//   }

//   getPageNumbers(): number[] {
//     const totalPages = this.getTotalPages();
//     return Array.from({ length: totalPages }, (_, i) => i + 1);
//   }

// }


import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  data: any[] = []; // Holds paginated data
  currentPage = 1; // Current page number
  itemsPerPage = 10; // Number of items per page
  totalItems = 0; // Total number of items
  loading = false; // Loading flag

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadData(); // Fetch data on component initialization
  }

  // Fetch data from API and handle pagination
  loadData() {
    this.loading = true;
    this.dataService.getData(this.currentPage, this.itemsPerPage).subscribe(
      (response: any) => {
        this.data = response.data; // Paginated data
        this.totalItems = response.total; // Total items count
        this.loading = false; // Turn off loading
      },
      (error: any) => {
        console.error('Error fetching data:', error); // Handle errors
        this.loading = false;
      }
    );
  }

  // Calculate total pages based on total items and items per page
  getTotalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  // Handle page changes
  onPageChange(page: number) {
    if (page > 0 && page <= this.getTotalPages()) {
      this.currentPage = page;
      this.loadData(); // Fetch data for the new page
    }
  }

  // Generate page numbers dynamically
  getPageNumbers(): number[] {
    const totalPages = this.getTotalPages();
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
}
