// localStorage vs sessionStorage
// 10mb vs 5mb
// permanent vs session (tab)

// setItem(key,value)
sessionStorage.setItem("userName",'Faisal');
sessionStorage.setItem("password",'12345678');
// console.log(sessionStorage);


// getIem(key)
const myUserName=sessionStorage.getItem("userName");
const userPassword=sessionStorage.getItem("password");
// console.log(myUserName,userPassword)



// update setItem
// setItem(key,value)
sessionStorage.setItem("userName",'Sakib');
sessionStorage.setItem("password",'55555');

// update value get 
const updateUser=sessionStorage.getItem("userName");

// console.log(updateUser)


// removeItem("key")
sessionStorage.removeItem("userName");
sessionStorage.removeItem("password");


// array setItem
// variable:countries
// key: countryName
// value: countries

const countries=['Bangladesh','Australia','Thailand','Germany'];
sessionStorage.setItem('countryName',JSON.stringify(countries));

// array getItem
const countryList=JSON.parse(sessionStorage.getItem("countryName"));
console.log(countryList);




// clear sessionStorage 
sessionStorage.clear();




// object setItem
const users={name:'Faisal',id:'1'};
sessionStorage.setItem('users',JSON.stringify(users));

// object getItem
const userId= JSON.parse(sessionStorage.getItem('users'));
console.log(userId);







