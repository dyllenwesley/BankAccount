"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const account_1 = require("./account");
class CheckingsAccount extends account_1.BankAccount {
    constructor(currentDate) {
        super(currentDate);
        this.balance = 1000;
    }
    advanceDate(numberOfDays) {
        for (let i = 1; i <= numberOfDays; i++) {
            this.currentDate.setDate(this.currentDate.getDate() + 1);
            if (this.currentDate.getDate() == 1) {
                this.depositMoney(this.balance * .01 / 12, "Interest");
            }
        }
    }
}
exports.CheckingsAccount = CheckingsAccount;
//# sourceMappingURL=checkingAccount.js.map