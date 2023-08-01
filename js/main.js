/* if,else,else if */
/*
let a = 46;
let b = 10;
let c = 55;
let d = 21;
*/
/*
if(a == 46 && b == 10 && c == 55 && d == 20){
    console.log("Qiymatlarning hammasi to'g'ri!");
}
else{
    console.log("Qiymatlardan kamida bittasi noto'g'ri!");
}
*/
/*
if(a == 46 || b == 10 || c == 55 || d == 21){
    console.log("Qiymatlardan kamida bittasi to'g'ri!");
}
else{
    console.log("Qiymatlarning hammasi noto'g'ri!");
}
*/

/* JS data types: undefined,boolean,object */
/*let soz;*/
/*let rost = false;*/
/*let rost = 45<=45?true:false;*/
/*let arrayObject = [45,78,"text",true,false,"js"];*/
/*let oddiyObject = {ism: "Sardor", familiya: "Otaxonov", yoshi: "16 yoshda"};*/
/*console.log(oddiyObject.ism,oddiyObject.familiya,oddiyObject.yoshi);*/

/* Functions in JS */
/*function savatchaniTekshir(){
    if (savatcha.length == 0){
        document.write("Savatchaning ichida " +savatcha.length+ " dona ma'lumot bor!");
    }
    else{
        document.write("Savatchaning ichida " +savatcha.length+ " ta ma'lumot bor!");
    }
}
let savatcha = [12,"text",true,false];
savatchaniTekshir();*/

/* Date in JS */

let sana = new Date();

/*sana.setFullYear(2024);
sana.setMonth();
sana.setDate();*/

let yil = sana.getFullYear();
let oy = sana.getMonth();
let kun = sana.getDate();
let haftaKuni = sana.getDay();
let oylar = ["yanvar","fevral","mart","aprel","may","iyun","iyul",
            "avgust","sentyabr","oktyabr","noyabr","dekabr"];

document.write("Bugun " + yil + " - yil " + oylar[oy] + " oyining " +
              kun + " - kuni. Haftaning " + haftaKuni + " - kuni.");



