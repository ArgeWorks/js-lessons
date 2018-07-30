//============================================== Testing Area ==============================================//

// function modifyString(str, func) {
//     let result = '';

//     for (let char of str) {
//         result += func(char);
//     }

//     return result;
// }

// function handlerUpperCase(char) {
//     return char.toUpperCase();
// }

// function handlerCharCode(char) {
//     return char.charCodeAt(0);
// }

//modifyString("Hello JavaScript!", handlerUpperCase);
//modifyString("Hello JavaScript!", handlerCharCode);

//-------------------------

// let rawStr = "Some string!";

// let charArray = rawStr.split('');  //Разбиваем строку на массив, каждая буква отдельный элемент
// charArray.reverse(); //Разворачиваем массив

// let newStr = charArray.join(''); //Преобразовываем массив в строку, разделителя нет.

//console.log(newStr);

//или

//charArray = rawStr.split('').reverse().join('');

//console.log(charArray);
//-------------------------


// var data = '{ "age": 30 }'; // данные неполны

// try {

//     var user = JSON.parse(data); // <-- выполнится без ошибок

//     if (!user.name) {
//         throw new Error("Данные некорректны");
//     }

//     //alert(user.name);

// } catch (error) {
//     console.log(error);
// }


// function User(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
// User.prototype.greeting = function () {
//     return `Hello there ${this.firstName} ${this.lastName}`;
// }

// function Customer(firstName, lastName, phone, membership) {
//     User.call(this, firstName, lastName);
//     this.phone = phone;
//     this.membership = membership;
// }
// Customer.prototype = Object.create(User.prototype);
// Customer.prototype.constructor = Customer;


// let person = new User('Igor', 'Argunov');
// let сustomer = new Customer('Igor', 'Argunov', '0632609750', 'Standart');
// console.log(person.greeting());
// console.log(сustomer);



// let params = [];
// if (selectCountry.value !== 'all') params.push('country=' + selectCountry.value);
// if (selectCategory.value !== 'all') params.push('category=' + selectCategory.value);

// //params.push(selectCountry.value === 'all' ? '' : 'country=' + selectCountry.value);
// //params.push(selectCategory.value === 'all' ? '' : '&category=' + selectCategory.value);
// //params.push(selectResources.value === 'all' ? '' : '&sources=' + selectResources.value);
// let formatedParams = formingParams(params);

// let url = `https://newsapi.org/v2/top-headlines?${formatedParams}&apiKey=${apiKey}`;

// function formingParams(params) {
//     let formatedParams = [];

//     for (var item of params) {
//         if (!formatedParams.length) {
//             formatedParams.push(item);
//         } else {
//             formatedParams.push('&' + item);
//         }
//     }

//     return formatedParams.join('');
// }




let http = new Http();
// http.get("https://jsonplaceholder.typicode.com/users", (err, resp) => {
//     console.log(err, resp);
// });

let data = {
    title: 'foo',
    body: 'bar',
    userId: 1
};

http.get("https://jsonplaceholder.typicode.com/posts")
    .then(data => {
        console.log(data);
    })
    .catch((err) => {
        throw new Error(err)
    });


// http.get("https://jsonplaceholder.typicode.com/users")
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     });