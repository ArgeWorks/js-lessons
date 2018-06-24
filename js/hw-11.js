// ========== Задачи - Конструкторы ========== //
// 1)
function Car(brand, model, age) {
    this.brand = brand;
    this.model = model;
    this.age = age;
    // Метод для получения марки машины с большой буквы
    this.getBrand = () => this.brand.charAt(0).toUpperCase() + this.brand.substr(1);
    // Метод для получения модели
    this.getModel = () => this.model.toUpperCase();
    // Метод для получения даты производства
    this.getYearManufacture = () => new Date().getFullYear() - this.age;
    // Метод для получения полной информации
    this.getFullInfo = () => `Brand: ${this.getBrand()}, Model: ${this.getModel()}, Year manufacture: ${this.getYearManufacture()}.`;
}

let lexus = new Car('lexus', 'lfa', 9);


// 2) Немного не понял задачу, но вроде-бы все что нужно было сделать - сделал.
function SecureString(str) {
    let secureStr,
        isEncrypted = false;

    // Метод для зашифровки строки
    this.encrypt = () => {
        // Если строка уже зашифрована возвращаем ошибку
        if (isEncrypted) return new Error('String already encrypted!');

        secureStr = [];
        for (let char of str) {
            secureStr.push(char.charCodeAt(0));
        }

        isEncrypted = true;
        return secureStr = secureStr.join('.');
    }

    // Метод для расшифровки строки
    this.decrypt = () => {
        // Если строка не зашифрована возвращаем ошибку
        if (!isEncrypted) return new Error('String is not encrypted!');

        let tempStr = '';

        for (let char of secureStr.split('.')) {
            tempStr += String.fromCharCode(char);
        }

        isEncrypted = false;
        return secureStr = tempStr;
    };

    // Показать строку в текущем состоянии
    this.showString = () => secureStr;

    // Удалить данные
    this.deleteData = () => { secureStr = ''; isEncrypted = false;};

    // При инициализации класса зашифровываем строку 
    this.encrypt();
}

let secureText = new SecureString('Whats up, Doc ?');


// 3)
// ES5
function StringControlES5(str) {
    let string = str;
    // Методы для получения текущей строки
    this.getString = this.toString = () => string;
    // Метод для установки новой строки
    this.setNewString = (str) => string = str;
    // Методы для получения длины строки и преобразования к числу
    this.getStringLength = this.valueOf = () => string.length;
}

let text = new StringControlES5('Hello! I am a sad string :(');

// ES6
class StringControlES6 {
    constructor(str) {
        this.string = str;
    }

    setNewString(str) {
        this.string = str;
    }

    getString() {
        return this.string;
    }

    toString() {
        return this.getString();
    }

    getStringLength() {
        return this.string.length;
    }

    valueOf() {
        return this.getStringLength();
    }
}

let text2 = new StringControlES6('Hello! I am a sad string to :(');