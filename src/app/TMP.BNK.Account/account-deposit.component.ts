import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Account } from '../TMP.BNK.Core/view-models';
import { AccountService } from '../TMP.BNK.Account-Store/account.service';

@Component({
    selector: 'bnk-account-deposit',
    templateUrl: './account-deposit.component.html'
})
export class AccountDepositComponent implements OnInit {
    @Input() account: Account;
    @Output() OnDeposited = new EventEmitter();
    private amount: number;
    constructor(private accountService: AccountService) {
    }

    ngOnInit() { }

    deposit() {
        this.accountService.deposit(this.account.Number, this.amount)
            .subscribe(response => {
                this.OnDeposited.emit();
            });
    }
}
