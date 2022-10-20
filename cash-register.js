function checkCashRegister(price, cash, cid) {
    // calcular quanto é o troco
    let change = parseFloat((cash - price).toFixed(2));
    
    // calcular quanto tem em caixa
    let cidTotal = parseFloat(cid.reduce((acc, arr) => (acc + arr[1]), 0).toFixed(2));
  
    // descobrir quantas moedas/notas de cada tem em caixa 
    const currencyValue = {
      'PENNY': 0.01,
      'NICKEL': 0.05,
      'DIME': 0.1,
      'QUARTER': 0.25,
      'ONE': 1,
      'FIVE': 5,
      'TEN': 10,
      'TWENTY': 20,
      'ONE HUNDRED': 100
    }
     
    let amount = cid.map(arr => Math.round(arr[1]/currencyValue[arr[0]])).reverse();
   
   //declarar variavel que vai retornar
    let response = {
      status: '',
      change: []
    }
  
    if (cidTotal == change){
      response.status = 'CLOSED';
      response.change = cid;
      return response;
    } else if (change > cidTotal){
      response.status = 'INSUFFICIENT_FUNDS'
      return response;
    } 
    
    //calcular como o troco deve ser dado (notas/moedas), somente se necessário
    let amountToGive = [...cid].reverse()
    .map((arr, index) => {
      let currentValue = currencyValue[arr[0]];
      
      if (change > currentValue) {
        let withdraw = Math.trunc(change/currentValue);
  
        if (withdraw > amount[index]) {
          withdraw = amount[index];
        }     
        change = parseFloat((change - (withdraw*currentValue)).toFixed(2));
  
        return ([arr[0], withdraw*currentValue]);
      }   
    })
    .filter(arr => arr); 
    
    //se ainda tiver troco
      if(change){
        response.status = 'INSUFFICIENT_FUNDS';
        return response;
      }
  
    response.status = 'OPEN';
    response.change = amountToGive;
    return response;
  }