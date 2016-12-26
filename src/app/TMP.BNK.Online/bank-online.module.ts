import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { ClientModule } from '../TMP.BNK.Client/client.module';
import { AccountModule } from '../TMP.BNK.Account/account.module';
import {AccountStoreModule} from '../TMP.BNK.Account-Store/account-store.module';

import { BankOnlineComponent } from './bank-online.component'
import { HeaderComponent } from './header.component';

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
    AccountModule,
    AccountStoreModule
  ],
  providers: [],
  bootstrap: [BankOnlineComponent]
})
export class BankOnlineModule { }
