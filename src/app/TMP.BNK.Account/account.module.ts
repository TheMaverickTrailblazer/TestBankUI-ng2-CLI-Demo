import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AccountListComponent } from './account-list.component';
import { AccountCreateComponent } from './account-create.component';
import { AccountDeleteComponent } from './account-delete.component';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [AccountListComponent, AccountCreateComponent, AccountDeleteComponent],
    exports: [AccountListComponent, AccountCreateComponent, AccountDeleteComponent]
})
export class AccountModule { }