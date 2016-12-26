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
    this.acccount = { Number: "", Title: "", Type: "", Balance: null, ClientId: this.clientId };
  }

  createAccount() {
    this.accountService.createAccount(this.acccount)
      .subscribe(response => {
        this.OnCreated.emit();
      });
  }
  postCreationProcess(){
    
  }
}
