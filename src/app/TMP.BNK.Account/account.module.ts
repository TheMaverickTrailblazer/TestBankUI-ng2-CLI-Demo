import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AccountListComponent } from './account-list.component';
import { AccountCreateComponent } from './account-create.component';
import { AccountDeleteComponent } from './account-delete.component';
import { AccountDepositComponent } from './account-deposit.component';
import { AccountWithdrawComponent } from './account-withdraw.component';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [
        AccountListComponent,
        AccountCreateComponent,
        AccountDeleteComponent,
        AccountDepositComponent,
        AccountWithdrawComponent],
    exports: [
        AccountListComponent,
        AccountCreateComponent,
        AccountDeleteComponent,
        AccountDepositComponent,
        AccountWithdrawComponent]
})
export class AccountModule { }