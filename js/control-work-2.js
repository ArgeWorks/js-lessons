const Game = (function () {
    // Конструктор вопросов
    class Question {
        constructor(question, answers, answer) {
            this.question = question;
            this.answers = answers;
            this.correctAnswer = answer;
        }
    }

    // Массив вопросов
    let questionsArray = [
        new Question('Как звали ученого из фильма «Назад в будущее» ?', ['Эмметт Браун', 'Рик Санчез', 'Доктор Зло'], '0'),
        new Question('Какую модель терминатора играл Арнольд Шварценеггер ?', ['Т-1000', 'ТОК-715', 'Т-800'], '2'),
        new Question('Как произносится заклятие левитации в «Гарри Поттере» ?', ['Люмос!', 'Вингардиум Левиоса!', 'Флиппендо!!!'], '1')
    ];

    let gameStarted,
        gamePoints = 0;

    // Запуск игры
    function start() {
        // Ставим флаг что игра запущена
        gameStarted = true;

        // Основной цикл
        while (gameStarted) {
            // Перебераем вопросы в массиве
            for (let item of questionsArray) {
                // Выводим вопрос и получаем ответ
                let answer = showQuestion(item); 

                // Проверяем результат
                if (answer === item.correctAnswer) {
                    // Если пользователь дал правильный ответ
                    displayInfo('correct');
                } else if (answer === 'stop' || answer === 'стоп' || answer === null) {
                    // Если пользователь остановил игру
                    gameStarted = false;
                    displayInfo('stop');
                    break;
                }  else {
                    // Если пользователь проиграл
                    gamePoints = 0;
                    displayInfo('game over');
                    break;
                }
            }

            // Если набрано максимальное количество очков - останавливаем игру иобъявляем победу!
            if (gamePoints === questionsArray.length) {
                gameStarted = false;
                displayInfo('win');
            }
        }

        return 'Сыграй в меня еще! :)';
    }
    
    // Вывод вопроса и получение ответа
    function showQuestion(item) {
        // Выводим вопрос
        console.log(item.question);
        // Выводим варианты ответов
        item.answers.forEach((answer, i) => console.log(`${i}: ${answer}`));
        // Возвращаем ответ
        return prompt('Введите номер ответа:', '');
    }

    // Вывод информации в консоль
    function displayInfo(status) {
        switch (status) {
            case 'correct':
                console.log('И это правильный ответ!');
                console.log(`Вы ответили правильно на ${++gamePoints} из ${questionsArray.length} вопросов.`);
                break;
            case 'win':
                console.log('Вы выиграли свой первый Миллион! Поздравляем!');
                break;
            case 'stop':
                console.log('Игра остановленна.');
                break;
            case 'game over':
                console.log('Не повезло! Спробуй ще!');
                break;
            default:
                console.log('Что-то пошло не так...');
                break;
        }
        console.log('------------------------------');
    }

    // Возвращаем метод для запуска игры
    return {
        start
    }

}());

// Запускаем игру в ручную, так как есть баг в хроме - промт уже отображается а текста в консоле нету.
console.log('Что-бы начать игру введите - Game.start()');






