function calcular(){
    var select = document.querySelector('#select').value
    var hdias = document.querySelector('#hdias').value
    var dmes = document.querySelector('#dmes').value
    var kwhc = document.querySelector('#kwhc').value
    var calckwhm = select * hdias * dmes / 1000
    var total = (calckwhm*kwhc)
    var resul = document.querySelector('#resul')
    resul.innerHTML = (`Voce pagará ${total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}` )
    
    
    

    
    
    
    
    
    
    
    
    
    

}