//images

//css and other styles
import './styleMenu.css';
import './styleHome.css';
import 'boxicons';
import './styleServices.css';
//functions
import homeGen from './home';
import menuGen from './menu'

let content = document.getElementById('content');

// content.innerHTML=`<div class="header">
//         <div class="logo"><box-icon name='dumbbell'></box-icon>EatFit</div>
//         <div class="nav">
//             <span id="home">Home</span>
//             <span id="menu">Menu</span>
//             <span id="services">Services</span>
//             <span id="team">Team</span>
//         </div>
//     </div>
//     <div id="generate"></div>`

// let generate = document.getElementById('generate');
// //By default generate homepage
// homeGen(generate)
// //dynamically generate homepage
// let home = document.getElementById('home')
// home.addEventListener('click', ()=>{
//     homeGen(generate)
// })

// //dynamically generate menu

// let menu = document.getElementById('menu');
// menu.addEventListener('click',()=>{
//     menuGen(generate)
// })

