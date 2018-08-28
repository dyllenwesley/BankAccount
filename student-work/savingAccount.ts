import {Account} from "../common/interfaces/Account";
import {Transaction} from "../common/interfaces/Transaction";
import {TransactionOrigin} from "../common/enums/TransactionOrigin";
import {AccountType} from "../common/enums/AccountType";
import {BankAccount} from "./account";

export class SavingsAccount extends BankAccount {
  counter: number = 0;
  constructor(currentDate){
    super(currentDate);
    this.balance = 10000;
  };

  withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction {
    if(transactionOrigin === 1 ||transactionOrigin === 2){
      this.counter++;
    }
      if(this.counter <= 6){
        return super.withdrawMoney(amount, description, transactionOrigin);
      }else{
        return {
          success: false,
          amount: amount, // amount will be positive for deposits and negative for withdrawals
          resultBalance: this.balance, // resultBalance will be unchanged from the previous balance when success is false
          transactionDate: this.currentDate,
          description: "",
          errorMessage: "Transaction Failed", // errorMessage will be an empty string when success is true
          transactionOrigin: transactionOrigin
        };
      }
    }
    advanceDate(numberOfDays: number) {
      for(let i = 1; i <= numberOfDays; i++ ){
        this.currentDate.setDate(this.currentDate.getDate() + 1);
        if(this.currentDate.getDate() == 1){
          this.counter = 0;
          let interest = this.balance * .02 / 12;
          interest = Math.round(interest * 1e2) / 1e2;
          this.depositMoney(interest, "Interest");
        }
      }

    }
  }
