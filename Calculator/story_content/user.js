function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6LrnUJDvAnE":
        Script1();
        break;
      case "69gk7uue5HY":
        Script2();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

// Get values from Storyline variables
var FV = player.GetVar("GoalAmount");
var rate = player.GetVar("Rate");
var years = player.GetVar("Years");

// Validation – check if all fields have a value
if (!FV || !rate || !years) {
    alert("Please enter all values before calculating!");
} else {
    // Convert annual rate to monthly rate
    var r = rate / 1200;
    // Convert years to months
    var n = years * 12;

    // Calculate Monthly Investment (P)
    var P = FV * r / (Math.pow(1 + r, n) - 1);

    // Round result to nearest rupee
    P = Math.round(P);

    // Send result back to Storyline variable
    player.SetVar("MonthlyInvestment", P);
}

}

function Script2()
{
  var player = GetPlayer();

// Reset all variables to 0
player.SetVar("GoalAmount", 0);
player.SetVar("Rate", 0);
player.SetVar("Years", 0);
player.SetVar("MonthlyInvestment", 0);

}

