import { Injectable } from '@angular/core';
import { Symbol } from './symbol.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { isArray } from 'util';

@Injectable({
  providedIn: 'root',
})
export class StocksService {
  readonly rootURL = 'http://api.iextrading.com/1.0/tops/last?symbols=';

  symbols: Symbol[] = [];

  constructor(public http: HttpClient) {
    if (localStorage.getItem('symbols') !== null){
      this.symbols = JSON.parse(localStorage.getItem('symbols'));
    }
  }

  loadSymbols(symbol: string) {
    this.http.get(this.rootURL + symbol).subscribe(
      (data) => {   
        // if (isArray(data)){
        //   data.forEach(item => {
        //     this.symbols.push(item);
        //   })
        // }     
        this.symbols.push(data[0]);
        console.log('symbols', this.symbols);
        localStorage.setItem('symbols', JSON.stringify(this.symbols));
      },
      (err: HttpErrorResponse) => {
        // error
        console.log(err);
      }
    );
    
  }

  deleteSymbol(symbol: string) {
    this.symbols = this.symbols.filter(item => item.symbol !== symbol);
    localStorage.setItem('symbols', JSON.stringify(this.symbols));
  }
}
