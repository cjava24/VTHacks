
//term_length : time length of investments
//employmentStatus:
//1. form to class
//2.
/*
class User {
  var employmentStatus = {RETIRED: 0, UNEMPLOYED: 1, EMPLOYED:2 };//ENUM
  //var familyStatus = {DEPENDENT: 0, SINGLE: 1, MARRIED: 2, HAS_DEPENDENTS: 3, MARRIED_WITH_DEPENDENTS: 4};//ENUM
  var familyStatus = {MARRIED_WITH_DEPENDENTS: 0, HAS_DEPENDENTS: 1, MARRIED: 2, SINGLE: 3, DEPENDENT: 4}
  var disposableIncome = 0.00;// in dollars (double)
  var investIntensity = {LOW: 0, MEDIUM: 1, HIGH: 2};//ENUM
  var termLength = 0.00;//in months (double)

  constructor(employmentStatus, disposableIncome, investIntensity, termLength) {
    this.employmentStatus= employmentStatus;
    this.disposableIncome = disposableIncome;
    this.investIntensity = investIntensity;
    this.termLength = termLength;
  }
*/
//a href= "vthacks.txt">Stock List </a>
  function myFunction() {
    var x = document.getElementById("infoSubmission");

    var es= x.elements[0].value;  // employmentStatus
    var fs= x.elements[1].value;  // familyStatus
    var ii= x.elements[2].value;  // investment intensity - higher intensity makes higher volatility
    var di= x.elements[3].value;  // disposable income - higher disposable income makes higher volatility
    var tl= x.elements[4].value;  // term length - higher length makes lower volatility
/*
    alert(es);
    alert(fs);
    alert(ii);
    alert(di);
    alert(tl);
*/
    //alert("working here");
    if(di <= 0  || tl <= 0)
    {
      alert("Invalid disposable income value. Please try again");
    }
    //Final output variabe riskNumber:
    var riskNumber = 0;

    // the risk based on family and employment status (higher means more risk can be taken)
    var statusRisk = es + fs;

    //Adding family/employment status risks
    riskNumber +=(statusRisk + 1) ;
    //Adding investment intensity
    riskNumber += ((ii + 1)*2);
    //Scaled term length
    riskNumber *= (6/tl);
    //Overall Scaler will be disposable income:
    //riskNumber *= (Math.log2(di*di/1000000) + 1.8);
    //riskNumber *= Math.pow(di, (1/3));
    //largest possible is 53.313
    alert(riskNumber);


    const fileRead = require('fs');
    fileRead.readFile('vthacks.txt', 'utf-8', (err, data) => {
      if(err) throw err;
      console.log(data)
    })
  }
////}
