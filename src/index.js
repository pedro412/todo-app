import './styles.css';
const input = document.getElementById('search');
const button = document.getElementById('addButton');
const htmlList = document.getElementById('lista');
const list = ['eliminar', 'copiar', 'pegar'];

button.addEventListener('click', () => {
  const valor = input.value;
  if (valor === '') {
    return;
  }
  list.push(valor);
  pintarLista();
  input.value = '';
});

window.removeItem = (index) => {
  console.log(index);
  list.splice(index, 1);
  pintarLista();
};

const pintarLista = () => {
  htmlList.innerHTML = '';
  list.forEach((item, index) => {
    htmlList.innerHTML += `<li class="list-item grey-border hoverable">
        <input id="item" type="checkbox" />
        <label for="item" class="hoverable"
          >${item}</label
        >
        <span onclick="removeItem(${index})">🗑️</span>
      </li>`;
  });
};

pintarLista();
