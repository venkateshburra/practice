const addform=document.querySelector('.add');

const del=document.querySelectorAll('.delete');


const list=document.querySelector('.todos');

const search=document.querySelector('.search input');

const generatetemplate=(addtodo)=>{
let html=
    `<li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${addtodo}</span>
        <i class="delete">X</i>
    </li>`
    list.innerHTML+=html;
    
};

addform.addEventListener('submit',(e)=>{
    
    e.preventDefault();
    const addtodo=addform.add.value.trim();
    
    if(addtodo.length){
        generatetemplate(addtodo);
        addform.reset();
    }
})

    list.addEventListener('click',(e)=>{
        if(e.target.classList.contains('delete')){
            e.preventDefault();
        e.target.parentElement.remove();
        }

    });

    const filtertodos=(term)=>{
        Array.from(list.children)
        .filter((todo)=>!todo.textContent.includes(term))
        .forEach((todo)=>todo.classList.add('filterd'));

        Array.from(list.children)
        .filter((todo)=>todo.textContent.includes(term))
        .forEach((todo)=>todo.classList.remove('filterd'));

    };

    search.addEventListener('keyup',()=>{
        const term=search.value.trim();
        filtertodos(term);
    })


