const start=document.querySelector('#start');
const one=document.querySelector('#one');


one.style.visibility='hidden';
var setup;
var neww;

var ans= [];
var newli= document.createElement('li');

const getdadjoke= async()=>
{
    const config= {headers:{Accept:'application/json'}}
    const res=await axios.get('https://icanhazdadjoke.com/',config)
    const item=res.data.joke
    var ul=document.querySelector('#list');
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(item));
    ul.appendChild(li)
    
}




start.addEventListener('click',function()
{
    start.style.visibility="hidden";
    one.style.visibility='visible';
    getdadjoke();

})


const newjoke=document.querySelector('#neww');

newjoke.addEventListener('click',()=>
{

    getdadjoke();
})

const deletejoke=document.querySelector('#del');
const completelist=document.querySelector('#list');
deletejoke.addEventListener('click',()=>
{
    completelist.removeChild(completelist.lastElementChild);
})