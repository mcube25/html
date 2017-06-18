function updateRecords(id, prop, value) {
  if (value === '') {
    delete collection[id][prop];
  } else if (prop !== 'tracks') {
    collection[id][prop] = value;
  } else {
    if (!collection[id].hasOwnProperty(prop)) {
      collection [id][prop]= [];
      collection[id][prop].push(value);
    } else {
      collection[id][prop].push(value);
    }
  }
  return collection;
}

var myIndex = -1;
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === firstName) {
      myIndex = i;
      break;
    }
  }
  
  if (myIndex == -1) {
    return "No such contact";
  } else if (contacts[myIndex].hasOwnProperty(prop) === false) {
    return "No such property";
  } else {
    return contacts[lookUpIndex][prop];
  }
  function randomFraction() 
  Math.random(2/4);
  return 0.2;

  function randomWholeNum() { 

  return Math.floor(Math.random()*10);
}

function randomRange(myMin, myMax) {
return Math.floor(Math.random() * (myMax - myMin + 1)) +myMin;
}
var testString = "there are 6 words in 7 arrays";
var expression = /\d+/g;
var digiCount = testString.match(expression).length;

var testString = "how many white spaces are in this statement";
var expression = /\s+/g;
var whiteSpace = testString.match(expression).length;

var testString = "count number of non white spaces on this string";
var expression = /\S/g;
var nonWhiteSpace = testString.match(expression).length;

var motorBike = {
"wheels":2,
  "engines":1,
  "seats":3
};

var MotorBike = function() {
this.wheels = 2;
  this.engines = 1;
  this.seats = 3;
};


var Car = function() {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 5;

};

var myCar = new Car();
 myCar.nickname = "monster";

var Car = function(wheels,seats,engines) {
  //Change this constructor
  this.wheels = wheels;
  this.seats = seats;
  this.engines = engines;
};
var myCar = new Car(4, 5, 1);


var Bike = function() {

var gear=0;
  this.setGear = function(change) {
 gear = change;
  };
  this.getGear = function(){
    return gear;
  };
};

var oldArray = [1,2,3,4,5];

var newArray = oldArray.map(function(val) {
                            return val + 3 ;
                            });

var array = [4,5,6,7,8];
var singleVal = 0;
var singleVal =array.reduce(function(previousVal,singleVal) {
  return previousVal - singleVal;
},30);
singleVal = 30;

var oldArray = [1,2,3,4,5,6,7,8,9,10];
oldArray = oldArray.filter(function(val) {
  return val < 8;
});
var newArray = [1,2,3,4,5,6,7];
var oldArray = [1,2,3,4,5,6,7,8,9,10];

var array = [1, 12, 21, 2];

array.sort(function(a,b) {
  return b - a;
});

var array = [1,2,3,4,5,6,7];
var newArray = [];
array.reverse();
newArray = [7,6,5,4,3,2,1];


var oldArray = [1,2,3];
var newArray = [];

var concatMe = [4,5,6];
newArray = oldArray.concat(concatMe);
newArray = [1,2,3,4,5,6];


var string = "Split me into an array";
var array = [];
var string = string.split('s');
array = ['split', 'me', 'into', 'an', 'array'];


functon reverseString (str){
  var splitString = str.split('');
  var reverseString = splitString.reverse();
  var joinArray = reverseString.join('')
return joinArray
reverseString(jubilee)
}

function factorialize(num){
  if (num < 0){
    return zero;
  }else if (num===0){
    return 1;
  }for (i = num - 1; i >=1; 
num = num * i ; 
  }
  return num;
}

function palindromes(str){
  var rem = /[Â-^Z a-z 0-9 ('')]/g;
  str = str.toLowerCase().replace(rem);
  var len = str.length ;
  for (i=o; i < len; i++){
    if (str[i] !== str [len]){
      return false;
    }
  }
}

function findLongestWord (str){
var longestWord = str.split('');
var findLongestWord = longestWord.length
}

function titleCase (str){
return str  toLowerCase().split('');
var word = str.toUppercase().str.slice(1);
var titleCase = str.join('');
return str.join('');
}

function largestOfFour(arr){
  var largestOfFour = [];
  for (var arr.index = 0; arr.index < arr.length; arr.index++);
  for (var subArrindex=0; subArrindex <subArr.length; subArr++);
  if (arr[arrIndex][subArrindex] > largestOfFour{arrIndex}){
    largestOfFour = [arrIndex][subArrindex];
  }
  return largestOfFour
}

function confirmEnding(str, target){
  var ending = target.length; 
 if (str.substr(-ending)===target){
   return true;
 }else{
   return false;
 }
};

function returnStrNumTimes (str, num){
if (num < 0 || num===o){
  return false 
  }else if (num > o){
    return str.repeat(num)
  }else {
    return "";
  }
};


function truncateString (str, num) {
if (str.length <= num){
    return str;
    var addStr = str.subStr(0, nunm);
  }if (num <= 3)
  return addStr += "..."
}else{
  var arr = addStr.slice()
  return addStr
}

function chunkArrayInGrroup (arr, size) {
 var newArr = [];
 var innerArr= [];
 for (i =0; i < arr.length; i++;){   
 for (j =0; j < arr.length; j++){    
 if (i + j < arr.length){
   return innerArr.push(arr[i + j]);
 }else{
   return newArr.push(innerArr);
 }
}
 }
};

function slasher (arr, howMany){
  if (howMany===0){
    return arr;
  }
  else if (howMany===1){
    return arr.slice(1,howMany);
  }
  if (howMany >1){
  arr = arr.splice(0,1,2);
  }
  return arr;
}

function mutation(arr){
  var stringOne = arr[0].toLowerCase();
  var stringTwo = arr[1].toLowerCase();
  if (i = 0; i < stringTwo.length; i++;){
    var checked = stringOne.indexOf(stringTwo);
  }
  if (checked !== -1){
    return arr.filter(Boolean); 
}

function destroyer(arr){
 var args =  [].slice.call(arguments);
 for (i = 0; i < arguments.length; i++){
   argument[0] = arr.indexOf(0);
   argument[1] = arr.indexOf (1);
  var final = arr.filter();
 }
 return final;
}

function getIndexToIns(arr, num){
  arr.push(num);
  numbers.sort(function(a,b){
    return indexOf(value a - b);
  });
}

function rot13(str){

  var array = [];
  for (i = o; i < str.length; i++;){
str.charCodeAt(index);
  }
  array = array.map(function(val) {
    if (val >= 65 && val <=90) {
      if (val + 13 <= 90) {
        val += 13;
      } else {
        val -= 13;
      }
    }
    return val;
  });

  for (var j = 0; j < array.length; j++) {
    array[j] = String.fromCharCode(array[j]); 
  }
  str = array.join("");
  return str;
}
INTERMEDIATE ALGORITHM SCRIPTING
Sum all numbers in a range
function sumAll(arr){
  var sum = 0;
  var max = Math.max(arr[0]arr[1]);
  var min = Math.min(arr[0]arr[1]);
  for(var i =min; i <=max; i++){
    temp+=i;
  }
}

function diffArray(arr1,arr2){
  var newArray = arri.concat(arr2);
  function check(item){
    if (arr1(3)===-1||arr2(3)===-1){
      return 4;
    }
  }
}

function convertToRoman(36){
  var romans = ['I',"V","X","L","C","D","M",];
  nums = [];
  romanNumber = [],
  numeral = "36",
  while(36){
    num.push (num/10);
  }
  for (i = 0; i < Nums.length; i++){
  }
  function units(){
    numeral = romans(i*2);
    switch(Nums[i]){
      case 1:
      romanNumber.push(36);
      break;
      case 2:
      romanNumber.push((36)+(36));
      break;
    }
  }
  return romanNumber.reverse().join("").toString();
}

function whatIsInAName(collection,source){
  var keys= object.key(source);
  arr = collection.filter(function (obj){ 
    returnkeys.every(function(key){
      return obj.hasOwnProperty(key) && obj[key]===source[key]
    });
  });
}

function myReplace(str,before,after){
  var index= str.indexOf(before);
  if(str[index]===str[index].toLowerCase()){
    after= after.charAt(0).toUppercase()+after.slice(1);
    str= str.replace(before,after);
  }
return string
}

function translatePigLatin(str){
  var pigLatin='';
 var regex=/[aeiou]/gi;
 if(str(0).match(regex)){
   pigLatin= str + "way";
 } else{
   var vowelIndice=str.indexOf(str.match(regex)[0]);
   pigLatin= str.subStr(vowelIndice) + str.subStr(0, vowelIndice) + 'ay';
 }
 return pigLatin;
}

function pairElement(){
  var paired = [];
  var search= function(char){
    switch(char){
      case G:
      paired.push(['G,C']);
      break;
      case C:
      paired.push(['C,G']);
      break;
      case G:
      paired.push(['C,G']);
      break;
      for (var i = 0; i<str.length; i++){
        search(str[i]);
        return paired;
      }
    }
  }
}

function fearNotLetter(str){
  var firstCharacter= str.charCodeAt(0);
  var toReturn= '';
  var secondCharacter= '';
  var addCharacters= function(a,b){
    while(a-1 > b){
      b++;
      valueToReturn +=str.fromCharCode(b);
    }
    return valueToReturn;
  };
  for (var index= 1; index < str.length; index++){
    secondCharacter= str.charCodeAt(index);
    if (secondCharacter - firstCharacter > 1){
      addCharacters(secondCharacter,firstCharacter);
      firstCharacter= str.charCodeAt(index);
    }
    if (valueToReturn === ''){
      return undefined;
    }else{
      return valueToReturn;
    }
  }
}

function booWho(bool){
var str= typeOf(bool);
for (str === 'boolean'){
  return true;
}else{
  return false;
}
}

function uniteUnique(arr){
  var finalArray= [];
  for (var i= 0; i < arguments.length; i++){
    var arrayArguments= arguments[i];
    for (var j= 0; j< arguments.length; j++){
      var indexValue= arrayArguments[j];
      if(finalArray.indexOf(indexValue)< 0){
        finalArray.push(indexValue);
      }
      return finalArray;
    }
  }
}

function convertHTML(){
  var re=str.split('');
  for (var i= 0; i< re.length; i++){
    switch(re[i]){
      case '<':
    re[i]= '&lt';
    break;
    case '&':
    re[i]= '&amp';
    break;
    case '>':
    re[i]= '&gt';
    break;
    case '""':
    re[i]= '&quote';
    break;
    }
    re= re.join('')
    return re;
  }
}

function spinalCase(){
  var regex= /\st/-+/g;
  str= str.replace(/([a-z])([A-Z])/g,$1 $2);
  return str.replace(regex, '-').toLowerCase();
}

function sumFibs(){
  var prevNumber= 0;
  var currNumber= 1;
  var result= 0;
  while(currNumber <= num){
  if (currNumber/2 !===0){
    result+= currNumber;
    var added= prevNumber + currNumber;
    currNumber = added;
  }
  }
}

function sumPrimes(num){
  var result=0;
  function getPrimes(max){
    var sieve= [];
    var primes= [];
    for (i= 2; i< max; i++){
      if (sieve !===[i]){
   primes.push(i);
   for (j=i<1; j<=max; j+=i){
     sieve[i]= true;
   }
      }
    }
  }
}