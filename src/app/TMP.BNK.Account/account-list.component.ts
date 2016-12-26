import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Account } from '../TMP.BNK.Core/view-models'

@Component({
  selector: 'bnk-account-list',
  templateUrl: './account-list.component.html'
})
export class AccountListComponent implements OnInit {
  @Input() accounts: Account[];
  @Output() OnDeleteRequest: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {

  }
  showDeleteAccount(accountNumber: string) {
    this.OnDeleteRequest.emit(accountNumber);
  }
}
