$(document).ready(function () {
  var currentFloor = 2; // переменная текущего этажа
  var floorPath = $(".home-image path"); // каждый этаж в свг
  var counterUp = $(".counter-up"); /* кнопка увеличения этажа */
  var counterDown = $(".counter-down"); /* кнопка уменьшения этажа */

  // функция при наведении мышью на этаж
  floorPath.on("mouseover", function () {
    floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
    currentFloor = $(this).attr("data-floor"); // получаем значение текущего этажа
    $(".counter").text(currentFloor); //записываем значение этажа в счётчик
  });

  counterUp.on("click", function () { // отслеживаем клик по кнопке вверх
    if (currentFloor < 18) { // проверяем значение этажа
      currentFloor++; // прибавляем 1 этаж
      usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGroupping: false }); // форматируем переменную с этажом, чтобы 01, а не 1
      $(".counter").text(usCurrentFloor); // //записываем значение этажа в счётчик
      floorPath.removeClass("current-floor"); //зудаляем активный класс
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечивем текущий этаж
    }
  });
  counterDown.on('click', function () {
    if(currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGroupping: false });
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  })
});