import { Component, OnInit, Input } from '@angular/core';

import { Account } from '../TMP.BNK.Core/view-models'

@Component({
  selector: 'bnk-account-list',
  templateUrl: './account-list.component.html'
})
export class AccountListComponent implements OnInit {
  @Input() accounts: Account[];
  constructor() { }

  ngOnInit() {
   
  }
}
