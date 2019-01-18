describe("Card", function() {
  var card;

  beforeEach(function() {
    balance = 10;
    
    // exitstation = "Aldgate East";
    card = new Card(balance);
  });

describe("#balance", function(){
  it("should have a balance", function(){
    expect(card.balance).toEqual(10);

  });
});

describe("#addMoney", function(){
  it("should be able to add money", function(){
    card.addMoney(15);
    expect(card.balance).toEqual(25);
  });
 
  it("should throw an error when > 90 added", function(){
   
    expect(function(){
    card.addMoney(91);
    }).toThrowError("This is over the allowed top up limit. Try again");
  });
})

  describe("#deductFare", function(){
    it("should be deduct fare", function(){
      card.deductFare();
      expect(card.balance).toEqual(9);
    });
  });

   describe("#touchIn",function(){
    it("should be store the entry station", function(){
      station = "Mile End";
      card.touchIn(station);
      expect(card.entrystation).toEqual("Mile End")
    });
  });

  describe("#touchOut",function(){
    it("should be store the exit station", function(){
      station = "Aldgate East";
      card.touchOut(station);
      expect(card.exitstation).toEqual("Aldgate East")
    });
  });
});