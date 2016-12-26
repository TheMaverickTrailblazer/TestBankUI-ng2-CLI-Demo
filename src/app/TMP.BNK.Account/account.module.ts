import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { AccountListComponent } from './account-list.component';
import { AccountCreateComponent } from './account-create.component';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [AccountListComponent, AccountCreateComponent],
    exports: [AccountListComponent, AccountCreateComponent]
})
export class AccountModule { }