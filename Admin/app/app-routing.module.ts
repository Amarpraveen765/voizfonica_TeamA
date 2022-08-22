import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { EmailsComponent } from './modules/emails/emails.component';
import { PostComponent } from './modules/post/post.component';
import { PostsComponent } from './modules/posts/posts.component';
import { UsersDeleteComponent } from './modules/users-delete/users-delete.component';
import { UsersComponent } from './modules/users/users.component';
import { UsersupdateComponent } from './modules/usersupdate/usersupdate.component';

const routes: Routes = [{
  path:'',
  component: DefaultComponent,
  children:[{
    path:'',
    component: DashboardComponent
  },{path:'posts',
component: PostsComponent},
{path:'post',
component: PostComponent},
{path:'emails',
component: EmailsComponent},
{path:'users',
component: UsersComponent},
{path:'usersDelete',
component: UsersDeleteComponent},
{path:'usersUpdate',
component: UsersupdateComponent}]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
