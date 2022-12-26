import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookListComponent } from './components/book-list/book-list.component';

const routes: Routes = [
  { path:'',
  redirectTo: 'book-list',
  pathMatch:'full'
},
{
  path:'book-list',
  component:BookListComponent,
  canActivate:[AuthGuard],
  data:{roles:["manager","user","editor"]}
},
{
  path:'book-details',
  component:BookDetailsComponent,
  canActivate:[AuthGuard],
  data:{roles:["manager","user","editor"]}
},
{
  path:'book-details:/book',
  component:BookDetailsComponent,
  canActivate:[AuthGuard],
  data:{roles:["manager"]}
},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
