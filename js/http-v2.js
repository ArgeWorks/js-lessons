// Класс для общения с сервером (Ajax)
class Http {
    // Запрос данных с сервера
    get(url) {
        return new Promise((resolve, reject) => {
            this.http = new XMLHttpRequest();
            this.http.addEventListener('load', () => {
                if (this.http.status === 200) {
                    resolve({
                        error: null,
                        response: JSON.parse(this.http.responseText)
                    });
                } else {
                    reject({
                        error: `Error: ${this.http.status}`,
                        response: null
                    });
                }
            });

            this.http.open("GET", url);
            this.http.send();
        });
    }

    // Передача данных на сервер
    post(url, data) {
        return new Promise((resolve, reject) => {
            if (!data) reject({
                error: 'Error: data cant be empty!',
                response: null
            });

            this.http = new XMLHttpRequest();
            this.http.addEventListener('load', () => {
                if (this.http.status === 200 || this.http.status === 201) {
                    resolve({
                        error: null,
                        response: JSON.parse(this.http.responseText)
                    });
                } else {
                    reject({
                        error: `Error: ${this.http.status}`,
                        response: null
                    });
                }
            });

            this.http.open("POST", url);
            this.http.setRequestHeader("Content-type", "application/json");
            this.http.send(JSON.stringify(data));
        });
    }

    // Обновление данных на сервере
    put(url, data) {
        return new Promise((resolve, reject) => {
            if (!data) reject({
                error: 'Error: data cant be empty!',
                response: null
            });

            this.http = new XMLHttpRequest();
            this.http.addEventListener('load', () => {
                if (this.http.status === 200 || this.http.status === 201) {
                    resolve({
                        error: null,
                        response: JSON.parse(this.http.responseText)
                    });
                } else {
                    reject({
                        error: `Error: ${this.http.status}`,
                        response: null
                    });
                }
            });

            this.http.open("PUT", url);
            this.http.setRequestHeader("Content-type", "application/json");
            this.http.send(JSON.stringify(data));
        });
    }

    // Удаление данных с сервера
    delete(url) {
        return new Promise((resolve, reject) => {
            this.http = new XMLHttpRequest();
            this.http.addEventListener('load', () => {
                if (this.http.status === 200) {
                    resolve({
                        error: null,
                        response: "Deleted!"
                    });
                } else {
                    reject({
                        error: `Error: ${this.http.status}`,
                        response: null
                    });
                }
            });

            this.http.open("DELETE", url);
            this.http.send();
        });
    }
}