import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaginationComponent } from "./pagination/pagination.component";
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PaginationComponent, HttpClientModule],
  templateUrl: './app.component.html',
  providers:[DataService],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'page-list';
}
