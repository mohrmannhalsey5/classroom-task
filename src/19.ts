function isPalindrome(str: string): boolean {
  const reverseStr = str.split('').reverse().join('');
  return str === reverseStr;
}
