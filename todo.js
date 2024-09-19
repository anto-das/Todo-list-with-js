let todoValue =[];
let serialNumber = 0;
const container = document.querySelector('#content-container');

document.querySelector('#task-btn').addEventListener('click',function(){
   let inputValue = document.querySelector('#input-value');
   let outputValue = inputValue.value;
   serialNumber++;
   let newEle = document.createElement('tr');
    newEle.innerHTML=`
    <th>${serialNumber}</th>
    <td>${outputValue}</td>
    <th>
    <button onclick='dltButton(event)' class ="btn  btn-outline btn-success">delete</button>
    </th>
    `;
    container.appendChild(newEle);
    inputValue.value ='';
    

    document.getElementById('clear-btn').addEventListener('click',function(){
        let clearAll = document.getElementById('content-container');
        clearAll.innerHTML='';
     })
     
})
function dltButton(event){
        container.removeChild(event.target.parentNode.parentNode);
}
