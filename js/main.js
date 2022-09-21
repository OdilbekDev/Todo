let elForm = document.querySelector('.form')
let elInput = document.querySelector('.input')
let elList = document.querySelector('.list')
let elClear = document.querySelector('.clear')
const task = []

elForm.addEventListener('submit', (e) => {
    e.preventDefault()
    if(window.localStorage.getItem('arr')) {
        let local_arr = JSON.parse(window.localStorage.getItem('arr'))
        local_arr.push(elInput.value)
        window.localStorage.setItem('arr', JSON.stringify(local_arr))
        
        elInput.value = ''
        mapper()
    }else{
        task.push(elInput.value)
        window.localStorage.setItem('arr', JSON.stringify(task))
        mapper()
        elInput.value = ''
    }
    
})


function mapper() {
    elList.innerHTML = ""
    let Local_Papper = JSON.parse(window.localStorage.getItem('arr'))
    Local_Papper.map((e,i) =>{
        let newLi = document.createElement('li')
        let wrapper = document.createElement('div')
        let delete_btn = document.createElement('button')
        let edit_btn = document.createElement('button')

        edit_btn.id = i
        edit_btn.innerHTML = `<button class="btn btn-success edit_btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg>
      </button>`
        delete_btn.id = i
        delete_btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
      </svg>`
        // delete_btn.textContent = 'DELETE'
        delete_btn.classList.add('delete_btn', 'btn', 'btn-danger')
        wrapper.classList.add('wrapper')
        newLi.textContent = e
        wrapper.appendChild(newLi)
        wrapper.appendChild(edit_btn)
        wrapper.appendChild(delete_btn)
        elList.appendChild(wrapper)
    })
}

if(window.localStorage.getItem('arr')){
    mapper()
}


elClear.addEventListener('click', () =>{
    window.localStorage.clear()
    mapper()
})


let elDelete = document.querySelectorAll('.delete_btn')

elDelete.forEach((e, i) => {
    e.addEventListener('click', () => {
        let arr = JSON.parse(window.localStorage.getItem('arr'))


        let newArr = arr.filter((a) => a != arr[e.id])
        // console.log(newArr.includes(arr[e.id]));
        localStorage.setItem('arr', JSON.stringify(newArr))
        mapper()
        // window.localStorage.removeItem()
    })
})