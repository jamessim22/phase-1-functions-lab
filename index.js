// Code your solution in this file!
//calls function to return distance from the HQ a customer is in Blocks  
function distanceFromHqInBlocks(someValue) {
    
    //Calculates blocks if a customer is on a block with a value less than 42
    if (someValue < 42) {
        return (42-someValue);
    }
    //Calculates blocks if a customer is on a block with a value greater than 42
    else {
        return(someValue-42);
    }
}

//Calls on distanceFromHqInBlocks to calculate how far it is in feet with a block estimated to equal 264ft
function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;

}

function distanceTravelledInFeet(a,b) {
    if (b>a) {
        return((b-a)*264);
    }

    else {
        return((a-b)*264);
    }
}

function calculatesFarePrice(start,destination) {
    let distance = distanceTravelledInFeet(start,destination);
    if (distance <= 400) {
        return 0;
    }

    else if (distance > 400 && distance <=2000) {
        return (distance - 400) * .02;
    }

    else if (distance > 2000 && distance <= 2500) {
        return 25;
    }

    else if (distance > 2500) {
        return `cannot travel that far`;
    }
}

