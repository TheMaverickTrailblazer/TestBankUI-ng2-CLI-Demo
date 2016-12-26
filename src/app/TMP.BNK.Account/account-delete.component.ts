import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Account } from '../TMP.BNK.Core/view-models';
import { AccountService } from '../TMP.BNK.Account-Store/account.service';

@Component({
    selector: 'bnk-account-delete',
    templateUrl: './account-delete.component.html'
})
export class AccountDeleteComponent implements OnInit {
    @Input() account: Account;
    @Output() OnDeleted = new EventEmitter();
    constructor(private accountService: AccountService) {
    }

    ngOnInit() { }

    deleteAccount() {
        this.accountService.deleteAccount(this.account.Number)
            .subscribe(response => {
                this.OnDeleted.emit();
            });
    }
}
