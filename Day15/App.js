let pencilPrice=5;
let erasorPrice=19;
output=`Total pay ${pencilPrice+erasorPrice} Rupess`
console.log(`Total pay ${pencilPrice+erasorPrice} Rupes`)

// Condition statement:

if(pencilPrice>erasorPrice){
    console.log(true)
}else if(pencilPrice<erasorPrice){
    console.log(false)
}else{
    console.log("price Equall")
}

// Nested If else
    
let size = "M";
let price;
let type="normal";
if(size=="XL"){
    price=250;
    if(type=="salted"){
        price+=50;
    }else{
        price+=25;
    }
}else if(size=="L"){
     price=200;
     if(type=="salted"){
        price+=50;
    }else{
        price+=25;
    }
}
else if(size=="M"){
     price=150;
     if(type=="salted"){
        price+=50;
    }else{
        price+=25;
    }
}else{
    price=100;
    if(type=="salted"){
        price+=50;
    }else{
        price+=25;
    }
}
console.log(price);

// Logical operators:

let string_ = "Apple";

if((string_[0]=='a'||string_[0]=='A') && string_.length>3){
    console.log(true);
    console.log(string_.length);
}

// Switch Case:

let color="green";

switch(color){
    case "red":
        console.log("Stop")
        break;
    case "green":
        console.log("Goooooo!!")
        break;
    case "yellow":
        console.log("Stay safe stay alert")
        break;
}


// Alert:

alert("Somthing is wrong")