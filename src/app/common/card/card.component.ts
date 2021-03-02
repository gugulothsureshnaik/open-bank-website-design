import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input('imageUrl') imageUrl!: string;
  @Input('title') title!: string;
  @Input('content') content!: string;
  constructor() { }

  ngOnInit() {
  }

}
