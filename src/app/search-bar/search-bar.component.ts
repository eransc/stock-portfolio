import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StocksService } from '../shared/stocks.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  search: string = 'SNAP';
  constructor(private stockService: StocksService) {
    
  }

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.stockService.loadSymbols(this.search);
  }
}
