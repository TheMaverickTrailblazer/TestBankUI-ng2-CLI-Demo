import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { AccountService } from '../TMP.BNK.Account-Store/account.service';

@Component({
    selector: 'bnk-account-delete',
    templateUrl: './account-delete.component.html'
})
export class AccountDeleteComponent implements OnInit {
    @Input() accountNumber: string;
    @Output() OnDeleted = new EventEmitter();
    constructor(private accountService: AccountService) {
    }

    ngOnInit() { }

    deleteAccount() {
        this.accountService.deleteAccount(this.accountNumber)
            .subscribe(response => {
                this.OnDeleted.emit();
            });
    }
}
