const Game = (function () {
    class Question {
        constructor(question, answers, answer) {
            this.question = question;
            this.answers = answers;
            this.correctAnswer = answer;
        }
    }

    let questions = [
        new Question('Как звали ученого из фильма «Назад в будущее» ?', ['Эмметт Браун', 'Рик Санчез', 'Доктор Зло'], '0'),
        new Question('Какую модель терминатора играл Арнольд Шварценеггер ?', ['Т-1000', 'ТОК-715', 'Т-800'], '2'),
        new Question('Как произносится заклятие левитации в «Гарри Поттере» ?', ['Люмос!', 'Вингардиум Левиоса!', 'Флиппендо!!!'], '1')
    ];

    let gameStarted = true,
        gamePoints = 0;

    // Запуск игры
    function start() {
        while (gameStarted) {
            // Перебераем вопросы в массиве
            for (let item of questions) {
                // Выводим вопрос и получаем ответ.
                let result = showQuestion(item); 

                // Проверяем результат.
                if (result === item.correctAnswer) {
                    // Если пользователь дал правильный ответ
                    displayInfo('correct')
                } else if (result === 'stop' || result === 'стоп' || result === null) {
                    // Если пользователь остановил игру
                    displayInfo('stop')
                    break;
                }  else {
                    // Если пользователь проиграл
                    displayInfo()
                    break;
                }
            }

            // Если набрано максимальное количество очков - объявляем победу!
            if (gamePoints === questions.length) displayInfo('win');
        }
    }
    
    // Вывод вопроса и получение ответа
    function showQuestion(item) {
        console.log(item.question);
        item.answers.forEach((answer, i) => console.log(`${i} : ${answer}`));
        return prompt('Введите номер ответа:', '');
    }

    // Вывод информации в консоль
    function displayInfo(status) {
        switch (status) {
            case 'correct':
                console.log('И это правильный ответ!');
                console.log(`Вы ответили правильно на ${++gamePoints} из ${questions.length} вопросов.`);
                break;
            case 'win':
                console.log('Вы выиграли свой первый Миллион! Поздравляем!');
                gameStarted = false;
                break;
            case 'stop':
                console.log('Игра остановленна.');
                gameStarted = false;
                break;
            default:
                console.log('Не повезло! Спробуй ще!');
                break;
        }
        console.log('------------------------------');
    }

    return {
        start
    }

}());

// Запускаем игру
//Game.start();






