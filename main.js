let brand = "brand";
let model = -1;
let colour = "colour";
const currentyear = 2020;

let old_costumer = prompt("IF YOU ARE OUR COSTUMER MORE THAN 5 YEAR PLEASE say YES");
old_costumer = old_costumer.toUpperCase();
alert(old_costumer);
//program controll run with this part.
if (old_costumer == "YES") {
    alert("WE HAVE SERVICE IN ALL CASES FOR YOU SIR!!!");
} else {

    brand = prompt(`WHAT IS YOUR AUTO'S BRAND!!!`);
    brand = brand.toUpperCase();
    alert(brand);

    while (model < 1900 || model > currentyear + 1 || isNaN(model)) {// the model must be between 1900-current year and model can not string... 
        model = prompt("WHAT IS THE YEAR OF YOUR AUTO'S MODEL!!!");
    }
    alert(model);

    colour = prompt(`WHAT IS THE COLOUR OF YOUR AUTO!!!`);
    colour = colour.toUpperCase();
    alert(colour);

    if ((colour == "RED" || colour == "BLACK") && (brand == "BMW" || brand == "VW" || brand == "AUDI")) {
        alert("in the first check everything seem good but we have to check our resources!!!");
        if ((brand == "BMW" && ((colour == "RED" && model > 2009 && model < 2020) || (colour == "BLACK" && model >= 2020))) ||
            (brand == "AUDI" && (model > 2004 && model < 2011) || (model >= 2014 && model <= 2020)) ||
            (brand == "VW" && colour == "BLACK" && (model > 2000 && model < 2019))) {
            alert("we can give you a service, thank you !!!");
        } else {
            alert("sorry we could not help you !!!");
        }
    } else {
        alert("sorry we could not help you !!!");
    }
}