function calcular(){
    var qtd = document.getElementById('qtdkwh').value;
    var vlr = document.getElementById('vlrunit').value;

    qtd = parseFloat(qtd);
    vlr = parseFloat(vlr);

    if(qtd>100 && qtd<=200){
        vlr = vlr * 1.25;
    }
    if(qtd>200){
        vlr = vlr * 1.5;
    }
    var result = qtd * vlr;
    document.getElementById('result').innerHTML = 'O valor a ser pago será: '+ result
}