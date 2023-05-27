
let textOne = "Need of land 2,43,000 square fit for gaushala, Need a fund raiser of amount 54 Lakh "
let textTwo = "This Cows First Aid Kit Contains Melonex Plus 100ml Injection Rs.175, Amoxirum Forte Injection 300mg Pack of 3 Rs.192,Vitamin 100 ML Tribivet Injection Rs.235,Lorexane Cream 100Gm Rs.93 Total Kit Price - 695/- "
let textThree = "Feed The Needy With Food Seva, Fruit Seva, Water Seva, Parikrama Marg Seva, Radha Kund Seva, Radha Rani Seva"
let textFour = "This is a Feed Pack For Cows contains khal 5Kg - 152/-, Green Fodder (Bundle of 30Kg)- 116/-, Dry Fodder (Bundle of 15 Kg)- 108/, Jaggery 2Kg -74/--, Total Kit Price - 450/-  "
// one number card start
const modifiedTextOne = textOne.slice(0, 54)
document.getElementById("textOne").innerText = modifiedTextOne
let isReadMoreOne = true;
document.getElementById("card-seeMore-one").innerText = "Read more";
document.getElementById("card-seeMore-one").addEventListener('click', function () {

    if (isReadMoreOne) {
        document.getElementById("card-seeMore-one").innerText = "Read less";
        isReadMoreOne = false;
        document.getElementById("textOne").innerText = textOne
    }
    else {

        document.getElementById("card-seeMore-one").innerText = "Read more";
        isReadMoreOne = true;
        document.getElementById("textOne").innerText = modifiedTextOne;
    }
})
// one number card end

// 2nd number card start
const modifiedTextTwo = textTwo.slice(0, 54)
document.getElementById("textTwo").innerText = modifiedTextTwo
let isReadMoreTwo = true;
document.getElementById("card-seeMore-two").innerText = "Read more";
document.getElementById("card-seeMore-two").addEventListener('click', function () {

    if (isReadMoreTwo) {
        document.getElementById("card-seeMore-two").innerText = "Read less";
        isReadMoreTwo = false;
        document.getElementById("textTwo").innerText = textTwo;
    }
    else {

        document.getElementById("card-seeMore-two").innerText = "Read more";
        isReadMoreTwo = true;
        document.getElementById("textTwo").innerText = modifiedTextTwo;
    }
})
// 2nd number card end

// 3rd number card start
const modifiedTextThree = textThree.slice(0, 54)
document.getElementById("textThree").innerText = modifiedTextThree
let isReadMoreThree = true;
document.getElementById("card-seeMore-three").innerText = "Read more";
document.getElementById("card-seeMore-three").addEventListener('click', function () {

    if (isReadMoreThree) {
        document.getElementById("card-seeMore-three").innerText = "Read less";
        isReadMoreThree = false;
        document.getElementById("textThree").innerText = textThree;
    }
    else {

        document.getElementById("card-seeMore-three").innerText = "Read more";
        isReadMoreThree = true;
        document.getElementById("textThree").innerText = modifiedTextThree;
    }
})
// 3rd number card end
// 4th number card start
const modifiedTextFour = textFour.slice(0, 54)
document.getElementById("textFour").innerText = modifiedTextFour
let isReadMoreFour = true;
document.getElementById("card-seeMore-four").innerText = "Read more";
document.getElementById("card-seeMore-four").addEventListener('click', function () {

    if (isReadMoreFour) {
        document.getElementById("card-seeMore-four").innerText = "Read less";
        isReadMoreFour = false;
        document.getElementById("textFour").innerText = textFour;
    }
    else {

        document.getElementById("card-seeMore-four").innerText = "Read more";
        isReadMoreFour = true;
        document.getElementById("textFour").innerText = modifiedTextFour;
    }
})
// 4th number card end




