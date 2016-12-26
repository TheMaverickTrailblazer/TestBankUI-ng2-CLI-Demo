import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Account, OperationResponse } from '../TMP.BNK.Core/view-models';
import { AccountService } from '../TMP.BNK.Account-Store/account.service';

@Component({
    selector: 'bnk-account-withdraw',
    templateUrl: './account-withdraw.component.html'
})
export class AccountWithdrawComponent implements OnInit {
    @Input() account: Account;
    @Output() OnWithdrawn = new EventEmitter();
    private amount: number;
    private message: string;
    constructor(private accountService: AccountService) {
    }

    ngOnInit() { }

    withdraw() {
        this.accountService.withdraw(this.account.Number, this.amount)
            .subscribe((response: OperationResponse) => {
                this.postWithdrawProcess(response);
            });
    }
    postWithdrawProcess(response: OperationResponse) {
        if (response.IsSuccess) {
            this.OnWithdrawn.emit();
        }
        else {
            this.message = response.Message;
        }
    }
}
