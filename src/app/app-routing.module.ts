import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { AddEditBookComponent } from './components/add-edit-book/add-edit-book.component';

const routes: Routes = [
  { path:'',
  redirectTo: 'book-list',
  pathMatch:'full'
},
{
  path:'book-list',
  component:BookListComponent,
  canActivate:[AuthGuard],
  data:{roles:["admin","user","editor"]}
},
{
  path:'add-book',
  component:AddEditBookComponent,
  canActivate:[AuthGuard],
  data:{roles:["admin"]}
},
{
  path:'book-details/:book',
  component:BookDetailsComponent,
  canActivate:[AuthGuard],
  data:{roles:["admin","user","editor"]}
},
{
  path:'grid-view',component:BookDetailsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
