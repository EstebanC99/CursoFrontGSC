interface IBankAccount {
    money: number;
    deposit(value: number, message?: string): void;
}

class BankAccount implements IBankAccount {
    money: number = 0;
    deposit(value: number, message?: string): void{
        this.money += value;
        if (message){
            console.log(message);
        }
    }
}

const bankAccount = new BankAccount();

bankAccount.deposit(20);
bankAccount.deposit(10, 'Deposit received')

console.log('[Exercise 3.2]', `Account value: $${bankAccount.money}`);