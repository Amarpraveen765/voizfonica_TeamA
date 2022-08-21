import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BroadbandpostpaidComponent } from './broadbandpostpaid/broadbandpostpaid.component';
import { BroadbandprepaidComponent } from './broadbandprepaid/broadbandprepaid.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent, } from './home/home.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { LoginComponent } from './login/login.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { PaymentComponent } from './payment/payment.component';
import { PostpaidComponent } from './postpaid/postpaid.component';
import { PrepaidComponent } from './prepaid/prepaid.component';




const routes: Routes = [
  {path: 'about', component: AboutComponent},
{ path: 'home', component: HomeComponent},
{ path: 'postpaid', component: PostpaidComponent},
{ path: 'prepaid', component: PrepaidComponent},
{ path: 'invoice', component: InvoiceComponent},
{ path: 'invoices', component: InvoicesComponent},
{ path: 'broadbandprepaid', component: BroadbandprepaidComponent},
{ path: 'broadbandpostpaid', component: BroadbandpostpaidComponent},
{ path: 'payment', component: PaymentComponent},
{ path: 'contact', component: ContactComponent },
{ path: 'myprofile', component: MyprofileComponent },
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'login', component: LoginComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
