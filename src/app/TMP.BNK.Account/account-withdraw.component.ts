import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Account } from '../TMP.BNK.Core/view-models';
import { AccountService } from '../TMP.BNK.Account-Store/account.service';

@Component({
    selector: 'bnk-account-withdraw',
    templateUrl: './account-withdraw.component.html'
})
export class AccountWithdrawComponent implements OnInit {
    @Input() account: Account;
    @Output() OnWithdrawn = new EventEmitter();
    private amount: number;
    constructor(private accountService: AccountService) {
    }

    ngOnInit() { }

    withdraw() {
        this.accountService.withdraw(this.account.Number, this.amount)
            .subscribe(response => {
                this.OnWithdrawn.emit();
            });
    }
}
