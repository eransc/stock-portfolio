import { Component, OnInit } from '@angular/core';
import { StocksService } from '../shared/stocks.service';

@Component({
  selector: 'app-stock-table',
  templateUrl: './stock-table.component.html',
  styleUrls: ['./stock-table.component.scss']
})
export class StockTableComponent implements OnInit {

  constructor(public stockService: StocksService) { }

  ngOnInit(): void {
  }

  onDelete(symbol:string){
    this.stockService.deleteSymbol(symbol);
  }

}
