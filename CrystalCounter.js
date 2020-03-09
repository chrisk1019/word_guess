<head>
    <title>CrystalCollector</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

</head>
<body>
  
  <div class="jumbotron">

    <h1 class="text-center">Choose crystals to reach the Random Number.</h1>

    <div class="text-center">

<script type="text/javascript"

$(document).ready(function() {
var yellowCrystalWorth = Math.floor(Math.random() * 13);
var greenCrystalWorth = Math.floor(Math.random() * 13);
var redCrystalWorth = Math.floor(Math.random() * 13);
var blueCrystalWorth = Math.floor(Math.random() * 13);
var totalScore = 0
var randomGoalNumber = Math.floor(Math.random() * (120-19) + 19);

$(document).ready(function()
$(#yellowCrystal).on("click", function() {
    totalScore=totalScore + yellowCrystalWorth;
    compare();

}

$(document).ready(function()
$(#greenCrystal).on("click", function() {
    totalScore=totalScore + greenCrystalWorth;
    compare();

}

$(document).ready(function()
$(#redCrystal).on("click", function() {
    totalScore=totalScore + redCrystalWorth;
    compare();

}

$(document).ready(function()
$(#blueCrystal).on("click", function() {
    totalScore=totalScore + blueCrystalWorth;
    compare();
    
}

if(totalScore > randomGoalNumber) {
    alert("You Lose!")
}

if(totalScore===randomGoalNumber)
    alert("You Win!")

</script>
</body>
