console.log('app');


//create
var todos = ['운동']
var todo = '게임';
todos.push(todo);
console.log(todos);


// read
todos.forEach(function(todo){

    console.log(todo);

});

//Update
var todos = ['운동', '게임'];
var updateTodo = '게임';
var updateIndex = todos.findIndex(function(todo) {
  return todo === updateTodo;
});
todos[updateIndex] = '공부';
console.log(todos);


//delete
var todos = ['운동', '공부', '목욕'];
var deleteTodo = '공부';
var deleteIndex = todos.findIndex(function(todo) {
  return todo === deleteTodo;
});
todos.splice(deleteIndex, 1);
console.log(todos);

var isMan = true;
if (isMan) {
    console.log('1');
}else {
    console.log('2');
}

//window.alert('1');
// var who = prompt('당신은 누구세요');


//var isDelete = confirm('정말 삭제하시겠습니까?');
//console.log(isDelete);

//function sum(a, b) {
 //   return a + b;

//}
//console.log(sum(1, 2));

