// alert ('this is pow.js file');
function pow(x ,n) {
  var x, n, result = 1;
  x = prompt('Введите число "x":', '');
  n = prompt('Введите степень "n":', '');


for (var i = 0; i < n; i++) {
  n = +n;
  x = +x;
  result *=x;
  }


  if((n+"").indexOf(".") > 0 || (x+"").indexOf(".") > 0) {
          result = "Введите целое число!";
      } else if (isNaN(x) || isNaN(n)) {
          result = "Вы ввели не число!";
      } else if (x === 0 && n === 0) {
          result = 1;
      } else if (x === 0 && n > 0) {
          result = 0;
      } else if (n < 0) {
        x = +x;
        n = +n;
        for (var j = 0; j > n; j--) {
            result *= x;
      }
        result = 1 / result;
    }


      return result;
  }


  var calculate = pow();
  console.log('result =', calculate);
  alert('Результат : ' + calculate);
