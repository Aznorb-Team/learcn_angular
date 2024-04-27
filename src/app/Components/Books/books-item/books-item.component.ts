import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  selector: 'book-item',
  templateUrl: './books-item.component.html',
  styleUrls: ['./books-item.component.css'],
  animations: [
    trigger('expandedPanel', [
      transition('void => *', [
          style({ opacity: 0 }),
          animate('1.2s', style({ opacity: 1 })),
      ]),
      transition('* => void', [
          animate('1.2s', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class BooksItemComponent implements OnInit {

  value: any = null;
  constructor() {}

  ngOnInit(): void {
  }

}
