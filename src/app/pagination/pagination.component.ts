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

  data: any[] = []; 
  currentPage = 1; 
  itemsPerPage = 10; 
  totalItems = 0; 
  loading = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadData();
  }

  
  loadData() {
    this.loading = true;
    this.dataService.getData(this.currentPage, this.itemsPerPage).subscribe(
      (response: any) => {
        this.data = response.data; 
        this.totalItems = response.total; 
        this.loading = false; 
      },
      (error: any) => {
        console.error('Error fetching data:', error); 
        this.loading = false;
      }
    );
  }

  
  getTotalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  
  onPageChange(page: number) {
    if (page > 0 && page <= this.getTotalPages()) {
      this.currentPage = page;
      this.loadData(); 
    }
  }

  
  getPageNumbers(): number[] {
    const totalPages = this.getTotalPages();
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
}
