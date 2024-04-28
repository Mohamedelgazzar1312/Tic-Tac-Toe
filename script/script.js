var turn ='x'
var tittle =document.querySelector('.title')
console.log(tittle)
var boxes =[];
// 
function play(id){
    var element=document.getElementById(id);
    if(turn==='x' && element.innerHTML==''){
        element.innerHTML='x';
        turn='o'
        tittle.innerHTML='o'
    }
    else if (turn ==='o'&& element.innerHTML=='' )
    {
        element.innerHTML='o'
        turn='x'
        tittle.innerHTML='x'
    }
  
    winner()
}

function winner(){

  
    for(let i=1;i<10;i++){
       boxes[i]= document.getElementById('item'+i).innerHTML
      
    }
   

    if (boxes[1] === boxes[2] && boxes[2] === boxes[3] && boxes[1] !== '' && boxes[2] !== '' && boxes[3] !== '') {
        end(1, 2, 3);
    } else if (boxes[4] === boxes[5] && boxes[5] === boxes[6] && boxes[4] !== '' && boxes[5] !== '' && boxes[6] !== '') {
        end(4, 5, 6);
    } else if (boxes[7] === boxes[8] && boxes[8] === boxes[9] && boxes[7] !== '' && boxes[8] !== '' && boxes[9] !== '') {
        end(7, 8, 9);
    } else if (boxes[1] === boxes[4] && boxes[4] === boxes[7] && boxes[1] !== '' && boxes[4] !== '' && boxes[7] !== '') {
        end(1, 4, 7);
    } else if (boxes[2] === boxes[5] && boxes[5] === boxes[8] && boxes[2] !== '' && boxes[5] !== '' && boxes[8] !== '') {
        end(2, 5, 8);
    } else if (boxes[3] === boxes[6] && boxes[6] === boxes[9] && boxes[3] !== '' && boxes[6] !== '' && boxes[9] !== '') {
        end(3, 6, 9);
    } else if (boxes[1] === boxes[5] && boxes[5] === boxes[9] && boxes[1] !== '' && boxes[5] !== '' && boxes[9] !== '') {
        end(1, 5, 9);
    } else if (boxes[3] === boxes[5] && boxes[5] === boxes[7] && boxes[3] !== '' && boxes[5] !== '' && boxes[7] !== '') {
        end(3, 5, 7);
    }

   
}

function end(n1,n2,n3){
    tittle.innerHTML=boxes[n1] + "  is  winner"
    document.getElementById('item'+n1).style.background='blue'
    document.getElementById('item'+n2).style.background='blue'
    document.getElementById('item'+n3).style.background='blue'
    setInterval(function(){tittle.innerHTML+='.'},1000)
    setTimeout(function(){location.reload()},3000)
    console.log("done")
}