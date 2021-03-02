import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public minValue:number = 100000;
  public maxValue:number = 300000;
  public incomeRange:number = 0;
  public expenseRange:number = 0;
  constructor() { 
  }

  ngOnInit(): void {
  }

}
