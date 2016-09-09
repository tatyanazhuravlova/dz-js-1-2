// alert ('this is part2.js file');
var arr=[];
var n = 5;

for (var i = 0; i < n; i++) {
  arr[i] = prompt( 'Введите имя', "" );
}

  var userName = prompt('Пожалуйста,введите свое имя!','');
  var result = false;

  for (var i = 0; i < n; i++) {
  if (userName === arr[i]) {
      alert(userName + ', вы успешно вошли!');
      result = true;
    }
}
  if (!result){
      alert("Ошибка, вход запрещен!");
    }
