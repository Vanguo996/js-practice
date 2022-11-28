//querySelector选择的是静态集合，而getXXXbyXXX是动态集合
//只要经过一次查找，使用get
//如果需要多级查找则选择querySelector
// const notesEl = document.querySelector('.notes');
// const editBtn = document.querySelector('.edit');
// const deleteBtn = document.querySelector('.delete');
// const main = notesEl.querySelector('.main');
// const textArea = notesEl.querySelector('textarea');
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
            <div class="main hidden"></div>
            <textarea></textarea>
        </div>
    `;


    const editBtn = note.querySelector('.edit');
    const deleteBtn = note.querySelector('.delete');
    const main = note.querySelector('.main');
    const textArea = note.querySelector('textarea');

    textArea.value = text;

    editBtn.addEventListener('click', () => {
        //消除hidden类
        main.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    });

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
    const notesText = document.querySelectorAll('.textarea');
    const notes = [];

    notesText.forEach(note => notes.push(note.value));

    localStorage.setItem('notes',JSON.stringify(notes));
};

