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
  private selectedAccount: string;
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
  showCreateAccountModal() {
    this.action = Operation.CREATE;
  }
  showDeleteAccountModal(accountNumber) {
    this.action = Operation.DELETE;
    this.selectedAccount = accountNumber;
  }
  refreshAccountList() {
    this.getAccounts();
    console.log("Account created");
  }
}
