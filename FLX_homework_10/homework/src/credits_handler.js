const tax = 0.005;
const cardsLimit = 3;
const forCard2 = 2;
let creditsForPut = 500;
let limitForSet = 800;
let creditsForTransfer = 300;
let creditsForTake = 50;


const userCard = function(index){
  let card = {
    balance : 100 ,
    transactionLimit: 100,
    historyLogs: [],
    key: index
  };

  const addHistoryLogs = function(operationType, credits){
    let log = {
      operationType,
      credits,
      operationTime: new Date().toLocaleString('en-GB')
    };
    card.historyLogs.push(log);
  }

  const getCardOptions = function() {
    return card;
  };

  const takeCredits = function(amount) {
    if (amount <= card.balance && amount <= card.transactionLimit) {
    card.balance -= amount;
    addHistoryLogs('Withdrawal of credits', amount);
    } else {
        console.error('Not enough money on balance or transaction limit is too small!');
    }
  };

  const putCredits = function(amount){
    card.balance += amount;
    addHistoryLogs('Received credits', amount);
  };

  const setTransactionLimit = function(amount) {
    card.transactionLimit = amount;
    addHistoryLogs('Transaction limit change', amount);
  };

  const transferCredits = function(amount, recipientCard){
    let amountWithTaxes = amount + amount*tax;
    if (amountWithTaxes > cardInfo.balance && amountWithTaxes > cardInfo.transactionLimit) {
      console.error('Not enough money on Your balance or transaction limit is too small!');
  } else {
      this.takeCredits(amountWithTaxes);
      recipientCard.putCredits(amount);
  };

  return {
    getCardOptions,
    putCredits,
    takeCredits,
    setTransactionLimit,
    transferCredits
  };
};



class UserAccount {
  constructor(name) {
      this.name = name;
      this.cards = [];
  }
  
}

let user = new UserAccount('Bob');
user.addCard();
user.addCard();

let card1 = user.getCardByKey(1);
let card2 = user.getCardByKey(forCard2);

card1.putCredits(creditsForPut);
card1.setTransactionLimit(limitForSet);
card1.transferCredits(creditsForTransfer, card2);

card2.takeCredits(creditsForTake);

console.log(card1.getCardOptions());