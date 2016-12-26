import { NgModule } from '@angular/core';

import { AccountStore } from './account.store';
import { AccountService } from './account.service';

@NgModule({
    providers: [AccountStore, AccountService]
})
export class AccountStoreModule { }