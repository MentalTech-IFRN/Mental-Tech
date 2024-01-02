
let tesk = document.getElementById('tesk')
// adicionar tarefas diarias!

let div_lista_tarefas = document.getElementById('list_tarefas')
let bt_add = document.getElementById('img_add')
let bt_excluir = document.getElementById('img_excluir')

let new_tarefa = document.getElementById('tname')

let bt_concluir = document.getElementById('bt_ok')
 
let cont_tarefas = 0;

let adicionar = () => {
    cont_tarefas += 1;
    console.log(cont_tarefas)
    console.log('oi')

    let div = document.createElement('div')
    div.setAttribute('id', 'tesk');

    div.style.width = '90%';
    div.style.height = '40px';
    div.style.backgroundColor = 'lightgrey';
    div.style.borderRadius = '10px'
    div.style.display = 'flex';
    div.style.alignItems = 'center';
    div.style.marginTop = '10px';
    div.style.position = 'relative';

    let p = document.createElement('p')
    p.innerText = new_tarefa.value
    p.style.fontSize = '22px';
    p.style.paddingLeft = '15px';


    let button = document.createElement('button')
    button.setAttribute('id', 'bt_ok');

    button.style.position = 'absolute';
    button.style.right = '0px';
    button.style.width = '60px';
    button.style.height = '40px';
    button.style.border = '1px solid grey';
    button.style.backgroundColor = '#98dd99';
    button.style.borderRadius = '10px';

    button.innerText = 'OK';

    div.appendChild(p)
    div.appendChild(button)

    div_lista_tarefas.appendChild(div)

}


let apagar = () => {
    tesk = document.getElementById('tesk')
    div_lista_tarefas.removeChild(tesk)
    cont_tarefas--
}


bt_add.addEventListener('click', adicionar)
bt_excluir.addEventListener('click', apagar)

