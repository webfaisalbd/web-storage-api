# `Web Storage API` 

- Web storage API - allows us to store & read data in browser
- Web storage API - localStorage, sessionStorage

---

### `Local Storage` 

- **localStorage**  - store, read, update and remove data
- no expiry date: data never gets lost even if you close the browser

- localStorage store data as key value pair - string

---

#### `setItem` 
```javascript
// setItem(key,value)
localStorage.setItem("userName",'Faisal');
localStorage.setItem("password",'12345678');
// console.log(localStorage);

```
---

#### `getItem` 
```javascript

// getIem(key)
const myUserName=localStorage.getItem("userName");
const userPassword=localStorage.getItem("password");
```

---

#### `for update item` 
```javascript

// update setItem
// setItem(key,value)
localStorage.setItem("userName",'Sakib');
localStorage.setItem("password",'55555');

// update value get 
const updateUser=localStorage.getItem("userName");

console.log(updateUser)
```

---

#### `removeItem` 
```javascript

// removeItem("key")
localStorage.removeItem("userName");
localStorage.removeItem("password");
```

---


#### `array setItem getItem` 
```javascript

// array setItem
// variable:countries
// key: countryName
// value: countries

const countries=['Bangladesh','Australia','Thailand','Germany'];
localStorage.setItem('countryName',JSON.stringify(countries));

// array getItem
const countryList=JSON.parse(localStorage.getItem("countryName"));
console.log(countryList);
```

---





#### `clear()` 
```javascript

// clear localStorage 
localStorage.clear();
```

---



#### `object setItem getItem` 
```javascript


// object setItem
const users={name:'Faisal',id:'1'};
localStorage.setItem('users',JSON.stringify(users));

// object getItem
const userId= JSON.parse(localStorage.getItem('users'));
console.log(userId);



```

---


#### `session storage`

- localStorage vs sessionStorage
- localStorage is 10mb storage but session is 5mb storage.
- localStorage is Permanent but session is temporary(until the session or browser tab has closed)

```javascript


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



```

---

#### `cookies` 
```javascript

document.cookie="name=faisal;expires=Mon,20 Mar 2022 11:49:00 GMT";
console.log(document.cookie);
```

---








