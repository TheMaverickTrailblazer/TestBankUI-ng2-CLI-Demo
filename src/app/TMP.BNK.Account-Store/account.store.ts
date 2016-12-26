import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Account } from '../TMP.BNK.Core/view-models';
import { AccountService } from './account.service'

export interface IAccountStore {
    getAccounts(clientId: number): Observable<Account[]>
    getAccountDetails(clientId: number, accountNumber: string);
}

@Injectable()
export class AccountStore implements IAccountStore {
    private _accounts: Account[];
    constructor(private accountService: AccountService) { }
    getAccounts(clientId: number): Observable<Account[]> {

        return this.accountService.getAccounts(clientId);
        //return this._accounts;
    }
    getAccountDetails(clientId: number, accountNumber: string) {

    }

}