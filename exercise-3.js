const students = ['Paul', 'George', 'Lucas']; // dichiarare la costante tramite un array

function addStudent(student) {
  // ...si possono aggiungere nuovi elementi atraverso i metodi: pop(), push(), shift(), unshift().
  students.push('Marco')
}

addStudent('Marco');
console.log(students);
/* Si possono aggiungere elementi all array perche anche se fa parte da una costante la constante rimane sempre la stessa nel nostro caso un array
ma i oggryi al interno del array possono essere modificati perche non cambiano la natura di essa ma solo dei elementi al interno*/