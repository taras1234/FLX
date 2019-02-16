const data = [
  {
    "_id": "5b5e3168c6bf40f2c1235cd6",
    "index": 0,
    "age": 39,
    "eyeColor": "green",
    "name": "Stein",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e3168e328c0d72e4f27d8",
    "index": 1,
    "age": 38,
    "eyeColor": "blue",
    "name": "Cortez",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5b5e3168cc79132b631c666a",
    "index": 2,
    "age": 2,
    "eyeColor": "blue",
    "name": "Suzette",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e31682093adcc6cd0dde5",
    "index": 3,
    "age": 19,
    "eyeColor": "green",
    "name": "George",
    "favoriteFruit": "banana"
  }
];

 const findTypes = function(){
  let arr = [];
  for(let i = 0; i < arguments.length;i++){
   let type = typeof arguments[i];
   arr.push(type);
  }
  return arr;
};

console.log(findTypes(null, 5, 'hello'));

const executeforEach = function(arr,func){
  let res = [];
  for(let i = 0;i<arr.length;i++){
    res.push(func(arr[i]));
  }
  return res;
};

 executeforEach([1,2,3], function(el) {
 console.log(el) 
});

const mapArray = function (arr,func){
  return executeforEach(arr,func)
};

console.log(mapArray([2, 5, 8], function(el) {
 return el + 3 
}));

const filterArray = function(arr,func){
  let res = [];
  const filter = executeforEach(arr,func);
  for(let i = 0; i < filter.length;i++){
    if(filter[i]){
      res.push(arr[i]);
    }
  }
  return res;
};

console.log(filterArray([2, 5, 8], function(el) {
 return el > 3 
}));

const getAmountOfAdultPeople = function(arr){
return filterArray(arr,function(el){
  return el.age > 18;
}).length;
};

console.log(getAmountOfAdultPeople(data));

const getGreenAdultBananaLovers = function(arr){
  let filter = filterArray(arr,function(el){
    return el.age > 18 && el.favoriteFruit === 'banana' && el.eyeColor === 'green'
  });
  return mapArray(filter,function(el){
    return el.name;
  });
};

console.log(getGreenAdultBananaLovers(data));

const keys = function(obj){
  let arr = [];
  for(let key in obj){
    if(obj.hasOwnProperty(key)){
    arr.push(key);
    }
  }
  return arr;
};

console.log(keys({keyOne: 1, keyTwo: 2, keyThree: 3}));

const values = function(obj){
  let arr = [];
  for(let key in obj){
    if(obj.hasOwnProperty(key)){
      arr.push(obj[key]);
    }
  }
  return arr;
};

console.log(values({keyOne: 1, keyTwo: 2, keyThree: 3}));

const showFormattedDate = function(date){
  return `Date:${date.getDate()} of ${date.toLocaleString('en-US', {month: 'short'} )}, ${date.getFullYear()}`
};

console.log(showFormattedDate(new Date('2019-01-27T01:10:00')));

const isEvenYear = function(date){
  return date.getFullYear() % 2 === 0;
};

console.log(isEvenYear(new Date('2019-01-27T01:10:00')));

const isEvenMonth = function(date){
  return (date.getMonth()+1) % 2 === 0; 
};

console.log(isEvenMonth(new Date('2019-02-27T01:10:00')));

