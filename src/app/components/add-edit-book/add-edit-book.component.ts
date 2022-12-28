import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BookServiceService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-add-edit-book',
  templateUrl: './add-edit-book.component.html',
  styleUrls: ['./add-edit-book.component.css']
})
export class AddEditBookComponent {

  book!:Book;

  bookForm=new FormGroup({
    id:new FormControl(),
    title:new FormControl(),
    subTitle:new FormControl(),
    author:new FormControl(),
    originalPrice:new FormControl(),
    sellingPrice:new FormControl(),
    category:new FormControl(),
    type:new FormControl(),
    rating:new FormControl(),
    discount:new FormControl(),
    paperQuality:new FormControl(),
    bookSize:new FormControl(),
    language:new FormControl(),
    editor:new FormControl(),
    publisher:new FormControl(),
    edition:new FormControl(),
    publishDate:new FormControl(),
    manufactureDate:new FormControl(),
    manufacturePlace:new FormControl(),
    pages:new FormControl()
  })

  onAddBook=(bookForm:any)=>{
    console.log(bookForm);
  this.book=bookForm.value;
  console.log(this.book);
  this._service.saveBook(this.book).subscribe({
  next:(data)=>console.log(data),
  error:(error)=>console.log(error),
  complete:()=>console.log("you are added the book")
  })
  }

  backToHome(){
    this._router.navigate(['/book-list'])
  }

  constructor(private _service:BookServiceService,private _router:Router){}

}
