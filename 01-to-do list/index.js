
// Um aplicativo de lista de tarefas 
// Onde o usuário pode adicionar, editar e remover tarefas.

const tasks = [];

// adiciona a tarefa na lista
function addTask() {

  let input = document.getElementById('input').value;

  if (!input || Number.parseInt(input)) {

    alert('Por favor digite uma tarefa valida');
    return;

  } else {

    let task = { name: input };
    tasks.push(task);

    showTask();
    clearInput('input');

  }
}

// apaga um tarefa
function removeTask() {
  let index = Number(document.getElementById('del').value);

  if (index >= 0 && index < tasks.length) {
    tasks.splice(index, 1);
  } else {
    alert('Por favor digite uma tarefa valida para remover');
  }

  showTask();
  clearInput('del');
}

// atualizar uma tarefa
function updateTask() {
  let update = document.getElementById('update').value;
  let index = document.getElementById('index').value;

  if (!update || Number.parseInt(update)) {

    alert('Por favor digite uma tarefa valida');
    return;

  } else if (index >= 0 && index < tasks.length) {

    let newTask = { name: update };
    tasks[index] = newTask;

  } else {
    alert('Por favor digite uma tarefa valida para atualizar');
  }

  showTask();
  clearInput('update');
  clearInput('index');
}


// mostra as entradas do usuario 
function showTask() {

  let ol = document.getElementById('ol');
  ol.innerHTML = '';

  tasks.forEach((task, index) => {
    let li = document.createElement('li');
    li.textContent = `${index}  : ${task.name}`;
    ol.appendChild(li);
  });
}

// limpa o input depois de adicionar
function clearInput(input) {
  document.getElementById(input).value = '';
}


