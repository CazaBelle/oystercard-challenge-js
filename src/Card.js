class Card {
  constructor(balance, entrystation = Station, exitstation = Station) {
    this.balance = balance;
    this.entrystation = entrystation
    this.exitstation = exitstation
  }

  seeBalance(){
    this.balance
  }

  addMoney(money){
    if (money > 90){
      throw new Error("This is over the allowed top up limit. Try again")
    }else{
      this.balance = (this.balance + money)
      console.log(this.balance)
    }
  }

  deductFare(){
    this.balance = (this.balance - 1)
  }

  touchIn(entrystation){
    this.entrystation = entrystation
  }

  touchOut(exitstation){
    this.exitstation = exitstation

  }
}



// class User {

//   constructor(name) {
//     this.name = name;
//   }

//   sayHi() {
//     alert(this.name);
//   }

// }

// let user = new User("John");
// user.sayHi();