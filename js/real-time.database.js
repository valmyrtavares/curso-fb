let nameInput = document.getElementById('nameInput');
let ageInput = document.getElementById('ageInput');
let addButton = document.getElementById('addButton');

addButton.addEventListener('click', function () {
  create(nameInput.value, ageInput.value);
});

function create(name, age) {
  let data = {
    name: name,
    age: age,
  };
  console.log(firebase);

  const database = firebase.database();

  // Referência ao nó 'users'
  const usersRef = database.ref('users');

  // Adicione os dados ao nó 'users'
  return usersRef.push(data);
}
