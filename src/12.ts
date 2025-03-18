function getRandomInt(max: number): number {
  return Math.floor(Math.random() * Math.floor(max));
}

function generateRandomTsCode(): string {
  const lines = [];
  for (let i = 0; i < getRandomInt(5); i++) {
    lines.push(`const ${getRandomString()} = ${getRandomInt(10)};`);
  }
  return lines.join('\n');
}

function getRandomString(): string {
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  let str = '';
  for (let i = 0; i < getRandomInt(10); i++) {
    str += chars[getRandomInt(chars.length)];
  }
  return str;
}
