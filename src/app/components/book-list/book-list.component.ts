import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
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
    'bookSize','language','editor','publisher','edition','publishDate','manufactureDate','manufacturePlace','pages','edit','delete'
  ];


  ngOnInit(): void {
    // this.page=0;
    // this.records=5;
    // this.getPagination();
    this._bookService.getBooks().subscribe({
      next:(data)=>{
        this.bookList=data;
      },
      error:(data)=>console.log(data),
      complete:()=>console.log("Completed")
    })
  }
  page:any;
  records:any;
  onPageChange(pageChangeEvent: PageEvent) {
    console.log(pageChangeEvent);
    this.records = pageChangeEvent.pageSize;
    this.page = pageChangeEvent.pageIndex;
    //console.log(this.page.pageSize);
    this.getPagination();
  }
  getPagination=()=>{
    this._bookService.getPages(this.page,this.records)
    .subscribe({
      next:(data)=>{
        this.bookList=data;
        console.log(data);
      }
    })
  }


  onDelete=(id:number)=>{
    this._bookService.deleteBook(id).subscribe({
      next:(data)=>console.log(data),
      error:(error)=>console.log(error),
      complete:()=>console.log("delete book is completed")
    })
  }
  }
