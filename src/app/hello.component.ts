import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { BehaviorSubject } from "rxjs";
import { Account } from "./account";
import { Currency } from "./currency";
import { FormService } from "./formService";

@Component({
  selector: "hello",
  templateUrl: "./hello.component.html",
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({
    currency: new FormControl(""),
    account: new FormControl("")
  });

  currencies$: BehaviorSubject<Currency[]>;
  accounts$: BehaviorSubject<Account[]>;
  currencies: Currency[] = [];
  accounts: Account[] = [];

  public constructor(public formService: FormService) {
    this.currencies$ = formService.currencies$;
    this.accounts$ = formService.accounts$;
  }

  ngOnInit() {
    this.currencies$.subscribe(it => (this.currencies = it));
    this.accounts$.subscribe(it => {
      this.accounts = it;
      this.formGroup.get("account").setValue("");
    });
    this.formService.listCurrency();
    this.formService.listAccount("");
    this.formGroup
      .get("currency")
      .valueChanges.subscribe(it => this.formService.listAccount(it));
  }
}
