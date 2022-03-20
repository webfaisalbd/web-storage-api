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










