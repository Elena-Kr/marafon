function calc(a, b, operation) {    
    
  const isNotValid = (typeof a !== 'number' || typeof b !== 'number');
  
  if (isNotValid) {
      return String ('Error!');
  }
  switch (operation) {
      case 'sum':
          return a + b;
      case 'sub':
          return a - b;
      case 'mult':
          return a * b;
      case 'div':
          if (b === 0) {
              return String('b cannot be zero')
          }
          return a / b;
      default:
          return String('Unknown operation!');
  } 
}

console.log(calc(6, 1, 'div'));