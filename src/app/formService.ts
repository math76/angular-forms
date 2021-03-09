import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Account } from "./account";
import { Currency } from "./currency";

@Injectable({
  providedIn: "root"
})
export class FormService {
  currencies$: BehaviorSubject<Currency[]> = new BehaviorSubject([]);
  accounts$: BehaviorSubject<Account[]> = new BehaviorSubject([]);

  listCurrency() {
    this.currencies$.next([
      new Currency("PLN"),
      new Currency("EUR"),
      new Currency("GBP"),
      new Currency("CHF")
    ]);
  }

  listAccount(currencyCode: string) {
    this.accounts$.next(
      [
        new Account("PL111000111", "PLN"),
        new Account("PL111000112", "PLN"),
        new Account("EU111000111", "EUR"),
        new Account("EU111000112", "EUR"),
        new Account("EU111000113", "EUR"),
        new Account("GB111000111", "GBP"),
        new Account("GB111000112", "GBP")
      ].filter(it => it.currencyCode == currencyCode)
    );
  }
}
