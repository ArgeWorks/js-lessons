// ========== Задачи - this первая половина ========== //
// Задача №1
const rectangle = {
    width: 200,
    height: 100,
    getSquare: function () {
        return this.width * this.height;
    }
};

// Задача №2
const product = {
    price: 150,
    discount: 15,
    getPrice: function () { return this.price; },
    getPriceWithDiscount: function () { return this.price - (this.price / 100 * this.discount); }
};

// Задача №3
const user = { name: 'Abraham'},
    getUserName = function () { return this.name; };

user.getName = getUserName;

// Задача №4
const object = {
    height: 100,
    increaseHeightByOne: function () {
        return ++this.height;
    }
}

// Задача №5
const numerator = {
    value: 1,
    double: function () { 
        this.value *= 2;
        return this;
    },
    plusOne: function () { 
        ++this.value;
        return this;
    },
    minusOne: function () { 
        --this.value;
        return this;
    }
}

// Задача №6
// user.getName; undefined  -  у объекта user нету свойства/метода getName.
// user.getName = otherUser.getName;  -  проиходит заимствование метода getName с otherUser в user.
// Ну и теперь у обоих объектов есть метод getName, который будет возвращать имя в зависимости от объекта вызывающего его.


// ========== Задачи - this вторая половина ========== //
// Задача №1
function getList() { return this.list; }
const users = {
    length: 4,
    list: ['Abraham', 'James', 'John', 'Steven']
};

getList(); // Вернет undefined, так как вызвана в глобальном окружении и у объекта window нет свойства list.
users.getList = getList;
users.getList(); // Вернет массив ['Abraham', 'James', 'John', 'Steven']
getList.call(users); // Так же вернет массив ['Abraham', 'James', 'John', 'Steven']

// Задача №2 и №3
const processors = {
    productsCount: 43,
    productsPrice: 100.71,
    getTotalAmount: function () {
        return (this.productsCount * this.productsPrice).toFixed(2);
    }
}

const graphicAdapters = {
    productsCount: 7,
    productsPrice: 321.10,
    getTotalAmount: processors.getTotalAmount
}

// Задача №4
let sizes = { width: 5, height: 10 };
getSquare = function () { return this.width * this.height; }

getSquare.call(sizes);

// Задача №5
let numbers = [4, 12, 0, 10, -2, 4];
Math.min.apply(null, numbers);

// Задача №6
const element = {
    height: '15px',
    marginTop: '5px',
    marginBottom: '5px',
    getFullHeight: function () {
        return parseInt(this.height, 10) + parseInt(this.marginTop, 10) + parseInt(this.marginBottom, 10);
    }
};

const block = {
    height: '5px',
    marginTop: '3px',
    marginBottom: '3px'
};

element.getFullHeight.call(block);

// Задача №7
const newElement = {
    height: 25,
    getHeight: function () { return this.height; }
};

let getElementHeight = newElement.getHeight.bind(newElement);

getElementHeight();

