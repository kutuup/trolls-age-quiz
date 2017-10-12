console.log('Reverse the numbers in the childs age to get the trolls age.\nLast year the troll was twice the age of the child.\nWhat age is the child?');

for (childAge = 10; childAge < 1000; ++childAge) {
  const trollAge = parseInt(childAge.toString().split('').reverse().join(''), 10);
  if (childAge - 1 === (trollAge -1) / 2) {
    console.log(`Childs age = ${childAge} and trolls age = ${trollAge}`);
    return;
  }
}
