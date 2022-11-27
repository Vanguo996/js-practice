//querySelector选择的是静态集合，而getXXXbyXXX是动态集合
//只要经过一次查找，使用get
//如果需要多级查找则选择querySelector
const notesEl = document.querySelector('.notes');
const editBtn = document.querySelector('.edit');
const deleteBtn = document.querySelector('.delete');

const main = notesEl.querySelector('.main');
const textArea = notesEl.querySelector('textarea');
const test = notesEl.querySelector('.test');

editBtn.addEventListener('click', () => {
    //消除hidden类
    main.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
});

textArea.addEventListener('input', (e) => {
    const { value } = e.target;
    // 将捕捉到的值赋予至前端
    main.innerHTML = marked.parse(value);
});
 