//path module

const path=require('path');
console.log(path.basename(__filename));
console.log(path.basename(__filename , '.js'));
console.log(path.dirname(__filename));
console.log(path.extname(__filename));
console.log(path.join('/search','label','course/python','oop'));

console.log(path.parse(__filename))