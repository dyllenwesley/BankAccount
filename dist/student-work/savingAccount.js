"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const account_1 = require("./account");
class SavingsAccount extends account_1.BankAccount {
    constructor(currentDate) {
        super(currentDate);
        this.counter = 0;
        this.balance = 10000;
    }
    ;
    withdrawMoney(amount, description, transactionOrigin) {
        if (transactionOrigin === 1 || transactionOrigin === 2) {
            this.counter++;
        }
        if (this.counter <= 6) {
            return super.withdrawMoney(amount, description, transactionOrigin);
        }
        else {
            return {
                success: false,
                amount: amount,
                resultBalance: this.balance,
                transactionDate: this.currentDate,
                description: "",
                errorMessage: "Transaction Failed",
                transactionOrigin: transactionOrigin
            };
        }
    }
    advanceDate(numberOfDays) {
        for (let i = 1; i <= numberOfDays; i++) {
            this.currentDate.setDate(this.currentDate.getDate() + 1);
            if (this.currentDate.getDate() == 1) {
                this.counter = 0;
                let interest = this.balance * .02 / 12;
                interest = Math.round(interest * 1e2) / 1e2;
                this.depositMoney(interest, "Interest");
            }
        }
    }
}
exports.SavingsAccount = SavingsAccount;
//# sourceMappingURL=savingAccount.js.map