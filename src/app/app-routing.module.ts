import { AuthGuard } from './auth/auth.guard';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { CartsComponent } from './carts/carts.component';
import { BooksComponent } from './books/books.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: BooksComponent},
  { path: 'carts', component: CartsComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard]},
  { path: '**', component: BooksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
