"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkingAccount_1 = require("../student-work/checkingAccount");
const retirementAccount_1 = require("../student-work/retirementAccount");
const savingAccount_1 = require("../student-work/savingAccount");
class AccountFactory {
    static getCheckingAccountObject(currentDate) {
        return new checkingAccount_1.CheckingsAccount(currentDate);
    }
    static getSavingsAccountObject(currentDate) {
        return new savingAccount_1.SavingsAccount(currentDate);
    }
    static getRetirementAccountObject(currentDate, accountHolderBirthDate) {
        return new retirementAccount_1.RetirementAccount(currentDate, accountHolderBirthDate);
    }
}
exports.AccountFactory = AccountFactory;
//# sourceMappingURL=AccountFactory.js.map