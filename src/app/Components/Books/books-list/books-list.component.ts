import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { BooksItemComponent } from '../books-item/books-item.component';

@Component({
  selector: 'books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  @ViewChild('book', { read: ViewContainerRef }) book;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver
    ) {}

    addBook() {
        this.book.clear();

        let bookItemComponent = this.componentFactoryResolver.resolveComponentFactory(
            BooksItemComponent
        );
        console.log(bookItemComponent);
        let bookItemComponentRef = this.book.createComponent(
            bookItemComponent
        );

        console.log(bookItemComponentRef);
        (<BooksItemComponent>(
            bookItemComponentRef.instance
        )).value = {
            title: 'Great Expectations',
            author: 'Charles Dickens',
        };
    }

  ngOnInit(): void {
  }

}
