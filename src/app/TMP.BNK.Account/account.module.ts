import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountListComponent } from './account-list.component';

@NgModule({
    imports: [CommonModule],
    declarations: [AccountListComponent],
    exports: [AccountListComponent]
})
export class AccountModule { }