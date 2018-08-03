; (function ($) {
    class Modal {
        constructor(element, options) {
            // Получаем элемент модального окна
            this.modal = element;

            // Устанавливаем стили для модального окна
            this.modal.css({
                "display": "block",
                "position": "fixed",
                "top": "50%",
                "left": "50%",
                "z-index": 1000,
                "opacity": 0,
                "margin-top": `-${this.modal.outerWidth() / 2}px`,
                "margin-left": `-${this.modal.outerHeight() / 2}px`,
            })

            // Дефолтные опции
            const defaultOptions = {
                closeClass: ".close-modal",
                overlayOpacity: 0.7,
                duration: 500,
                autoClose: false,
                autoCloseTime: 3000
            };

            //Получаем кастомные опции
            this.options = $.extend(defaultOptions, options);

            // Шаблон оверлея
            this.overlayTemplate = $("<div class='overlay'></div>").css({
                "display": "block",
                "position": "fixed",
                "top": 0,
                "left": 0,
                "width": "100%",
                "height": "100%",
                "z-index": 999,
                "opacity": 0,
                "background-color": `rgba(0, 0, 0, ${this.options.overlayOpacity})`
            });
        }

        init() {
            // Показываем модальное окно
            this.showModal()
                // Устанавливаем события
                .then(this.setEvents())
                // Запускаем таймер автозакрытия если включен
                .then(() => {
                    if (this.options.autoClose) this.timer = setTimeout(() => this.closeModal(), this.options.autoCloseTime);
                });
        }

        showModal() {
            return new Promise(resolve => {
                // Скрываем у body боковой скролл
                $("body").css({ "overflow-y": "hidden" });

                // Добавляем оверлей в разметку
                this.modal.before(this.overlayTemplate);

                // Показать overlay
                $(".overlay").animate({
                    "opacity": 1
                }, this.options.duration);

                // Показать модальное окно
                this.modal.animate({
                    "opacity": 1
                }, this.options.duration);
                
                // Успешно завершаем промис
                resolve();
            });
        }

        setEvents() {
            return new Promise(resolve => {
                // Следим за оверлеем
                $(".overlay").on("click", (e) => this.closeModal());
                // Следим за кнопкой закрытия
                $(this.options.closeClass).on("click", (e) => this.closeModal());
                // Успешно завершаем промис
                resolve();
            });
        }

        closeModal() {
            // Очищаем таймер автозакрытия
            clearTimeout(this.timer);
            
            // Возвращаем body боковой скролл
            $("body").css({ "overflow-y": "auto" });

            // Удаляем overlay
            $(".overlay").animate({ 
                "opacity": 0 
            }, this.options.duration, () => $(".overlay").remove());

            // Скрываем модальное окно
            this.modal.animate({
                "opacity": 0
            }, this.options.duration, () => this.modal.css({ "display": "none" }));

            // Удаляем события
            this.clearEvents();
        }

        clearEvents() {
            $(".overlay").off("click");
            $(this.options.closeClass).off("click");
        }
    }

    $.fn.easyModal = function (options) {
        new Modal(this, options).init();
    }
})(jQuery);
