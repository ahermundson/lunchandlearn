export const hoisting = () => {
  console.log(varDeclaration);
  var varDeclaration = 'ES5';

  console.log(letDeclaration);
  let letDeclaration = 'ES6';
};

export const test = () => {
  console.log('test');
};
