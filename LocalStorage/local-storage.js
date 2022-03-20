//local storage store data as key value pair.
// key and value both are string

// setItem(key,value)
localStorage.setItem("userName",'Faisal');
localStorage.setItem("password",'12345678');
// console.log(localStorage);

// getIem(key)
const myUserName=localStorage.getItem("userName");
const userPassword=localStorage.getItem("password");


// update setItem
// setItem(key,value)
localStorage.setItem("userName",'Sakib');
localStorage.setItem("password",'55555');

// update value get 
const updateUser=localStorage.getItem("userName");

// console.log(updateUser)


// removeItem("key")
localStorage.removeItem("userName");
localStorage.removeItem("password");


// array setItem
// variable:countries
// key: countryName
// value: countries

const countries=['Bangladesh','Australia','Thailand','Germany'];
localStorage.setItem('countryName',JSON.stringify(countries));

// array getItem
const countryList=JSON.parse(localStorage.getItem("countryName"));
console.log(countryList);


// clear localStorage 
localStorage.clear();