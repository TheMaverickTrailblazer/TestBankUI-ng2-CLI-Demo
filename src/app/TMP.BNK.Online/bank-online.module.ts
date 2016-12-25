import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BankOnlineComponent } from './bank-online.component'
import { HeaderComponent } from './header.component';

import { ClientModule } from '../TMP.BNK.Client/client.module';
import { AccountModule } from '../TMP.BNK.Account/account.module';

@NgModule({
  declarations: [
    BankOnlineComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ClientModule,
    AccountModule
  ],
  providers: [],
  bootstrap: [BankOnlineComponent]
})
export class BankOnlineModule { }
