const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;
const data = JSON.parse(jsonString);
console.log('data', data);
const list = data.list;

for (var key in list) {
  var item = list[key];
  console.log("name: " + item.name);
  console.log("age: " + item.age);
  console.log("prof: " + item.prof);
}
