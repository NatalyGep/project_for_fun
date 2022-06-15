window.addEventListener('DOMContentLoaded', function() { // убеждаемся, что все элементы загружены в дерево
document.querySelector('#burger').addEventListener('click', function() { // ищем по id выведем элементы и добавляем событие click
    document.querySelector('#menu').classList.toggle('is-active');// ищем меню по id  и методом toggle добавляем класс is-active
});

document.querySelectorAll('.text').forEach(function(el) { //добавляем событие на текст по классу .text, делаем иттерацию forEach и по ней добавляем функцию el 
    el.addEventListener('click', function(event) { // по аргументу el добавляем  событие click и по клику выполняем функцию с аргуметном event - произвольное название
        event.target.classList.toggle('alert'); // свойство target содержит в себе DOM элемент в когором это событие произошло - произведен клик и активируем стиль alert
    });
});
});
