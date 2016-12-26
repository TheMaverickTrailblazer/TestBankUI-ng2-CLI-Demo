import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Account } from '../TMP.BNK.Core/view-models';
import { AccountService } from '../TMP.BNK.Account-Store/account.service';

@Component({
  selector: 'bnk-account-create',
  templateUrl: './account-create.component.html'
})
export class AccountCreateComponent implements OnInit {
  @Input() clientId: number;
  @Output() OnCreated = new EventEmitter();
  private acccount: Account;
  private accountTypes: any[]
  constructor(private accountService: AccountService) {
  }

  ngOnInit() {
    this.acccount = { Number: "10000000000", Title: "", Type: "Saving", Balance: null, ClientId: this.clientId };
    this.accountTypes = [
      { "key": "Checking", value: "Checking" },
      { "key": "Saving", value: "Saving" },
      { "key": "Credit", value: "Credit Card" }
      ]
  }

  createAccount() {
    this.accountService.createAccount(this.acccount)
      .subscribe(response => {
        this.OnCreated.emit();
      });
  }
}
