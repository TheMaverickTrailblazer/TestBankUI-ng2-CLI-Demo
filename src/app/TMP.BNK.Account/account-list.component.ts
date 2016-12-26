import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Account } from '../TMP.BNK.Core/view-models'

@Component({
  selector: 'bnk-account-list',
  templateUrl: './account-list.component.html'
})
export class AccountListComponent implements OnInit {
  @Input() accounts: Account[];
  @Output() OnDepositRequested: EventEmitter<Account> = new EventEmitter<Account>();
  @Output() OnWithdrawRequested: EventEmitter<Account> = new EventEmitter<Account>();
  @Output() OnDeleteRequested: EventEmitter<Account> = new EventEmitter<Account>();
  constructor() { }

  ngOnInit() {

  }
  showDepositAccountModal(account: Account) {
    this.OnDepositRequested.emit(account);
  }
  showWithdrawAccountModal(account: Account) {
    this.OnWithdrawRequested.emit(account);
  }
  showDeleteAccountModal(account: Account) {
    this.OnDeleteRequested.emit(account);
  }
}
