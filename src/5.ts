function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max) + 1;
}

function generateCode(): string {
  const length = getRandomInt(10);
  let code = '';

  for (let i = 0; i < length; i++) {
    code += String.fromCharCode(getRandomInt(97) + 97);
  }

  return code;
}
