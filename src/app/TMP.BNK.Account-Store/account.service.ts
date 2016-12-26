import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Account } from '../TMP.BNK.Core/view-models';

export interface IAccountService {
    getAccounts(clientId: number): Observable<Account[]>
    getAccountDetails(clientId: number, accountNumber: string);
    createAccount(account: Account): Observable<Account[]>;
    deleteAccount(accountNumber: string): Observable<any>;
    deposit(accountNumber: string, amount: number): Observable<any>;
    withdraw(accountNumber: string, amount: number): Observable<any>;
}

@Injectable()
export class AccountService implements IAccountService {
    private _accounts: Account[];
    private _serviceUrl: string = "http://localhost:25813/api/accounts";
    //private _serviceUrl:string ="https://microsoft-apiapp892e1d4cf59c441bbe6e8606118894ea.azurewebsites.net/api/accounts";

    constructor(private http: Http) { }

    getAccounts(clientId: number): Observable<Account[]> {
        return this.http.get(this._serviceUrl)
            .map(response => {
                return response.json();
            });
    }
    getAccountDetails(clientId: number, accountNumber: string) {
    }
    createAccount(account: Account): Observable<any> {
        return this.http.post(this._serviceUrl, account)
            .map(response => {
                return response.json();
            });;
    }
    deleteAccount(accountNumber: string): Observable<any> {
        return this.http.delete(this._serviceUrl + "/" + accountNumber)
            .map(response => {
                return response.json();
            });;
    }
    deposit(accountNumber: string, amount: number): Observable<any> {
        return this.http.post(this._serviceUrl + "/" + accountNumber + "/deposit/" + amount, null)
            .map(response => {
                return response.json();
            });;
    }

    withdraw(accountNumber: string, amount: number): Observable<any> {
        return this.http.post(this._serviceUrl + "/" + accountNumber + "/withdraw/" + amount, null)
            .map(response => {
                return response.json();
            });;
    }
}