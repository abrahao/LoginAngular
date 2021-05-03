import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from "./create-account/create-account.component";
import { LoginComponent } from './login/login.component';
import { RecoverAccountComponent } from "./recover-account/recover-account.component";
import { HomeComponent } from "./home/home.component";
import { MsgRecoverComponent } from "./msg-recover/msg-recover.component";
import { MsgCreatedAccountComponent } from "./msg-created-account/msg-created-account.component";


const routes: Routes = [
  { path: '' , component: LoginComponent },
  { path: 'create-account', component: CreateAccountComponent},
  { path: 'recover-account', component: RecoverAccountComponent },
  { path: 'home', component: HomeComponent},
  { path: 'msg-recover', component: MsgRecoverComponent },
  { path: 'login', component: LoginComponent},
  { path: 'msg-created-account', component: MsgCreatedAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
