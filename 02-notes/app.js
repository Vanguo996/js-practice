//querySelector选择的是静态集合，而getXXXbyXXX是动态集合
//只要经过一次查找，使用get

//如果需要多级查找则选择querySelector
const addBtn = document.getElementById('add');

const notes = JSON.parse(localStorage.getItem('notes'));

if (notes) {
   notes.forEach(note => {
        addNewNote(note);
   });
}

addBtn.addEventListener('click', () => {
    addNewNote();
});

function addNewNote(text = "") {
    console.log(text);
    const note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = `
        <div class="notes">
            <div class="tools">
                <button class="edit">
                    <i class="fas fa-edit"></i></button>
                <button class="delete">
                    <i class="fas fa-trash-alt"></i></button>
            </div>
            <div class="main ${text ? '': 'hidden'}"></div>
            <textarea class="${text ? 'hidden': ''}"></textarea>
        </div>
    `;
    

    const editBtn = note.querySelector('.edit');
    const deleteBtn = note.querySelector('.delete');
    const main = note.querySelector('.main');
    const textArea = note.querySelector('textarea');

    textArea.value = text;
    
    //修复第一次刷新页面 无法显示文本问题
    main.innerHTML = marked.parse(text);


    editBtn.addEventListener('click', () => {
        // 切换hidden
        main.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
        textArea.focus();
    }); 

    // 删除笔记本
    deleteBtn.addEventListener('click', () => {
        note.remove();
    });
    
    textArea.addEventListener('input', (e) => {
        const { value } = e.target;
        // 将捕捉到的值赋予至html
        main.innerHTML = marked.parse(value);
        updateLS()
    });
    

    document.body.appendChild(note)
}

function updateLS()  {
    const notesText = document.querySelectorAll('textarea');
    const notes = [];
    // 将输入的值存放在notes数组中，
    notesText.forEach(note => notes.push(note.value));

    localStorage.setItem('notes',JSON.stringify(notes));
};

