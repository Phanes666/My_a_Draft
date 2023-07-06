// \\\\\\\\\\\\\\\\\\\||||| MODULE 1 |||||/////////////////////////

// function isAdult(age) {
//     // Change code below this line
//     const passed = age >= 18;
// //   console.log(age >= passed);
//     // Change code above this line
//     return passed;
//   }

//   console.log(isAdult(20));
//   console.log(isAdult(14));
//   console.log(isAdult(8));
//   console.log(isAdult(37));

//   ++++++++++++++++++++++++++++++++++++

// function isValidPassword(password) {
//     const SAVED_PASSWORD = 'jqueryismyjam';
//     // Change code below this line
//     const isMatch = (password === SAVED_PASSWORD) ;

//     // Change code above this line
//     return isMatch;
//   }
//   console.log(isValidPassword("mangodab3st"));
//   console.log(isValidPassword("kiwirul3z"));
//   console.log(isValidPassword("jqueryismyjam"));

// +++++++++++++++++++++++++++++++++++++++++

// function checkAge(age) {
//     let message = 18;
//     // age = 18;
//     if (age >= message) { // Change this line
//       message = 'You are an adult';
//     } else {
//       message = 'You are a minor';
//     }

//     return message;
//   }

//   console.log(checkAge(20));
//   console.log(checkAge(8));
//   console.log(checkAge(14));
//   console.log(checkAge(38));

// +++++++++++++++++++++++++++++++++++++++++++++++

// function checkStorage(available, ordered) {
//     let message;
//     // Change code below this line
//   if (available < ordered) {
//       message = `Not enough goods in stock!`;
//   } else {
//       message = `Order is processed, our manager will contact you.`;
//   }
//     // Change code above this line
//     return message;
//   }

//   console.log(checkStorage(100, 50));
//   console.log(checkStorage(100, 130));
//   console.log(checkStorage(200, 20));
//   console.log(checkStorage(200, 150));
//   console.log(checkStorage(150, 180));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
//     // Change code below this line
//   const totalPrice = (pricePerDroid * orderedQuantity)

//     if (totalPrice > customerCredits) {
//     message = `Insufficient funds!`;
//     } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
//     }
//     // Change code above this line
//     return message;
//   }

//   console.log(makeTransaction(3000, 5, 23000));
//   console.log(makeTransaction(1000, 3, 15000));
//   console.log(makeTransaction(5000, 10, 8000));
//   console.log(makeTransaction(2000, 8, 10000));
//   console.log(makeTransaction(500, 10, 5000));
//
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function checkPassword(password) {
//     const ADMIN_PASSWORD = 'jqueryismyjam';
//     let message;

//     if (password === null) { // Change this line
//       message =  'Canceled by user!';
//     } else if (password === ADMIN_PASSWORD) { // Change this line
//       message = 'Welcome!';
//     } else {
//       message = 'Access denied, wrong password!';
//     }

//     return message;
//   }

//   console.log(checkPassword("mangohackzor"));
//   console.log(checkPassword(null));
//   console.log(checkPassword("polyhax"));
//   console.log(checkPassword("jqueryismyjam"));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function checkStorage(available, ordered) {
//     let message;
//     // Change code below this line
//   if (ordered === 0) {
//     message = `There are no products in the order!`
//   } else if (ordered > available) {
//     message = `Your order is too large, there are not enough items in stock!`
//   } else {
//     message = `The order is accepted, our manager will contact you`
//   }
//     // Change code above this line
//     return message;
//   }

//   console.log(checkStorage(100, 50));
//   console.log(checkStorage(100, 130));
//   console.log(checkStorage(70, 0));
//   console.log(checkStorage(200, 20));
//   console.log(checkStorage(200, 250));
//   console.log(checkStorage(150, 0));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function isNumberInRange(start, end, number) {
//     const isInRange = (number >= start && number <= end); // Change this line

//     return isInRange;
//   }
//   console.log(isNumberInRange(10, 30, 17));
//   console.log(isNumberInRange(10, 30, 5));
//   console.log(isNumberInRange(20, 50, 24));
//   console.log(isNumberInRange(20, 50, 76));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function checkIfCanAccessContent(subType) {
//     const canAccessContent = (subType === "pro" || subType === "vip"); // Change this line

//     return canAccessContent;
//   }

//   console.log(checkIfCanAccessContent("pro"));
//   console.log(checkIfCanAccessContent("starter"));
//   console.log(checkIfCanAccessContent("vip"));
//   console.log(checkIfCanAccessContent("free"));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function isNumberNotInRange(start, end, number) {
//     const isInRange = number >= start && number <= end;
//     const isNotInRange = !isInRange; // Change this line

//     return isNotInRange;
//   }

//   console.log(isNumberNotInRange(10, 30, 17));
//   console.log(isNumberNotInRange(10, 30, 5));
//   console.log(isNumberNotInRange(20, 50, 24));
//   console.log(isNumberNotInRange(20, 50, 76));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function getDiscount(totalSpent) {
//     const BASE_DISCOUNT = 0;
//     const BRONZE_DISCOUNT = 0.02;
//     const SILVER_DISCOUNT = 0.05;
//     const GOLD_DISCOUNT = 0.1;
//     let discount;
//     // Change code below this line
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 5000) {
//     discount = BRONZE_DISCOUNT;
//   } else {
//     discount = BASE_DISCOUNT;
//   }
//     // Change code above this line
//     return discount;
//   }

//   console.log(getDiscount(137000));
//   console.log(getDiscount(46900));
//   console.log(getDiscount(8250));
//   console.log(getDiscount(1300));
//   console.log(getDiscount(5000));
//   console.log(getDiscount(20000));
//   console.log(getDiscount(50000));

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function checkStorage(available, ordered) {
//     let message;
//     // Change code below this line

//     // if (available > ordered && available < ordered) {
//     //   message = "Not enough goods in stock!";
//     // } else {
//     //   message = "The order is accepted, our manager will contact you";
//     // }

//   message = available > ordered ? "The order is accepted, our manager will contact you" : "Not enough goods in stock!";
//     // Change code above this line
//     return message;
//   }

//   console.log(checkStorage(100, 50));
//   console.log(checkStorage(100, 130));
//   console.log(checkStorage(200, 20));
//   console.log(checkStorage(200, 150));
//   console.log(checkStorage(150, 180));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
//     // Change code below this line
//   message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";
//     // Change code above this line
//     return message;
//   }

//   console.log(checkPassword("jqueryismyjam"));
//   console.log(checkPassword("angul4r1sl1f3"));
//   console.log(checkPassword("r3actsux"));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function getSubscriptionPrice(type) {
//     let price;
//     // Change code below this line

//    switch (type) { // Change this line
//       case "starter" : // Change this line
//         price = 0; // Change this line
//         break;

//       case "professional" : // Change this line
//         price = 20; // Change this line
//         break;

//       case "organization" : // Change this line
//         price = 50; // Change this line
//         break;
//     }

//     // Change code above this line
//     return price;
//   }
//   console.log(getSubscriptionPrice("professional"));
//   console.log(getSubscriptionPrice("organization"));
//   console.log(getSubscriptionPrice("starter"));

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
//     // Change code below this line

//     // if (password === null) {
//     //   message = "Canceled by user!";
//     // } else if (password === ADMIN_PASSWORD) {
//     //   message = "Welcome!";
//     // } else {
//     //   message = "Access denied, wrong password!";
//     // }

//   switch (password) {
//     case null :
//       message = "Canceled by user!";
//       break;

//     case ADMIN_PASSWORD :
//       message = "Welcome!";
//       break;

//       default :
//       message = "Access denied, wrong password!";
//   }

//     // Change code above this line
//     return message;
//   }

//   console.log(checkPassword("mangohackzor"));
//   console.log(checkPassword(null));
//   console.log(checkPassword("polyhax"));
//   console.log(checkPassword("jqueryismyjam"));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function getShippingCost(country) {
//     let message;
//     // Change code below this line
//     const China = 100;
//     const Chile = 250;
//     const Australia = 170;
//     const Jamaica = 120;

//   switch (country) {
//     case 'China' :
//       price = 100;
//       message = `Shipping to ${country} will cost ${price} credits`;
//     break;

//   case 'Chile' :
//       price = 250;
//       message = `Shipping to ${country} will cost ${price} credits`;
//     break;

//   case 'Australia' :
//       price = 170;
//       message = `Shipping to ${country} will cost ${price} credits`;
//     break;

//   case 'Jamaica' :
//       price = 120;
//       message = `Shipping to ${country} will cost ${price} credits`;
//     break;

//   default :
//   message = "Sorry, there is no delivery to your country"

//   }
//     // Change code above this line
//     return message;
//   }

//   console.log(getShippingCost("Australia"));
//   console.log(getShippingCost("Germany"));
//   console.log(getShippingCost("China"));
//   console.log(getShippingCost("Chile"));
//   console.log(getShippingCost("Jamaica"));
//   console.log(getShippingCost("Sweden"));

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function getNameLength(name) {
//     const message = `Name ${name} is ${name.length} characters long`; // Change this line

//     return message;
//   }

// //   console.log(etNameLength("Poly"));
// //   console.log(getNameLength("Harambe"));
// //   console.log(getNameLength("Billy"));
// //   console.log(getNameLength("Joe"));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;

// const firstElement = courseTopic[0];

// const lastElement = courseTopic[courseTopic.length -1];
// console.log(courseTopicLength.length);
// console.log(firstElement[0]);
// console.log(lastElement[lastElement.langth -1]);
// // Change code above this line

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// // // (легко)
// // function checkForSpam(message) {
// //     let result;
// //     // Change code below this line
// //   const toLowerCaseMessage = message.toLowerCase();
// //     const messageSpam = toLowerCaseMessage.includes ("spam");
// //     const messageSale = toLowerCaseMessage.includes ("sale");
// //     result = messageSpam || messageSale;
// //     // Change code above this line
// //     return result;
// //   }
// //
// (важкіше)
// function checkForSpam(message) {
//     let result;
//     // Change code below this line
//   const toLowerCaseMessage = message.toLowerCase()
//   if(toLowerCaseMessage.includes("spam") || toLowerCaseMessage.includes("sale")){
//     result = true;
//   }else{
//     result = false
//   }
//     // Change code above this line
//     return result;
//   }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// \\\\\\\\\\\\\\\\\\\\|||||MODULE 2|||||////////////////////////////////////
// У функції може бути більше одного оператора return.
// Головне пам'ятати, що виконання функції переривається,
// коли інтерпретатор зустрічає повернення, і
// весь код після нього буде проігнорований
// в поточному виклику функції.

// Візьмемо вже знайому нам функцію перевірки повноліття.
// Вона працює, але тут є «зайвий» код, тобто тіло функції
// можна оптимізувати. В цьому випадку підійде спосіб (патерн)
//  «раннє повернення».

// function checkAge(age) {
//   let message;

//   if (age >= 18) {
//     message = "Ви повнолітня людина";
//   } else {
//     message = "Ви неповнолітня людина";
//   }

//   return message;
// }
// Якщо умова в if виконується, тобто приводиться до true,
// повертаємо рядок "You are an adult", і код нижче вже не
// виконається.
// Якщо умова в if не виконується, тобто приводиться до false,
// повертаємо рядок "You are a minor".
// Використовуючи патерн «раннє повернення» і те,
// що виконання функції переривається на операторі return,
// ми позбавляємося зайвої змінної і блоку else. Тобто цей спосіб
// допомагає «розгладити» розгалуження.
// ____________________________________________________________
// Запиши умову в інструкції if таким чином,
// щоб функція працювала правильно.
// ____________________________________________________________
// function checkAge(age) {
//     if (age >= 18) { // Change this line
//       return "You are an adult";
//     }

//     return "You are a minor";
//  }

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ЗАДАЧА: ПЕРЕВІРКА ПАРОЛЯ (РАННЄ ПОВЕРНЕННЯ)

// Функція checkPassword отримує пароль користувача
// у параметр password, перевіряє його на збіг з
// паролем адміністратора у змінній ADMIN_PASSWORD
// і повертає повідомлення про результат порівняння.

// Виконай рефакторинг коду функції checkPassword,
// використовуючи патерн «раннє повернення»:

// видали змінну message
// видали else
// код повинен працювати так само, як і до оптимізації
// Оголошена функція checkPassword(password)
// Виклик checkPassword("mangohackzor")
// повертає "Access denied, wrong password!"
// Виклик checkPassword("polyhax")
// повертає "Access denied, wrong password!"
// Виклик checkPassword("jqueryismyjam")
// повертає "Welcome!"

// ________________________________________________________________

// // BEFORE

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

//   let message;

//   if (password === ADMIN_PASSWORD) {
//     message = "Welcome!";
//   } else {
//     message = "Access denied, wrong password!";
//   }

//   return message;
//   // Change code above this line
// }
//   console.log(checkPassword("mangohackzor"));
//   console.log(checkPassword("polyhax"));
//   console.log(checkPassword("jqueryismyjam"));

// // AFTER

//   function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     // Change code below this line

//     if (password === ADMIN_PASSWORD) {
//       return "Welcome!";

//     }

//     return "Access denied, wrong password!";
//     // Change code above this line
//   }
//     console.log(checkPassword("mangohackzor"));
//     console.log(checkPassword("polyhax"));
//     console.log(checkPassword("jqueryismyjam"));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // ЗАДАЧА: СКЛАД ТОВАРІВ 3.0

// Функція checkStorage перевіряє можливість
//  оформлення замовлення і повертає повідомлення про результат.
//  Вона приймає два параметри, значення яких будуть задаватися
//   під час її виклику.

// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
// Виконай рефакторинг коду функції checkStorage,
// використовуючи патерн «раннє повернення».

// Оголошена функція checkStorage(available, ordered)
// Виклик checkStorage(100, 50) повертає "The order is accepted, our manager will contact you"
// Виклик checkStorage(100, 130) повертає "Your order is too large, not enough goods in stock!"
// Виклик checkStorage(70, 0) повертає "Your order is empty!"
// Виклик checkStorage(200, 20) повертає "The order is accepted, our manager will contact you"
// Виклик checkStorage(200, 250) повертає "Your order is too large, not enough goods in stock!"
// Виклик checkStorage(150, 0) повертає "Your order is empty!"
// _______________________________________________________________________________

// // BEFORE

// function checkStorage(available, ordered) {
//   // Change code below this line
//   let message;

//   if (ordered === 0) {
//     message = "Your order is empty!";
//   } else if (ordered > available) {
//     message = "Your order is too large, not enough goods in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }

//   return message;
//   // Change code above this line
// }

// // AFTER

// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return "Your order is empty!";
//   } if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }

//   return "The order is accepted, our manager will contact you";
//   // Change code above this line
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Масив використовується для зберігання впорядкованої колекції
// елементів. Він оголошується відкритою і закритою
// квадратною дужкою [] - літералом масиву.
//  Всередині дужок кожен елемент масиву розділяється комою.

// const planets = ["Earth", "Mars", "Venus"];

// Корисно
// Оголошуючи змінну для об'єкта або масиву, програмісти,
// як правило, використовують const. Вони роблять це для того,
//  щоб випадково не перезаписати значення, оскільки спроба
//  перезапису викличе помилку до того, як код потрапить
//  до користувача.

// _____________________________________________________

// Оголоси змінну fruits і присвой їй масив фруктів -
// рядків "apple", "plum", "pear" і "orange".

// // Change code below this line

// const fruits = ["apple", "plum", "pear", "orange"];

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Для доступу до значення елемента масиву застосовують
// синтаксис квадратних дужок масив[індекс].
// Між ім'ям змінної масиву і квадратними дужками не повинно
// бути пробілу.

// Увага
// Індексація елементів масиву починається з нуля.

// const planets = ["Earth", "Mars", "Venus"];
// planets[0]; // "Earth"
// planets[2]; // "Venus"

// ___________________________________________
// Оголоси три змінні і присвой кожній з них значення,
// використовуючи нотацію квадратних дужок.

// Ім'я змінної	Значення змінної

// firstElement	перший елемент масиву
// secondElement	другий елемент масиву
// lastElement	останній елемент масиву

// Оголошена змінна firstElement
// Значення змінної firstElement - це рядок "apple"
// Оголошена змінна secondElement
// Значення змінної secondElement - це рядок "plum"
// Оголошена змінна lastElement
// Значення змінної lastElement - це рядок "orange"

// ______________________________________________________

// const fruits = ["apple", "plum", "pear", "orange"];

// // Change code below this line
// const firstElement = "apple"  //"apple";
// const secondElement = "plum" //"plum";
// const lastElement = "orange" //"orange";

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// На відміну від рядків, елементи масиву можна змінювати,
// звернувшись до них за індексом і присвоївши інше значення.

// const numbers = [1, 2, 3, 4, 5];
// numbers[0] = 7;
// numbers[2] = 14;
// console.log(numbers); // [7, 2, 14, 4, 5];
// __________________________________________________________________

// const fruits = ["apple", "plum", "pear", "orange"];

// // Write your code under this line
// fruits[1] = "peach";
// fruits[3] = "banana";
// console.log(fruits); // [ 'apple', 'peach', 'pear', 'banana' ]
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Довжина масиву, тобто кількість його елементів,
//  зберігається у властивості length. Це динамічна величина,
//  яка змінюється автоматично під час додавання або видалення
//   елементів.

// const planets = ["Earth", "Mars", "Venus"];
// console.log(planets.length); // 3
// // ___________________________________________________
// Оголоси змінну fruitsArrayLength і присвой їй довжину масиву
// fruits, використовуючи властивість length.

// Оголошена змінна fruitsArrayLength
// Значення змінної fruitsArrayLength - це число 4
// // ______________________________________________
// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const fruitsArrayLength = fruits.length;
// +++++++++++++++++++++++++++++++++++++++++++++

// Найчастіше ми заздалегідь у коді не знаємо,
// яка буде довжина масиву. Для того щоб отримати значення
// останнього елемента, застосовується наступний
// підхід - довжина масиву завжди на одиницю більша за
//  індекс останнього елемента. Використовуючи формулу
//  довжина_масиву - 1, можна отримати значення останнього
//  елемента масиву довільної довжини.

// const planets = ["Earth", "Mars", "Venus"];
// const lastElementIndex = planets.length - 1;
// planets[lastElementIndex]; // "Venus"
// ________________________________________________________

// Оголоси дві зміні:

// Ім'я змінної	Очікуване значення

// lastElementIndex	Індекс останнього елемента
// масиву fruits через довжина_масиву - 1,

// lastElement	Значення останнього елемента масиву.

// Оголошена змінна lastElementIndex
// Значення змінної lastElementIndex - це число 3
// Оголошена змінна lastElement
// Значення змінної lastElement - це рядок "banana"
// _______________________________________________________

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];
// // fruits[lastElementIndex];

// console.log(lastElementIndex);
// console.log(lastElement);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ЗАДАЧА: КРАЙНІ ЕЛЕМЕНТИ МАСИВУ
// _________________________________________________________
// Напиши функцію getExtremeElements(array),
// яка приймає один параметр array - масив
// елементів довільної довжини.
// Функція повинна повертати масив з двох
//  елементів - першого і останнього елемента параметра array.

// Оголошена функція getExtremeElements(array)
// Виклик getExtremeElements([1, 2, 3, 4, 5]) повертає [1, 5]
// Виклик getExtremeElements(["Earth", "Mars", "Venus"]) повертає ["Earth", "Venus"]
// Виклик getExtremeElements(["apple", "peach", "pear", "banana"]) повертає ["apple", "banana"]
// _________________________________________________________
// function getExtremeElements(array) {
//   // Change code below this line
//   return [array[0], array[array.length-1]];
//   // Change code above this line
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Метод split(delimiter) дозволяє перетворити рядок на масив,
// "розбивши" його по роздільнику delimiter.
// Якщо роздільник - це порожній рядок, отримаємо масив окремих символів.
//  Роздільником може бути один або кілька символів.

// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript essentials";
// console.log(message.split(" ")); // ["JavaScript", "essentials"]
// ______________________________________________________________________
// Доповни код функції splitMessage(message, delimiter) таким чином,
//  щоб вона повертала у змінній words результат поділу рядка message
//   за роздільником delimiter - масив рядків.

// Оголошена функція splitMessage(message, delimiter)
// Виклик splitMessage("Mango hurries to the train", " ")
// повертає ["Mango", "hurries", "to", "the", "train"]

// Виклик splitMessage("Mango", "")
// повертає ["M", "a", "n", "g", "o"]

// Виклик splitMessage("best_for_week", "_")
// повертає ["best", "for", "week"]
// _________________________________________________________________
// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimiter);
//   // Change code above this line
//   return words;
// }
// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ЗАДАЧА: ГРАВІРУВАННЯ ПРИКРАС

// Сервісу гравірування прикрас потрібна функція,
// яка б автоматично рахувала ціну гравірування,
// залежно від кількості слів і ціни за слово.

// Оголошена функція calculateEngravingPrice(message, pricePerWord).
// Ця функція приймає рядок, що складається зі слів,
// розділених лише пробілами (параметр message) та ціну гравірування
// одного слова (параметр pricePerWord).

// Напиши тіло функції, щоб вона повертала загальну вартість
// гравірування усіх слів в рядку.

// Оголошена функція calculateEngravingPrice(message, pricePerWord)

// Виклик calculateEngravingPrice("JavaScript is in my blood", 10)
//  повертає 50

// Виклик calculateEngravingPrice("JavaScript is in my blood", 20)
// повертає 100

// Виклик calculateEngravingPrice("Web-development is creative work", 40)
//  повертає 160

// Виклик calculateEngravingPrice("Web-development is creative work", 20)
//  повертає 80
// ___________________________________________________________________

// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
// return message.split(" ").length * pricePerWord;

//   // Change code above this line
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Метод масивів join(delimiter) дозволяє з'єднати елементи масиву
// в рядок. У рядку елементи будуть розділені символом або
// групою символів, зазначених у delimiter. Тобто це зворотна
// операція методу рядків split(delimiter).

// const words = ["JavaScript", "is", "amazing"];
// console.log(words.join("")); // 'JavaScriptisamazing'
// console.log(words.join(" ")); // 'JavaScript is amazing'
// console.log(words.join("*")); // 'JavaScript*is*amazing'
// _____________________________________________________________________
// Доповни код функції makeStringFromArray(array, delimiter) таким чином,
// щоб вона повертала у змінній string результат
// з'єднання елементів масиву array з роздільником delimiter - рядок.

// Оголошена функція makeStringFromArray(array, delimiter)

// Виклик makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ")
// повертає "Mango hurries to the train"

// Виклик makeStringFromArray(["M", "a", "n", "g", "o"], ""))
// повертає "Mango"

// Виклик makeStringFromArray(["top", "picks", "for", "you"], "_")
// повертає "top_picks_for_you"
// ___________________________________________________________________

// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line
//  string = array.join(delimiter);

//   // Change code above this line
//   return string;
// }
// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
// console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Термін slug - це людино-зрозумілий унікальний ідентифікатор,
// який використовується у веб-розробці для створення читабельних URL-адрес.

// Наприклад, замість того, щоб користувач побачив в адресному рядку
//  mysite.com/posts/1q8fh74tx, можна зробити slug з назви статті.
//  В результаті адреса буде приємнішою для
// сприйняття: mysite.com/posts/arrays-for-begginers.

// Увага
// Slug - це завжди рядок у нижньому регістрі, слова якого розділені тире.

// ЗАДАЧА: ГЕНЕРАТОР SLUG
// ______________________________________________________________________________
// Напиши функцію slugify(title), яка приймає заголовок статті,
// параметр title, і повертає slug, створений з цього рядка.

// Значенням параметра title будуть рядки,
// слова яких розділені лише пробілами

// Усі символи slug повинні бути у нижньому регістрі

// Всі слова slug повинні бути розділені тире

// Оголошена функція slugify(title)

// Виклик slugify("Arrays for begginers")
// повертає "arrays-for-begginers"

// Виклик slugify("English for developer")
// повертає "english-for-developer"

// Виклик slugify("Ten secrets of JavaScript")
// повертає "ten-secrets-of-javascript"

// Виклик slugify("How to become a JUNIOR developer in TWO WEEKS")
// повертає "how-to-become-a-junior-developer-in-two-weeks"
// ____________________________________________________________________________
// function slugify(title) {
//   // Change code below this line

// return title.toLowerCase().split(" ").join("-");

//   // Change code above this line
// }
// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Метод slice(begin, end) повертає новий масив,
// що містить копію частини вихідного масиву,
// не змінюючи його. Копія робиться від begin і до,
// але не включно, end - індекси елементів вихідного масиву.

// Якщо begin та end не вказані, буде створена повна копія вихідного масиву.

// Якщо не вказаний end, копіювання буде від start до кінця вихідного масиву.

// Якщо значення start від'ємне, а end не вказане,
// то будуть скопійовані останні N елементів.

// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];

// console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
// console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
// console.log(planets.slice(1, 3)); // ['Mars', 'Venus']
// console.log(planets.slice(-2)); // ['Jupiter', 'Saturn']
// console.log(planets.slice()); // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn']
// __________________________________________________________________________________________
// Доповни код таким чином, щоб змінні містили часткові копії
// вихідного масиву fruits.

// firstTwoEls - масив із перших двох елементів

// nonExtremeEls - масив з усіх елементів, крім першого та останнього

// lastThreeEls - масив із трьох останніх елементів

// Оголошена змінна fruits
// Значення змінної fruits - це масив ["apple", "plum", "pear", "orange", "banana"]

// Оголошена змінна firstTwoEls
// Значення змінної firstTwoEls - це масив ["apple", "plum"]

// Оголошена змінна nonExtremeEls
// Значення змінної nonExtremeEls - це масив ["plum", "pear", "orange"]

// Оголошена змінна lastThreeEls
// Значення змінної lastThreeEls - це масив ["pear", "orange", "banana"]

// Змінній lastThreeEls присвоєна копія частини масиву fruits
// після застосування методу slice з правильними аргументами
// __________________________________________________________________________________________
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Метод concat використовується для об'єднання двох або більше масивів.
// Він не змінює масив на якому викликається, а повертає новий.
// Порядок аргументів методу впливає на порядок елементів нового масиву.

// const firstArray = ["Mercury", "Venus", "Earth"];
// const secondArray = ["Mars", "Jupiter"];
// const thirdArray = ["Saturn", "Uranus", "Neptune"];
// const allPlanets = firstArray.concat(secondArray, thirdArray);

// console.log(firstArray); // ['Mercury', 'Venus', 'Earth'];
// console.log(allPlanets); // ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
// ______________________________________________________________________
// Доповни код таким чином, щоб у змінній allClients утворився масив
// усіх елементів масивів oldClients і newClients.

// Оголошена змінна oldClients
// Значення змінної oldClients - це масив ["Mango", "Ajax", "Poly", "Kiwi"]

// Оголошена змінна newClients
// Значення змінної newClients - це масив ["Peach", "Houston"]

// Оголошена змінна allClients
// Значення змінної allClients - це масив ["Mango", "Ajax", "Poly", "Kiwi", "Peach", "Houston"]

// Змінній allClients присвоєний масив після застосування методу concat з правильними аргументами
// ______________________________________________________________________

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line

// console.log(oldClients);
// console.log(newClients);
// console.log(allClients);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ЗАДАЧА: КОМПОЗИЦІЯ МАСИВІВ
// _________________________________________________________________________
// Напиши функцію makeArray(firstArray, secondArray, maxLength)
// для створення нового масиву з усіма елементами двох вихідних
// firstArray і secondArray. Параметр maxLength містить максимально
// допустиму довжину нового масиву.

// Якщо кількість елементів нового масиву більша за maxLength,
// функція повинна повернути копію масиву довжиною maxLength елементів.
// В іншому випадку функція повинна повернути новий масив повністю.

// Оголошена функція makeArray(firstArray, secondArray, maxLength)

// Виклик makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)
// повертає ["Mango", "Poly", "Ajax"]

// Виклик makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)
// повертає ["Mango", "Poly", "Houston", "Ajax"]

// Виклик makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)
// повертає ["Mango", "Ajax", "Chelsea"]

// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)
// повертає ["Earth", "Jupiter"]

// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)
// повертає ["Earth", "Jupiter", "Neptune", "Uranus"]

// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)
// повертає []

// Виклик функції makeArray() з випадковими масивами і випадковим числом
// повертає правильний масив
// _______________________________________________________________________________
// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
// const newArray = firstArray.concat(secondArray)
// if (newArray.length > maxLength) {
//   return newArray.slice(0, maxLength);
// }

// return newArray;

//   // Change code above this line
// }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));
// console.log(makeArray([]));
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Цикли використовуються для багаторазового повторення коду.
// Оголошення циклу for складається з трьох виразів.

// for (Ініціалізація; Умова; Пост - вираз) {
//   // Тіло циклу
// }
// Ініціалізація - виконується один раз перед початком циклу.
// Використовується для створення змінної-лічильника і
// встановлення її початкового значення.

// Умова - вираз, що оцінюється перед кожною ітерацією (повторенням) циклу.
// Тіло циклу виконується тільки тоді, коли вираз приводиться до true.
// Цикл завершується, якщо значення буде false.

// Пост-вираз - виконується в кінці кожного повторення циклу,
// перед перевіркою умови. Використовується для оновлення змінної-лічильника.

// Тіло - набір інструкцій для виконання на кожному повторенні.
// Виконується, якщо вираз умови приводиться до true.

// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }
// В прикладі оголошується змінна i, ініціалізується значенням 0,
// і цикл виконується (його тіло) доти, доки i <= 20, тобто умова
// приводиться до true. Після кожної ітерації лічильник збільшується на 5.
// _________________________________________________________________________
// Доповни цикл for таким чином,
// щоб він логував всі цілі числа в діапазоні
// від start до end включно.
// _______________________________________________________________________
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ЗАДАЧА: СУМА ЧИСЕЛ (ЦИКЛ FOR)
// ____________________________________________________________________
// Напиши функцію calculateTotal(number), яка приймає ціле число
// (параметр number) і повертає суму всіх цілих чисел від одиниці і
// до цього числа. Наприклад, якщо number дорівнює 3, то сума -
// це 1 + 2 + 3, тобто 6.

// Оголошена функція calculateTotal(number)
// Виклик функції calculateTotal(1) повертає 1
// Виклик функції calculateTotal(3) повертає 6
// Виклик функції calculateTotal(7) повертає 28
// Виклик функції calculateTotal(18) повертає 171
// Виклик функції calculateTotal(24) повертає 300
// Виклик функції calculateTotal() з випадковим числом повертає
// правильне значення
// _______________________________________________________________________
// function calculateTotal(number) {
//   // Change code below this line
//   let total = 0;
//  for (let i = 0; i <= number; i += 1)
//  {
//  total += i;
//  }
//   return total

//    // Change code above this line
//  }
//  console.log(calculateTotal(1));
//  console.log(calculateTotal(3));
//  console.log(calculateTotal(7));
//  console.log(calculateTotal(18));
//  console.log(calculateTotal(24));
//  console.log(calculateTotal(100));
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Цикл for можна використовувати для ітерації по масиву,
// тобто «перебрати» його поелементно.

// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }
// Для доступу до елементів використовується синтаксис квадратних
// дужок масив[індекс], де індекс - це значення лічильника циклу
// від 0 і до останнього індексу масиву, який на одиницю менший
// за довжину масиву.
// ______________________________________________________________________
// Доповни код циклу for таким чином, щоб він послідовно логував
// усі елементи масиву fruits.
// ______________________________________________________________________
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i + 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }
// !!!!!!!!!!!!!!!!!!!!ОБЕРЕЖНО!!!!!МОЖЕ ЗАГЛЮЧИТИ КОМП!!!!!!!!!!!!!!!!!!!!!!!!!
// ОСЬ ПРАВИЛЬНИЙ КОД!!!!!!!!!!!!
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ЗАДАЧА: ОБЧИСЛЕННЯ СУМИ ПОКУПКИ
// ______________________________________________________________
// Напиши функцію calculateTotalPrice(order),
// яка приймає один параметр order - масив чисел,
// і обчислює загальну суму його елементів. Загальна сума
// елементів повинна зберігатися у змінній total, яка повертається
// як результат роботи функції.

// Оголошена функція calculateTotalPrice(order)

// Виклик функції calculateTotalPrice([12, 85, 37, 4])
// повертає 138

// Виклик функції calculateTotalPrice([164, 48, 291])
// повертає 503

// Виклик функції calculateTotalPrice([412, 371, 94, 63, 176])
// повертає 1116

// Виклик функції calculateTotalPrice() з випадковим масивом
// повертає правильне значення
// _________________________________________________________________________
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1) {
//       total += order[i]

//     }
//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([666, 13, 1488, 999, 4308]));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ЗАДАЧА: ПОШУК НАЙДОВШОГО СЛОВА
// ___________________________________________________________________
// Напиши функцію findLongestWord(string), яка приймає довільний рядок,
// що складається тільки зі слів, розділених пробілом (параметр string),
// і повертає найдовше слово в цьому рядку.

// Оголошена функція findLongestWord(string)

// Виклик функції findLongestWord("The quick brown fox jumped over the lazy dog")
// повертає jumped

// Виклик функції findLongestWord("Google do a roll")
// повертає Google

// Виклик функції findLongestWord("May the force be with you")
// повертає force

// Виклик функції findLongestWord() з випадковим рядком
// повертає правильне значення
// _________________________________________________________________
// function findLongestWord(string) {
//   // Change code below this line
// let longestWord = ' ';

//   const array = string.split(" ");

// for (let i = 0; i < array.length; i += 1) {
//   if (longestWord.length < array[i].length) {

//     longestWord = array[i];
//   }

// }
//  return longestWord
//   // Change code above this line
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));
// console.log(findLongestWord('sdasdasdasd sad s awd dw dweqwdddddddddddddddeqweqwe qw fgdfhgdfgd fg dfg dfgfgdfgdfgdfgdfgdfgdf'));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//
// Метод push() дозволяє додати один або кілька елементів в кінець масиву,
// без необхідності вказувати індекси елементів, що додаються.

// const planets = ["Earth", "Mars", "Venus"];
// planets.push("Jupiter");
// planets.push("Saturn", "Uranus", "Neptune");

// console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter',
//  'Saturn', 'Uranus', 'Neptune']
// ____________________________________________________________________
// Доповни код функції createArrayOfNumbers(min, max) таким чином,
// щоб вона повертала масив усіх цілих чисел від значення min до max.

// Оголошена функція createArrayOfNumbers(min, max)

// Виклик функції createArrayOfNumbers(1, 3)
// повертає [1, 2, 3]

// Виклик функції createArrayOfNumbers(14, 17)
// повертає [14, 15, 16, 17]

// Виклик функції createArrayOfNumbers(29, 34)
// повертає [29, 30, 31, 32, 33, 34]

// Виклик функції createArrayOfNumbers() з випадковими min і max
// повертає правильний масив

// В циклі for використовувався метод push
// __________________________________________________________________
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
// for (let i = min; i <= max; i += 1) {

//   numbers.push(i);
// }
//   // Change code above this line
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));
// console.log(createArrayOfNumbers(14, 88));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ЗАДАЧА: ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ
// _______________________________________________________________________
// Напиши функцію filterArray(numbers, value),
// яка приймає масив чисел (параметр numbers) і повертає новий масив,
// в якому будуть тільки ті елементи масиву numbers, які більші за
// значення параметра value (число).

// Оголошена функція filterArray(numbers, value)

// Виклик функції filterArray([1, 2, 3, 4, 5], 3) повертає [4, 5]

// Виклик функції filterArray([1, 2, 3, 4, 5], 4) повертає [5]

// Виклик функції filterArray([1, 2, 3, 4, 5], 5) повертає []

// Виклик функції filterArray([12, 24, 8, 41, 76], 38) повертає [41, 76]

// Виклик функції filterArray([12, 24, 8, 41, 76], 20) повертає [24, 41, 76]

// Виклик функції filterArray() з випадковим масивом і числом
// повертає правильний масив

// В циклі for використовувався метод push
// ___________________________________________________________________
// // ПРИКЛАД-1:

// function filterArray(numbers, value) {
//   // Change code below this line
// const result = [];
// for (const arr of numbers) {
//   if (arr > value) {
//     result.push(arr);
//   }
// }
// return result;

//  // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));
// console.log(filterArray([32, 44, 65, 77, 88, 99, 42, 28]));

// // ПРИКЛАД-2:

// function filterArray(numbers, value) {
//   // Change code below this line
// const result = [];
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > value) {
//     result.push(numbers[i]);
//   }
// }
// return result;

//  // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));
// console.log(filterArray([32, 44, 65, 77, 88, 99, 42, 28]));
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Метод includes(value) перевіряє, чи присутній в масиві елемент зі
// значенням value, і повертає true або false відповідно.
// Сфера застосування цього методу зводиться до ситуацій,
// коли необхідно перевірити, чи присутній елемент в масиві,
// і не важлива його позиція (індекс).

// const planets = ["Earth", "Mars", "Venus"];

// console.log(planets.includes("Earth")); // true
// console.log(planets.includes("Mars")); // true
// console.log(planets.includes("Venus")); // true
// console.log(planets.includes("Jupiter")); // false
// ___________________________________________________________________
// Функція checkFruit(fruit) приймає рядок з назвою фрукта (параметр fruit),
// і перевіряє, чи присутній такий фрукт в масиві fruits.

// Доповни код функції таким чином, що якщо:

// фрукт присутній в масиві, то функція повертає true;

// фрукт відсутній в масиві, то функція повертає false.

// Оголошена функція checkFruit(fruit)

// Виклик checkFruit("plum") повертає true

// Виклик checkFruit("mandarin") повертає false

// Виклик checkFruit("pear") повертає true

// Виклик checkFruit("Pear") повертає false

// Виклик checkFruit("apple") повертає true

// Виклик функції checkFruit() з випадковим словом
// повертає правильне значення boolean

// У функції використовувався метод includes
// // __________________________________________________________________
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }
// console.log(checkFruit("plum"));
// console.log(checkFruit("mandarin"));
// console.log(checkFruit("pear"));
// console.log(checkFruit("Pear"));
// console.log(checkFruit("apple"));
// console.log(checkFruit("banana"));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ЗАДАЧА: СПІЛЬНІ ЕЛЕМЕНТИ
// ___________________________________________________________________
// Спільними елементами масивів називають ті елементи,
// які присутні у всіх масивах.

// Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3]
// спільними будуть числа 3 і 5, оскільки вони присутні в
// обох вихідних масивах. А числа 0, 1 і 8 присутні тільки в
// одному з масивів.

// Напиши функцію getCommonElements(array1, array2),
// яка отримує два масиви довільної довжини в параметри array1 і array2,
// і повертає новий масив, що складається з тих елементів, які присутні
// в обох вихідних масивах.

// Оголошена функція getCommonElements(array1, array2)

// Виклик getCommonElements([1, 2, 3], [2, 4])
// повертає [2]

// Виклик getCommonElements([1, 2, 3], [2, 1, 17, 19])
// повертає [1, 2]

// Виклик getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])
// повертає [12, 27, 3]

// Виклик getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])
// повертає [10, 30, 40]

// Виклик getCommonElements([1, 2, 3], [10, 20, 30])
// повертає []

// Виклик функції getCommonElements() з випадковими двома масивами
// повертає правильний масив

// В циклі for використовувалися методи includes і push
// _________________________________________________________________________

// function getCommonElements(array1, array2) {
//   // Change code below this line
// const result = [];

// for (let i = 0; i < array1.length, i < array2.length; i += 1) {
//   if (array2.includes(array1[i])) {
//     result.push(array1[i])
//   }
// }
//  return result;

//  // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
// console.log(getCommonElements([8, 45, 33, 76, 88, 999, 101], [101, 32, 42, 88, 14, 666, 8, 33]));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Інструкція for...of оголошує цикл, який перебирає ітерабельні об'єкти,
// такі як масиви та рядки. Тіло циклу буде виконуватися для значення
// кожного елемента. Це хороша заміна циклу for, якщо не потрібен доступ
// до лічильника ітерації.

// for (const variable of iterable) {
//   // тіло цикла
// }

// variable - змінна, яка буде зберігати значення елемента на кожній ітерації

// iterable - колекція, яка містить ітерабельні елементи, наприклад масив

// const planets = ["Earth", "Mars", "Venus"];

// for (const planet of planets) {
//   console.log(planet);
// }
// ______________________________________________________________________
// Виконай рефакторинг коду функції calculateTotalPrice(order),
// замінивши цикл for на for...of.

// Оголошена функція calculateTotalPrice(order)

// Виклик функції calculateTotalPrice([12, 85, 37, 4])
// повертає 138

// Виклик функції calculateTotalPrice([164, 48, 291])
// повертає 503

// Виклик функції calculateTotalPrice([412, 371, 94, 63, 176])
// повертає 1116

// Виклик функції calculateTotalPrice([])
// повертає 0

// Виклик функції calculateTotalPrice() з випадковим масивом чисел
// повертає правильну суму
// ______________________________________________________________________
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const item of order) {
//     total += item;
//   }

//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([]));
// console.log(calculateTotalPrice(["Hell"]));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ЗАДАЧА: ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ 2.0

// Виконай рефакторинг функції filterArray(numbers, value),
// замінивши цикл for на for...of.

// Оголошена функція filterArray(numbers, value)

// Виклик функції filterArray([1, 2, 3, 4, 5], 3)
// повертає [4, 5]

// Виклик функції filterArray([1, 2, 3, 4, 5], 4)
// повертає [5]

// Виклик функції filterArray([1, 2, 3, 4, 5], 5)
// повертає []

// Виклик функції filterArray([12, 24, 8, 41, 76], 38)
// повертає [41, 76]

// Виклик функції filterArray([12, 24, 8, 41, 76], 20)
// повертає [24, 41, 76]

// Виклик функції filterArray() з випадковим масивом і числом
// повертає правильний масив

// Функція filterArray() використовує цикл for..of
// _________________________________________________________________
// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));
// console.log(filterArray([13, 42, 52, 88, 31], 13));

// рефакторинг=======================================================>>>

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (const number of numbers) {

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));
// console.log(filterArray([13, 42, 52, 88, 31], 13));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Замість того, щоб повертати результат ділення,
// операція за модулем (%) повертає цілочисельну остачу від
// ділення двох чисел - діленого і дільника.

// 5 % 1 = 0;
// // 5, поділене на 1, дорівнює 5, а остача - 0

// 5 % 2 = 1;
// //  5, поділене на 2, дорівнює 2, а остача - 1

// 5 % 3 = 2;
// //  5, поділене на 3, дорівнює 1, а остача - 2

// 5 % 4 = 1;
// //  5, поділене на 4, дорівнює 1, а остача - 1

// 5 % 5 = 0;
// //  5, поділене на 5, дорівнює 1, а остача - 0
// ____________________________________________________________
// Доповни вираз остачі від ділення таким чином, щоб код проходив тести.

// Оголошена змінна a
// Значення змінної a - це число 0
// Оголошена змінна b
// Значення змінної b - це число 1
// Оголошена змінна c
// Значення змінної c - це число 3
// Оголошена змінна d
// Значення змінної d - це число 5
// Оголошена змінна e
// Значення змінної e - це число 2
// Change code below this line
// ____________________________________________
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 6;
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ЗАДАЧА: ПАРНІ ЧИСЛА
// _________________________________________________________
// Напиши функцію getEvenNumbers(start, end), яка
// повертає масив усіх парних чисел від start до end.
// Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0).

// Оголошена функція getEvenNumbers(start, end)

// Виклик функції getEvenNumbers(2, 5) повертає [2, 4]
// Виклик функції getEvenNumbers(3, 11) повертає [4, 6, 8, 10]
// Виклик функції getEvenNumbers(6, 12) повертає [6, 8, 10, 12]
// Виклик функції getEvenNumbers(8, 8) повертає [8]
// Виклик функції getEvenNumbers(7, 7) повертає []
// Виклик функції getEvenNumbers() з випадковими start і end
// повертає правильний масив
// _______________________________________________________________
// function getEvenNumbers(start, end) {
//   // Change code below this line
//  const numb = [];
// for (let i = start; i <= end; i += 1) {
//  if (i % 2 === 0) {
//  numb.push(i);
//  }

//  }
// return numb;

//    // Change code above this line
//  }
// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));
// console.log(getEvenNumbers(13, 14));
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     // break; <=== TASK with BREAK
//   }
// }
// console.log(number);
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Якщо цикл знаходиться в тілі функції, то оператор break не припиняє
// виконання функції, а тільки перерве цикл. Для того щоб переривати
// виконання відразу циклу і функції, є оператор return.

// У прикладі шукаємо число 3. Щойно виконається умова if,
// робимо повернення, яке перерве виконання циклу і функції.

// function fn() {
//   for (let i = 0; i <= 5; i += 1) {
//     console.log(i);

//     if (i === 3) {
//       console.log("Знайшли число 3, робимо повернення, перериваючи цикл і функцію");
//       return i;
//     }
//   }

//   // Цей console.log не виконається
//   console.log("Лог після циклу в тілі функції");
// }

// const result = fn();
// console.log("Лог після виходу з функції");
// console.log(`Результат виконання функції ${result}`);
// _________________________________________________________________
// Виконай рефакторинг функції findNumber(start, end, divisor) таким чином,
// щоб вона:

// повертала перше число від start до end, яке ділиться на divisor без остачі

// не використала оператор break

// не використала змінну number

// Оголошена функція findNumber(start, end, divisor)

// Виклик findNumber(2, 6, 5) повертає 5
// Виклик findNumber(8, 17, 3) повертає 9
// Виклик findNumber(6, 9, 4) повертає 8
// Виклик findNumber(16, 35, 7) повертає 21
// Виклик findNumber() з випадковим набором чисел
// повертає правильний результат

// В циклі for не повинен використовуватися break для виходу до
// завершення всіх ітерацій циклу
// ______________________________________________________
// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//        return number;
//       // break;
//     }
//   }

//   // return number;
//   // Change code above this line
// }
// console.log(findNumber(2, 6, 5));
// console.log(findNumber(8, 17, 3));
// console.log(findNumber(6, 9, 4));
// console.log(findNumber(16, 35, 7));
// +++++++++++++++++++++++++++++++++++++++++++++++++
//
// ЗАДАЧА: ФУНКЦІЯ INCLUDES()
// _______________________________________________________________________________
// Напиши функцію includes(array, value), яка робить те саме,
// що і метод масиву масив.includes(значення) - перевіряє, ч
// и присутнє в масиві array значення value, повертаючи true,
// якщо присутнє, і false в іншому випадку.

// При виконанні цього завдання в тілі функції includes() не можна
// використовувати метод масив.includes(значення).

// Оголошена функція includes(array, value)

// Виклик includes([1, 2, 3, 4, 5], 3)
// повертає true

// Виклик includes([1, 2, 3, 4, 5], 17)
// повертає false

// Виклик includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")
// повертає true

// Виклик includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus")
// повертає false

// Виклик includes(["apple", "plum", "pear", "orange"], "plum")
// повертає true

// Виклик includes(["apple", "plum", "pear", "orange"], "kiwi")
// повертає false

// Виклик includes() для випадкового масиву з випадковим value
// повертає правильний boolean

// У функції includes використовується for, return,
// але не метод масиву includes
// _______________________________________________________________________________

// function includes(array, value) {
//   // Change code below this line

// for (let i = 0; i <=array.length; i += 1) {
//   if (array[i] === value) {
//     return true;
//   }
// }
// return false;
//   // Change code above this line
// }
// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));
// console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// //////////////////////////////////////||MODULE-3||\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "На березі спокійних вод",
//       author: "Роберт Шеклі",
//       rating: 8.51,
//     },
//   ];
  
//   for (const book of books) {
//     console.log(book.title);
//     console.log(book.author);
//     console.log(book.rating);
//   }

// for (const { title, author, rating } of books) {
//     console.log(title);
//     console.log(author);
//     console.log(rating);
//   }
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const keys = [];
//   const values = [];
//   // Change code below this line
//   for (const key in apartment) {
//    keys.push(key);
//    values.push(apartment[key])

//   }
//   console.log(apartment);
//   console.log(keys);
//   console.log(values);
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function countProps(object) {
//     let propCount = 0;
//     // Change code below this line
//   const keys = Object.keys(object);
//   for (const key of keys) {
//     propCount += 1;
//   }
//     // Change code above this line
//     return propCount;
//   }
// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));  
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const values = [];
//   // Change code below this line
//   const keys = Object.keys(apartment);
  
//   for (const key of keys) 
//   {
//     keys.push(key);
//     values.push(apartment[key]);
   
//   }
//    console.log(key);
//     console.log(apartment[key]);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//повертає

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function getProductPrice(productName) {
//     // Change code below this line
//     for (const product of products) {
//       if (productName === product.name) {
//         return product.price;
//       }
//     }
//     return null;
//     // Change code above this line
//   }
//   console.log(getProductPrice("Radar"));
//   console.log(getProductPrice("Grip"));
//   console.log(getProductPrice("Scanner"));
//   console.log(getProductPrice("Droid"));
//   console.log(getProductPrice("Engine"));
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function getAllPropValues(propName) {
//     // Change code below this line
//     let value = [];
//       for (const product of products) {
//           if (propName === "name") {
//              value.push(product.name)
//           } else if (propName === "price") {
//               value.push(product.price)
//           } else if (propName === "quantity") {
//               value.push(product.quantity)
//           }
//       }
//    return value
//       // Change code above this line
//     }
//     console.log(getAllPropValues("name"));
//     console.log(getAllPropValues("quantity"));
//     console.log(getAllPropValues("price"));
//     console.log(getAllPropValues("category"));
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function calculateTotalPrice(productName) {
//     // Change code below this line
//     let sum = 0;

// //   console.log(values)
//   for (const product of products) {
//     if (productName === product.name) {
//         sum = (product.price * product.quantity)
//     }
// }
//     return sum;
// // Change code above this line

//   }  

// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // В консолі буде масив
// const temps = [14, -4, 25, 8, 11];
// console.log(temps);
// // ❌ Так не спрацює, тому що передаємо цілий масив
// console.log(Math.max(temps)); // NaN

// // В консолі буде набір окремих чисел
// console.log(...temps);
// // ✅ Розподілимо колекцію елементів у якості окремих аргументів
// console.log(Math.max(...temps)); // 25

// _____________________________________________________________
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = scores;
// const worstScore = scores;
// console.log(Math.max(...bestScore));
// console.log(Math.min(...worstScore));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function makeTask(data) {
//     const completed = false;
//     const category = "General";
//     const priority = "Normal";
//     // Change code below this line
//   const newObject = { category, priority, ...data, completed,};
//     return newObject;
//     // Change code above this line
//   }
// console.log(makeTask({}));
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
// console.log(makeTask({ category: "Finance", text: "Take interest" }));
// console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));
// console.log(makeTask({ text: "Buy bread" }));  
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Change code below this line
// function add(...args) {
//     let result = 0;
//     for (let arg of args) {
//         result += arg
//     }
  
//       return result;
//     // Change code above this line
//   }
// console.log(add(15, 27));
// console.log(add(12, 4, 11, 48));
// console.log(add(32, 6, 13, 19, 8));
// console.log(add(74, 11, 62, 46, 12, 36));  
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Change code below this line
// function findMatches(arr, ...args) {
//     const matches = []; // Don't change this line
//   for (const arg of args) {

//     if (arr.includes(arg)) {
//             matches.push(arg);
//     }
//   }
//     // Change code above this line
//     return matches;
//   }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));  
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const bookShelf = {
//     books: ["The last kingdom", "Haze", "The guardian of dreams"],
//     updateBook(oldName, newName) {
//       // Change code below this line
//        let idx = this.books.indexOf(oldName);
//           if (idx !== -1) {
//               this.books.splice(idx, 1, newName);
//           }
//           return this.books;
  
  
//       // Change code above this line
//     },
//   };
// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// console.log(bookShelf.updateBook("The last kingdom", "Dune"));  
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const atTheOldToad = {
    potions: [
      { name: "Speed potion", price: 460 },
      { name: "Dragon breath", price: 780 },
      { name: "Stone skin", price: 520 },
    ],
    // Change code below this line
    getPotions() {
      return this.potions;
    },
addPotion(newPotion) {
    for (const potion of this.potions) {
      if (this.potions.includes(newPotion)) {
        return `Error! Potion ${newPotion} is already in your inventory!`;
      }
    }
      this.potions.push(newPotion);
    },
removePotion(potionName) {
        for (let i = 0; i < this.potions.length; i++) {
            if (potionName === this.potions[i].name) {
              return this.potions.splice(i, 1)
            }
          }
          return `Potion ${potionName} is not in inventory!`
    },
updatePotionName(oldName, newName) {
    //   const potionIndex = this.potions.indexOf(oldName);
  for (const potion of this.potion) {
      if (potionIndex === -1) {
        return `Potion ${oldName} is not in inventory!`;
      }
    }
      this.potions.splice(potionIndex, 1, newName);
    },
    // Change code above this line
  };
  




























