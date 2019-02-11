var goalnum = Math.floor(Math.random() * 101) + 19; //picks a random number between 19-120
var crystal1val = Math.floor(Math.random() * 12) + 1;
var crystal2val = Math.floor(Math.random() * 12) + 1;
var crystal3val = Math.floor(Math.random() * 12) + 1;
var crystal4val = Math.floor(Math.random() * 12) + 1;
var userscore = 0;
var wins = 0;
var losses = 0;


$("#goal-num").text(goalnum); //pushes number to goal-num div
console.log(goalnum); // log number

function reset(){
    goalnum = Math.floor(Math.random()*101+19);
    console.log(goalnum)
    $('#goal-num').text(goalnum);
    $('#user-score').text(userscore);
    crystal1val = Math.floor(Math.random() * 12) + 1;
    crystal2val = Math.floor(Math.random() * 12) + 1;
    crystal3val = Math.floor(Math.random() * 12) + 1;
    crystal4val = Math.floor(Math.random() * 12) + 1;
    userscore= 0;
    };


//when a crystal is clicked it needs to be assigned a randomvalue
$("#crystal1").on("click", function() {
    console.log(crystal1val);
    userscore += crystal1val;
    console.log(userscore);
    $("#user-score").text(userscore);

    if (userscore > goalnum) {
        losses++;
        userscore = 0;
        $("#loss-span").text(losses);
        reset();
    
    };
    
    if (userscore === goalnum) {
        wins++;
        userscore = 0;
        $("#win-span").text(wins);
        reset();
    };

});

$("#crystal2").on("click", function() {
    console.log(crystal2val);
    userscore += crystal2val;
    console.log(userscore);
    $("#user-score").text(userscore);

    if (userscore > goalnum) {
        losses++;
        userscore = 0;
        $("#loss-span").text(losses);
        reset();
    };
    
    if (userscore === goalnum) {
        wins++;
        userscore = 0;
        $("#win-span").text(wins);
        reset();
    };
});


$("#crystal3").on("click", function() {
    console.log(crystal3val);
    userscore += crystal3val;
    console.log(userscore);
    $("#user-score").text(userscore);

    if (userscore > goalnum) {
        losses++;
        userscore = 0;
        $("#loss-span").text(losses);
        reset();
    };
    
    if (userscore === goalnum) {
        wins++;
        userscore = 0;
        $("#win-span").text(wins);
        reset();
    };
});

$("#crystal4").on("click", function() {
    console.log(crystal4val);
    userscore += crystal4val;
    console.log(userscore);
    $("#user-score").text(userscore);

    if (userscore > goalnum) {
        losses++;
        userscore = 0;
        $("#loss-span").text(losses);
        reset();
    };
    
    if (userscore === goalnum) {
        wins++;
        userscore = 0;
        $("#win-span").text(wins);
        reset();
    };



});



