function jediName(firstName, lastName){
  return lastName.slice(0,3) + firstName.slice(0,2)
}
console.log(jediName('Christy', 'Liner'))

function beyond(num){
  if(num === Number.NEGATIVE_INFINITY || num === Number.POSITIVE_INFINITY){
    return 'And beyond!';
  } else if (Number.isFinite(num) && num > 0){
    return 'To infinity';
  } else if (Number.isFinite(num) && num < 0){
    return 'To negative infinity';
  } else {
    return 'Staying home';
  }

}
console.log(beyond(9*10**99999999999999999999999))
