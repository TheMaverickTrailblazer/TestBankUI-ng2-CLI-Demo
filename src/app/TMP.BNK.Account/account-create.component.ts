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
  constructor(private accountService: AccountService) {
  }

  ngOnInit() {
    this.acccount = {
      Number: "SA000000001",
      Title: "Test Account",
      Type: "Saving",
      Balance: 100,
      ClientId: this.clientId
    };
  }

  createAccount() {
    this.accountService.createAccount(this.acccount)
      .subscribe(response => {
        this.OnCreated.emit();
      });
  }
}
