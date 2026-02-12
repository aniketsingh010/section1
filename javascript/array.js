const myarr=[1,"hello","true","null"];
console.log(myarr);
const movies=["dhruandhar" ,"dune","toxic","pushpa","batman"];
console.log(movies.length);



// indexing

console.log(movies[3]);
console.log(movies.indexOf("pushpa"));
console.log(movies.at(-1));
console.log(movies.at(1));
movies[3]="odyssey";
console.log(movies);
myarr[2]="false";

console.log(myarr);

// slicing

console.log(movies.slice(1,3));
console.log(movies.slice(-3,-1));
console.log(movies.slice(-3));


// more index create to the linited values
console.log(movies.slice(0,10));


// adding and removing elements
movies.push("RRR");
movies.unshift("KGF");
console.log(movies);

movies.pop('PK');
movies.shift('A TO Z');
console.log(movies);


// SPLICE function

//  movies.splice(3,2 ,"superman"); //removing element and adding element
 movies.splice(3,0,"superfire");// 3 inserting elements
 console.log(movies);
 















