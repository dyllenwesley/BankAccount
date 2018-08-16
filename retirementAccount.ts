import {Account} from "../common/interfaces/Account";
import {Transaction} from "../common/interfaces/Transaction";
import {TransactionOrigin} from "../common/enums/TransactionOrigin";
import {AccountType} from "../common/enums/AccountType";
import {BankAccount} from "./account";

export class RetirementAccount extends BankAccount{
  constructor(currentDate: Date, accountHolderBirthday: Date){
    super(currentDate);
    this.currentDate = currentDate;
    this.accountHolderBirthday = accountHolderBirthday;
    this.balance = 100000;
  };

  withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction {
    let yearH = this.currentDate.getFullYear();
    let monthH = this.currentDate.getMonth();
    let dayH = this.currentDate.getDay();
    let compareDate = new Date(yearH - 60, monthH, dayH);
    if(amount > this.balance){
      let transaction = {
        success: false,
        amount: amount, // amount will be positive for deposits and negative for withdrawals
        resultBalance: this.balance, // resultBalance will be unchanged from the previous balance when success is false
        transactionDate: this.currentDate,
        description: "",
        errorMessage: "doesn't go through", // errorMessage will be an empty string when success is true
        transactionOrigin: transactionOrigin
      };
      this.accountHistory.push(transaction);
      return transaction;
    }

    else if((amount <= this.balance) && (this.accountHolderBirthday <= compareDate)){
      let transaction = {
        success: true,
        resultBalance: this.balance -= amount,
        amount: amount,
        transactionDate: this.currentDate,
        description: "",
        errorMessage: "", // errorMessage will be an empty string when success is true
        transactionOrigin: transactionOrigin
      };
      this.accountHistory.push(transaction);
      return transaction;
    }else if((amount <= this.balance)){
          let transaction = {
            success: true,
            amount: amount *= 1.1,
            resultBalance: this.balance -= amount,
            transactionDate: this.currentDate,
            description: "",
            errorMessage: "", // errorMessage will be an empty string when success is true
            transactionOrigin: transactionOrigin
          };
          this.accountHistory.push(transaction);
          return transaction;
        }
      }

      advanceDate(numberOfDays: number) {
        for(let i = 1; i <= numberOfDays; i++ ){
          this.currentDate.setDate(this.currentDate.getDate() + 1);
          if(this.currentDate.getDate() == 1){
            let interest = this.balance * .03 / 12;
            interest = Math.round(interest * 1e2) / 1e2;
            this.depositMoney(interest, "Interest");
          }
        }
      }
  }
