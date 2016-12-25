import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AccountListComponent } from '../TMP.BNK.Account/account-list.component';
import { BankOnlineComponent } from './bank-online.component'
import { HeaderComponent } from './header.component';

import { ClientModule } from '../TMP.BNK.Client/client.module';

@NgModule({
  declarations: [
    AccountListComponent,
    BankOnlineComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ClientModule
  ],
  providers: [],
  bootstrap: [BankOnlineComponent]
})
export class BankOnlineModule { }
