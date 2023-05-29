//images
import burger from './burger.png'
import egg from './egg.jpg'
import bbq from './BBQ.jpg'
import paneer from './panner.jpg'
import chips from './chips.jpg'
import turkey from './turkey.jpg'
import pizza from './veggie-pizza-square.jpeg'

//css and other styles
import './styleMenu.css';
import './styleHome.css';
import 'boxicons';

//functions
import homeGen from './home';
import menuGen from './menu'

let content = document.getElementById('content');

content.innerHTML=`<div class="header">
        <div class="logo"><box-icon name='dumbbell'></box-icon>EatFit</div>
        <div class="nav">
            <span id="home">Home</span>
            <span id="menu">Menu</span>
            <span id="services">Services</span>
            <span id="team">Team</span>
        </div>
    </div>
    <div id="generate"></div>`

let generate = document.getElementById('generate');

//dynamically generate homepage
let home = document.getElementById('home')
home.addEventListener('click', ()=>{
    homeGen(generate)
})

//dynamically generate menu

let menu = document.getElementById('menu');
menu.addEventListener('click',()=>{
    menuGen(generate)
})

