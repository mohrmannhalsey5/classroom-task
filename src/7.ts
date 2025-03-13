const generateRandomTsCode = () => {
  const possibleCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < 10; i++) {
    code += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
  }
  return code;
}
