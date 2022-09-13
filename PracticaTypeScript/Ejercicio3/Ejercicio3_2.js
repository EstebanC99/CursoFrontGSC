"use strict";
class BankAccount {
    money = 0;
    deposit(value, message) {
        this.money += value;
        if (message) {
            console.log(message);
        }
    }
}
const bankAccount = new BankAccount();
bankAccount.deposit(20);
bankAccount.deposit(10, 'Deposit received');
console.log('[Exercise 3.2]', `Account value: $${bankAccount.money}`);
