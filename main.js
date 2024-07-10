const text = document.getElementById('text')
const addButton = document.getElementById('addButton')
const list = document.getElementById('list')
const removeButton = document.getElementById('removeButton')

addButton.onclick = function () {
    if (text.value === '') {
        return
    } else {
        list.insertAdjacentHTML ('afterbegin', 
        `<div class="note-template">
            <h2>${text.value}</h2>
            <input type="button" value="X" id="removeButton" class="button-rem">
        </div>`)
        text.value = ''
    }
}

removeButton.onclick = function () {
    
}