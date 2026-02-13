const nums =[2,3,4,6,5,23];
for(let n of nums){
    console.log(n*2);        //foreachloop
}
nums.forEach((a,i) => {console.log(a,i);

});
// map function
const newarr= nums.map((n) => {
    return n*3;
});
console.log(newarr);





const num=[1,2,3,4,5]

const newa= num.map((n) => {
    return n*n;
})
console.log(newa);

// filter function
const nevenNums=[2,4,5,6,7,8,9]
const neve=num.filter((n)=>{
    return n%2===0;
    
})
console.log(neve);


const prices=[345.95,34,32,874.5,23,45,56.78];
const ns=prices.map((n)=>{
    return n*1.18; 
})
console.log(ns);
// filter  all price between 40 and 200

const na=prices.filter((n)=>{
    return n <=40 && n<=200; 
})
console.log(na);



