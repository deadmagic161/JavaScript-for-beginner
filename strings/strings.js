var name; // Объявили переменную, в которой будет храниться имя.

name = 'Dasha'; // Поместили в нашу переменную значение 'Dariya'.

var firstLetter = name[0]; // Чтобы обратиться к символу строки, нужно указать его порядковое число в [].
// Порядок начинается с нуля.

var lastname = 'Pushkarskaya'; // Объявили переменную lastname и присвоели ей сразу значение 'Pushkarskaya'.

var fullname = name + lastname; // Объявили переменную fullname и сложили строки. Сложение строк называется –
// конкатенация.

// Мы получим в результате строку 'DPushkarskaya', без пробела.

fullname = name + '. ' + lastname; // Перед переменной lastname добавим пробел (' ').

// Строки можно конкатенирировать при помощи +=.

name += '. ';
name += lastname;

// Используй console.log, чтобы проверить результат.

console.log(name);
