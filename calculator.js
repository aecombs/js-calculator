const exampleAdditionInput = {
  num1: 3,
  num2: 5,
  operation: 'add',
}

const calculate = function (inputHash) {
  leftOperator = inputHash.num1;
  rightOperator = inputHash.num2;
  operand = inputHash.operation;

  if (typeof(leftOperator) !== 'number' || typeof(rightOperator) !== 'number') {
    return('Sorry, your operators are not valid!');
  }

  switch (operand) {
    case 'add':
      return (leftOperator + rightOperator);
    case '+':
      return (leftOperator + rightOperator);
    case 'subtract':
      return (leftOperator - rightOperator);
    case '-':
      return (leftOperator - rightOperator);
    case 'multiply':
      return (leftOperator * rightOperator);
    case '*':
      return (leftOperator * rightOperator);
    case 'divide':
      return (leftOperator/rightOperator);
    case '/':
      return (leftOperator/rightOperator);
    default:
      return ('That wasn\'t a valid operand!');
  }
}

const badOperand = {
  num1: 1,
  num2: 2,
  operation: 'foo'
};

const badNum = {
  num1: 'haha not a number!',
  num2: 2,
  operation: 'foo'
};


console.log(calculate(exampleAdditionInput));
console.log(calculate(badOperand));
console.log(calculate(badNum));