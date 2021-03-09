export class Account {
  code: string;
  currencyCode: string;
  public constructor(code: string, currencyCode: string) {
    this.code = code;
    this.currencyCode = currencyCode;
  }
}
