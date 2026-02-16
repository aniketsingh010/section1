const smartphones=[
{
    brand:"nothing",
    model:"phone 2",
    price:5000,
    colors:["black","white","blue"]
},
{
    brand: "oneplus",
    model : "13r",
    price: 40000,
    colors : ["red","black","blue"]
}
,{
    brand: "vivo",
    model : "t2 pro",
    price: 24000,
    colors : ["silver","blue"]
},
{
    brand: "samsung",
    model : "j7",
    price: 15000,
    colors : ["black","gold"]
}]
const brands=smartphones.map((phone)=>{
    return phone.brand;
})

// create array of all prices in number

console.log(brands);
const brand=smartphones.map((phone)=>{
    return phone.price;
})
console.log(brand);


// create array of all model  
console.log(brands);
const models=smartphones.map((phone)=>{
    return phone.model;
})
console.log(models);

// /
const budgetphone=smartphones.filter((phone)=>{
    return phone.price<3000;
})
console.log(budgetphone);

const backphone=smartphones.filter((phone)=>{
    return phone.colors.includes('black')
})
console.log(backphone);










