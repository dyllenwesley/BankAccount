"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BankAccount {
    constructor(currentDate) {
        this.currentDate = currentDate;
        this.accountHistory = [];
    }
    withdrawMoney(amount, description, transactionOrigin) {
        if (amount <= this.balance) {
            let transaction = {
                success: true,
                amount: -amount,
                resultBalance: this.balance -= amount,
                transactionDate: this.currentDate,
                description: "",
                errorMessage: "",
            };
            this.accountHistory.push(transaction);
            return transaction;
        }
        else if (amount > this.balance) {
            let transaction = {
                success: false,
                amount: -amount,
                resultBalance: this.balance,
                transactionDate: this.currentDate,
                description: description,
                errorMessage: "doesn't go through",
                transactionOrigin: transactionOrigin
            };
            this.accountHistory.push(transaction);
            return transaction;
        }
    }
    depositMoney(amount, description) {
        let transaction = {
            success: true,
            amount: amount,
            resultBalance: this.balance += amount,
            transactionDate: this.currentDate,
            description: "",
            errorMessage: "",
        };
        this.accountHistory.push(transaction);
        return transaction;
    }
    advanceDate(numberOfDays) {
        let dateHolder = new Date();
        for (let i = 1; i <= numberOfDays; i++) {
            dateHolder.setDate(dateHolder.getDate() + i);
        }
        // if(dateHolder.getDay() === 1){
        //
        // }
    }
}
exports.BankAccount = BankAccount;
//# sourceMappingURL=account.js.map