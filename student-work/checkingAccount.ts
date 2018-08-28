import {Account} from "../common/interfaces/Account";
import {Transaction} from "../common/interfaces/Transaction";
import {TransactionOrigin} from "../common/enums/TransactionOrigin";
import {AccountType} from "../common/enums/AccountType";
import {BankAccount} from "./account";

export class CheckingsAccount extends BankAccount {
  constructor(currentDate){
    super(currentDate);
    this.balance = 1000;
  }

  advanceDate(numberOfDays: number) {
    for(let i = 1; i <= numberOfDays; i++ ){
      this.currentDate.setDate(this.currentDate.getDate() + 1);
      if(this.currentDate.getDate() == 1){
        this.depositMoney(this.balance * .01 / 12, "Interest");
      }
    }

  }
}
