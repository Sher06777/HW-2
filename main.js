let count = prompt('Введите число');

for(let i = 0; i < count; i++){
    let color = '';

    if(i % 3 ===0){
        color = 'red';
    } else if (i % 3 ===1){
        color = 'yellow';
    } else{
        color = 'green';
    }

    document.write(`<div style = "width: 100px; height: 100px;
    margin-bottom: 10px; background-color: ${color}"
    class = "square"></div>`)
}