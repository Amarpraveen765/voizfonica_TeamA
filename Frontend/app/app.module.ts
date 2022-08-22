import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AboutComponent } from './about/about.component';
import { LoginService } from './login.service';
import { DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';
import { PostpaidComponent } from './postpaid/postpaid.component';
import { PrepaidComponent } from './prepaid/prepaid.component';
import { BroadbandpostpaidComponent } from './broadbandpostpaid/broadbandpostpaid.component';
import { BroadbandprepaidComponent } from './broadbandprepaid/broadbandprepaid.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { PaymentComponent } from './payment/payment.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoicesComponent } from './invoices/invoices.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    ContactComponent,
    AboutComponent,
    PostpaidComponent,
    PrepaidComponent,
    BroadbandpostpaidComponent,
    BroadbandprepaidComponent,
    MyprofileComponent,
    PaymentComponent,
    InvoiceComponent,
    InvoicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [LoginService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
