import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BookServiceService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private _bookService:BookServiceService,private _router:Router) { }

  bookList!:Book[];

  books:Book[] | undefined;

  bookColumns: string[] = [
    'id','title','subTitle','author','originalPrice','sellingPrice','category','type','rating','discount','paperQuality',
    'bookSize','language','editor','publisher','edition','publishDate','manufactureDate','manufacturePlace','pages'
  ];

  ngOnInit(): void {
    this._bookService.getBooks().subscribe({
      next:(data)=>{
        this.bookList=data;
      },
      error:(data)=>console.log(data),
      complete:()=>console.log("Completed")
    })
  }

showDetails=(book:Book)=>{
  console.log(book);

    this._router.navigate (['book-grid',book.id])
}

  }
