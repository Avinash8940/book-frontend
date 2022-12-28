import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from 'src/app/models/book';
import { BookServiceService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})

// book!:Book;

export class BookDetailsComponent implements OnInit {

  constructor(private _service:BookServiceService) { }

  ngOnInit(): void {
  }

}
