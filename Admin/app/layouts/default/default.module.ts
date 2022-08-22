import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { PostComponent } from 'src/app/modules/post/post.component';
import { EmailsComponent } from 'src/app/modules/emails/emails.component';
import { UsersComponent } from 'src/app/modules/users/users.component';
import { UsersDeleteComponent } from 'src/app/modules/users-delete/users-delete.component';
import { UsersupdateComponent } from 'src/app/modules/usersupdate/usersupdate.component';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    PostComponent,
    EmailsComponent,
    UsersComponent,
    UsersDeleteComponent,
    UsersupdateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule
 ],
  exports: [RouterModule]
})
export class DefaultModule { }
