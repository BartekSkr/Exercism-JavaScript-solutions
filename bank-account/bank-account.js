export class BankAccount {
  constructor() {
    this.accountBalance = 0;
    this.active = false;
  }

  open() {
    if (this.active) {
      throw new ValueError();
    } else {
      this.active = true;
    }
  }

  close() {
    if (!this.active) {
      throw new ValueError();
    } else {
      this.active = false;
      this.accountBalance = 0;
    }
  }

  deposit(deposit) {
    if (!this.active || deposit < 0) {
      throw new ValueError();
    } else {
      this.accountBalance += deposit;
    }
  }

  withdraw(withdraw) {
    if (!this.active || withdraw < 0 || this.accountBalance < withdraw) {
      throw new ValueError();
    } else {
      this.accountBalance -= withdraw;
    }
  }

  get balance() {
    if (!this.active) {
      throw new ValueError();
    } else {
      return this.accountBalance;
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
