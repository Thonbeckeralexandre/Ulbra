function calcular(){
    var numum = document.getElementById('none').value;
    var numdois = document.getElementById('ntwo').value;

    numum = parseFloat(numum);
    numdois = parseFloat(numdois);

    var select = document.getElementById('esc');
    var value = select.options[select.selectedIndex].value;
    
    switch(value){
        case '+':
            var soma = numum + numdois
            document.getElementById('result').innerHTML = 'O resultado é: '+ soma
        break

        case '-':
            var subt = numum - numdois
            document.getElementById('result').innerHTML = 'O resultado é: '+ subt
        break

        case '*':
            var mult = numum * numdois
            document.getElementById('result').innerHTML = 'O resultado é: '+ mult
        break

        case '/':
            var div = numum / numdois
            document.getElementById('result').innerHTML = 'O resultado é: '+ div
        break
    }
}   








