// Класс для общения с сервером (Ajax)
class Http {
    constructor() {
        this.http = new XMLHttpRequest();
    }

    // Запрос данных с сервера
    get(url, callback) {
        this.http.addEventListener('load', () => {
            if (this.http.status === 200) {
                callback(null, JSON.parse(this.http.responseText));
            } else {
                callback(`Error: ${this.http.status}`, null);
            }
        });

        this.http.open("GET", url);
        this.http.send();
    }

    // Передача данных на сервер
    post(url, data, callback) {
        if (!data) return callback('Error: data cant be empty!');

        this.http.addEventListener('load', () => {
            if (this.http.status === 200 || this.http.status === 201) {
                callback(null, this.http.responseText);
            } else {
                callback(`Error: ${this.http.status}`, null);
            }
        });

        this.http.open("POST", url);
        this.http.setRequestHeader("Content-type", "application/json");
        this.http.send(JSON.stringify(data));
    }

    // Обновление данных на сервере
    put(url, data, callback) {
        if (!data) return callback('Error: data cant be empty!');

        this.http.addEventListener('load', () => {
            if (this.http.status === 200 || this.http.status === 201) {
                callback(null, this.http.responseText);
            } else {
                callback(`Error: ${this.http.status}`, null);
            }
        });

        this.http.open("PUT", url);
        this.http.setRequestHeader("Content-type", "application/json");
        this.http.send(JSON.stringify(data));
    }

    // Удаление данных с сервера
    delete(url, callback) {
        this.http.addEventListener('load', () => {
            if (this.http.status === 200 || this.http.status === 201) {
                callback(null, "Deleted!");
            } else {
                callback(`Error: ${this.http.status}`, null);
            }
        });

        this.http.open("DELETE", url);
        this.http.send();
    }
}
