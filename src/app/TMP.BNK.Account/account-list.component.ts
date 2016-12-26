import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Account } from '../TMP.BNK.Core/view-models'

@Component({
  selector: 'bnk-account-list',
  templateUrl: './account-list.component.html'
})
export class AccountListComponent implements OnInit {
  @Input() accounts: Account[];
  @Output() OnDeleteRequest: EventEmitter<Account> = new EventEmitter<Account>();
  constructor() { }

  ngOnInit() {

  }
  showDeleteAccount(account: Account) {
    this.OnDeleteRequest.emit(account);
  }
}
