import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from "./create-account/create-account.component";
import { LoginComponent } from './login/login.component';
import { RecoverAccountComponent } from "./recover-account/recover-account.component";

const routes: Routes = [
  { path: '' , component: LoginComponent },
  { path: 'create-account', component: CreateAccountComponent},
  { path: 'recover-account', component: RecoverAccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
