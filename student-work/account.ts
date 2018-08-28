import {Account} from "../common/interfaces/Account";
import {Transaction} from "../common/interfaces/Transaction";
import {TransactionOrigin} from "../common/enums/TransactionOrigin";
import {AccountType} from "../common/enums/AccountType";

export class BankAccount implements Account {

  currentDate: Date;
  balance: number;
  accountHistory: Transaction[];
  accountHolderBirthday: Date;

  constructor(currentDate) {
    this.currentDate = currentDate;
    this.accountHistory = [];
  }

  withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction {

    if(amount <= this.balance){
      let transaction = {
        success: true,
        amount: -amount, // amount will be positive for deposits and negative for withdrawals
        resultBalance: this.balance -= amount, // resultBalance will be unchanged from the previous balance when success is false
        transactionDate: this.currentDate,
        description: "",
        errorMessage: "", // errorMessage will be an empty string when success is true
      };
      this.accountHistory.push(transaction);
      return transaction;

    }else if(amount > this.balance){
      let transaction = {
        success: false,
        amount: -amount,
        resultBalance: this.balance,
        transactionDate: this.currentDate,
        description: description,
        errorMessage: "doesn't go through", // errorMessage will be an empty string when success is true
        transactionOrigin: transactionOrigin
      };
      this.accountHistory.push(transaction);
      return transaction;
    }
  }

  depositMoney(amount: number, description: string): Transaction {
      let transaction = {
        success: true,
        amount: amount, // amount will be positive for deposits and negative for withdrawals
        resultBalance: this.balance += amount, // resultBalance will be unchanged from the previous balance when success is false
        transactionDate: this.currentDate,
        description: "",
        errorMessage: "", // errorMessage will be an empty string when success is true
      };
      this.accountHistory.push(transaction);
      return transaction;
  }

  advanceDate(numberOfDays: number) {
    let dateHolder = new Date();
    for(let i = 1; i <= numberOfDays; i++ ){
      dateHolder.setDate(dateHolder.getDate() + i);
    }
    // if(dateHolder.getDay() === 1){
    //
    // }
  }
}
