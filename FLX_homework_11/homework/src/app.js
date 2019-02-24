const maxItems = 10;
let counter = 0;
let el;
let count = 1;

function newElement(){
  let fullList = document.getElementById('notification');
  let li = document.createElement('li');
  let inputValue = document.getElementById('toDoEl').value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if(inputValue === ''){
    document.getElementsByClassName('addBtn').disabled = true;
  } else{

    document.getElementById('list').appendChild(li);
    document.getElementById('toDoEl').value = '';
    let checkBox = document.createElement('span');
    let checkIcon = document.createElement('i');
    let checkText = document.createTextNode('check_box_outline_blank');
    checkBox.setAttribute('role','button');
    checkBox.className = 'unchecked';
    checkIcon.className = 'material-icons';
    checkIcon.setAttribute('onclick','checkElement()');
    checkIcon.appendChild(checkText);
    checkBox.appendChild(checkIcon);
    li.insertBefore(checkBox, t);

    li.setAttribute('draggable', true);
    li.setAttribute('ondragover', 'dragOver(event)');
    li.setAttribute('ondragstart', 'dragStart(event)');

    let bin = document.createElement('span');
    let binIcon = document.createElement('i');
    let textIcon = document.createTextNode('delete');
    binIcon.className = 'material-icons';
    bin.className = 'close';
    binIcon.setAttribute('onclick','deleteElement()');
    binIcon.setAttribute('role','button');
    binIcon.appendChild(textIcon);
    bin.appendChild(binIcon);
    li.appendChild(bin);

    ++counter;

    if(counter>maxItems - count){
      
      document.querySelector('input').disabled = true;
      document.getElementsByClassName('addBtn').disabled = true;
      
      fullList = document.getElementById('notification');
      let max = document.createElement('span');
      max.className = 'm';
      let maxText = document.createTextNode('Maximum item per list are created');
      max.appendChild(maxText);
      fullList.appendChild(max);
    } else if (counter<maxItems){
      document.querySelector('input').disabled = false;
      
    } else if(counter<maxItems){     
        let full = document.getElementById('notification');
        let m = document.getElementByClassName('m');
        full.removeChild(m);    
    }
  }
}


function deleteElement(){
  let close = document.getElementsByClassName('close');
  for(let i = 0; i < close.length;i++){
    close[i].onclick = function(){
      let div = this.parentElement;
      div.style.display = 'none';
    };
    if(counter<=maxItems){
      document.querySelector('input').disabled = false;
    }
  }
  counter--;
}


function checkElement() {
  let unchecked = document.getElementsByClassName('unchecked');
  for (let i = 0; i < unchecked.length; i++) {
    unchecked[i].onclick = function() {
      let unchecked = this;
      unchecked.style.display = 'none';
      let li = document.querySelectorAll('li');
      let t = li.t;
      let checkBox = document.createElement('span');
      let checkIcon = document.createElement('i');
      let checkTxt = document.createTextNode('check_box');
      checkBox.className = 'checked';
      checkIcon.className = 'material-icons';
      checkIcon.appendChild(checkTxt);
      checkBox.appendChild(checkIcon);
      li[i].insertBefore(checkBox, unchecked);
    };
  }
} 



function dragOver(e) {
  if (isBefore(el, e.target)) {
    e.target.parentNode.insertBefore(el, e.target);
  } else {
    e.target.parentNode.insertBefore(el, e.target.nextSibling);
  }
}

function dragEnd() {
  el = null;
}

function dragStart(e) {
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/plain', null);
  el = e.target;
}

function isBefore(el1, el2) {
    if (el2.parentNode === el1.parentNode) {
        for (let cur = el1.previousSibling; cur; cur = cur.previousSibling) {
            if (cur === el2) {
                return true;
            }
        }
    return false; 
  }
}








