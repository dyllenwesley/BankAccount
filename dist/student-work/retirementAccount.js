"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const account_1 = require("./account");
class RetirementAccount extends account_1.BankAccount {
    constructor(currentDate, accountHolderBirthday) {
        super(currentDate);
        this.currentDate = currentDate;
        this.accountHolderBirthday = accountHolderBirthday;
        this.balance = 100000;
    }
    ;
    withdrawMoney(amount, description, transactionOrigin) {
        let yearH = this.currentDate.getFullYear();
        let monthH = this.currentDate.getMonth();
        let dayH = this.currentDate.getDay();
        let compareDate = new Date(yearH - 60, monthH, dayH);
        if (amount > this.balance) {
            let transaction = {
                success: false,
                amount: amount,
                resultBalance: this.balance,
                transactionDate: this.currentDate,
                description: "",
                errorMessage: "doesn't go through",
                transactionOrigin: transactionOrigin
            };
            this.accountHistory.push(transaction);
            return transaction;
        }
        else if ((amount <= this.balance) && (this.accountHolderBirthday <= compareDate)) {
            let transaction = {
                success: true,
                resultBalance: this.balance -= amount,
                amount: amount,
                transactionDate: this.currentDate,
                description: "",
                errorMessage: "",
                transactionOrigin: transactionOrigin
            };
            this.accountHistory.push(transaction);
            return transaction;
        }
        else if ((amount <= this.balance)) {
            let transaction = {
                success: true,
                amount: amount *= 1.1,
                resultBalance: this.balance -= amount,
                transactionDate: this.currentDate,
                description: "",
                errorMessage: "",
                transactionOrigin: transactionOrigin
            };
            this.accountHistory.push(transaction);
            return transaction;
        }
    }
    advanceDate(numberOfDays) {
        for (let i = 1; i <= numberOfDays; i++) {
            this.currentDate.setDate(this.currentDate.getDate() + 1);
            if (this.currentDate.getDate() == 1) {
                let interest = this.balance * .03 / 12;
                interest = Math.round(interest * 1e2) / 1e2;
                this.depositMoney(interest, "Interest");
            }
        }
    }
}
exports.RetirementAccount = RetirementAccount;
//# sourceMappingURL=retirementAccount.js.map