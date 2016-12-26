import { Component, OnInit } from '@angular/core';

import { Account } from '../TMP.BNK.Core/view-models'
import { AccountService } from '../TMP.BNK.Account-Store/account.service';

@Component({
  selector: 'bnk-account-list',
  templateUrl: './account-list.component.html',
  providers: [AccountService]
})
export class AccountListComponent implements OnInit {
  private _accounts: Account[];
  private _clientId: number = 12345;

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.getAccounts(this._clientId)
      .subscribe(accounts => {
        this._accounts = accounts;
      });
  }
}
