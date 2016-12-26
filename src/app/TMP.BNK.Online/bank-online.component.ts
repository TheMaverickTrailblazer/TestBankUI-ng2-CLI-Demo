import { Component, OnInit } from '@angular/core';

import { Account } from '../TMP.BNK.Core/view-models'
import { AccountService } from '../TMP.BNK.Account-Store/account.service';
import { Operation } from '../TMP.BNK.Core/constants'

@Component({
  selector: 'bnk-bank-online',
  templateUrl: './bank-online.component.html'
})
export class BankOnlineComponent implements OnInit {
  private clientId: number = 12345;
  private accounts: Account[];
  private action: Operation;
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
    this.action = Operation.CREATE;
  }
  refreshAccountList() {
    this.getAccounts();
    this.message = "Account has been created";
    console.log("Account created");
  }
}
