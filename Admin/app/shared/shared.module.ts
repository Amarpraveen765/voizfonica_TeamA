import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import{ MatDividerModule } from '@angular/material/divider';
import{ MatToolbarModule } from '@angular/material/toolbar';
import{ MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import{ MatButtonModule } from '@angular/material/button';
import{ MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { AreaComponent } from './widgets/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatTableModule } from '@angular/material/table';
import { Area1Component } from './widgets/area1/area1.component';
import { Area2Component } from './widgets/area2/area2.component';
import { Area3Component } from './widgets/area3/area3.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmailComponent } from './widgets/email/email.component';
import { UserComponent } from './widgets/user/user.component';
import { User1Component } from './widgets/user1/user1.component';
import { User2Component } from './widgets/user2/user2.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    Area1Component,
    Area2Component,
    Area3Component,
    EmailComponent,
    UserComponent,
    User1Component,
    User2Component
    
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    Area1Component,
    Area2Component,
    Area3Component,
    EmailComponent,
    UserComponent,
    User1Component,
    User2Component
  ]
})
export class SharedModule { }
