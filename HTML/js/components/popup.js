
// pop up 
$('#popup-default').popup({
    pagecontainer: 'body',
    closebutton: true,
    escape: false
});



// Способ 1

// В коде который отвечает за отправку формы/запись данных, вставить строку которая будет вызывать функцию открытия поп-апа.

// эта строка вызывает её
// openPopup(); 

// сама функция
// function openPopup() {
//     $('#popup-default').popup('show');
// }


// Способ 2
// Тоже самое что способ 1, только проще в реализации.
// $('.subscription__form').on('submit', function(e) {
//     $('#popup-default').popup('show');
// });