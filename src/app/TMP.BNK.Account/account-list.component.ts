import { Component, OnInit } from '@angular/core';

import { Account } from '../TMP.BNK.Core/view-models'

@Component({
  selector: 'bnk-account-list',
  templateUrl: './account-list.component.html'
})
export class AccountListComponent implements OnInit {

  private _accounts: Account[] = [
    { "number": "CA123456789", "title": "John Smith - Checking Account", "type": "Checkiing", "balance": 1500, "clientId": 12345 },
    { "number": "SA987654223", "title": "Jonh Smith - Saving Account", "type": "Saving", "balance": 1200, "clientId": 12345 }
  ];
  constructor() { }

  ngOnInit() {
  }

}
