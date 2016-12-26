import { Component, OnInit } from '@angular/core';

import { Account } from '../TMP.BNK.Core/view-models'
import { AccountService } from '../TMP.BNK.Account-Store/account.service';

@Component({
  selector: 'bnk-bank-online',
  templateUrl: './bank-online.component.html'
})
export class BankOnlineComponent implements OnInit {
  private clientId: number = 12345;
  private accounts: Account[];
  private action: string;
  private message: string;
  constructor(private accountService: AccountService) {
    this.message = "";
  }

  ngOnInit() {
    this.getAccounts()
  }
  getAccounts() {
    this.accountService.getAccounts(this.clientId)
      .subscribe(accounts => {
        this.accounts = accounts;
      });
  }
  createAccount() {
    this.action = "C";
  }
  refreshAccountList() {
    this.getAccounts();
    this.message = "Account has been created";
    console.log("Account created");
  }
}
