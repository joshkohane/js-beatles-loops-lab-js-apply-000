// add solution here
function theBeatlesPlay(musicians, instruments){
  let myArray = []
  for(let i = 0; i < musicians.length; i++) {
    myArray.push(musicians[i] + ' plays ' + instruments[i])
  }
  return myArray
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
  ];

function johnLennonFacts(lennonArray) {
    let newArray = []
    while(lennonArray.length > 0) {
      newArray.push(lennonArray[0] + '!!!')
      lennonArray.shift()
    }
    return newArray
  }
  
  function iLoveTheBeatles(number) {
    // if(number >= 15) {
    //   number = number - 15
    // }
    let i = 0
    let beatlesLove = []
    do {
      beatlesLove.push('I love the Beatles!')
      i++
    }
    while(i <= number || 15 < number);
    return beatlesLove
  }