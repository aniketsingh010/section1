const user={
    name:"aniketsingh",
    email:"anikets08102005@gmail.com",
    age:20

}
console.log(user);
console.log(user.email);
console.log(user["name"]);
user.age=21;
console.log(user);



console.log(Object.keys(user));
console.log(Object.values(user));


// remove object
delete user.name;
console.log(user);


const smartphone={
    brand:"samsung",
    model:"s24",
    price:120000,
    colors:['white','blue','back']
};
console.log(smartphone.colors[2]);







