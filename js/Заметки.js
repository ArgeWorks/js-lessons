// Если переменная не равна нулю И она является undefined (если переменная равна undefined то она преобразовывается в NaN, NaN преобразовывается в false, 
// а оператор if запинается на правде, значит нам нужно подставить ! к переменной, что-бы false стало true)
// undefined = NaN = false
function test(id) {
    //  if id=undefined (undefined = NaN = false, а нам нужно true, подставляем логический оператор НЕ !)
    //  (id !== 0 && !id) = (true && true)
    //  if id=10
    //  (id !== 0 && !id) = (true && false)
    if (id !== 0 && !id) console.log('if ' + id);
    else console.log('else ' + id);
}