import {Account} from "../common/interfaces/Account";
import {CheckingsAccount} from "../student-work/checkingAccount";
import {RetirementAccount} from "../student-work/retirementAccount";
import {SavingsAccount} from "../student-work/savingAccount";

export class AccountFactory {

    static getCheckingAccountObject(currentDate: Date): Account {
        return new CheckingsAccount(currentDate);
    }

    static getSavingsAccountObject(currentDate: Date): Account {
        return new SavingsAccount(currentDate);
    }

    static getRetirementAccountObject(currentDate: Date, accountHolderBirthDate: Date): Account {
        return new RetirementAccount(currentDate, accountHolderBirthDate);
    }

}
