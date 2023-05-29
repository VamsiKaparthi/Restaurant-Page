import burger from './burger.png'
import egg from './egg.jpg'
import bbq from './BBQ.jpg'
import paneer from './panner.jpg'
import chips from './chips.jpg'
import turkey from './turkey.jpg'
import pizza from './veggie-pizza-square.jpeg'

const menuGen = (generate)=>{
    console.log('hello')
    generate.innerHTML=`
            <div class="menu">
                <div class="Appetizers">
                    <span class="head">Main-Menu</span>
                    <span class="items">
                        <div class="card">
                            <img src="${bbq}" alt="chicken" style="width:45%; height:auto;">
                            <div>
                                <div class="item-title">BBQ Chicken Salad</div>
                                <div class="protein">Protein: 35g<br>Calories: 450</div>
                                <div class="cost">20$</div>
                            </div>
                        </div>
                        <div class="card">
                            <img src="${paneer}" alt="paneer" style="width:45%; height:auto;">
                            <div>
                                <div class="item-title">Spicy Paneer Tikka</div>
                                <div class="protein">Protein: 25g<br>Calories: 280</div>
                                <div class="cost">10$</div>
                            </div>
                        </div>
                        <div class="card">
                            <img src="${pizza}" alt="pizza" style="width:45%; height:auto;">
                            <div>
                                <div class="item-title">Veg Pizza Squares</div>
                                <div class="protein">Protein: 15g<br>Calories: 400</div>
                                <div class="cost">14$</div>
                            </div>
                        </div>
                        <div class="card">
                            <img src="${egg}" alt="egg" style="width:45%; height:auto;">
                            <div>
                                <div class="item-title">Tasty Egg White Bites</div>
                                <div class="protein">Protein: 22g<br>Calories: 180</div>
                                <div class="cost">10$</div>
                            </div>
                        </div>
                        <div class="card">
                            <img src="${turkey}" alt="turkey" style="width:45%; height:auto;">
                            <div>
                                <div class="item-title">Turkey Roll-ups</div>
                                <div class="protein">Protein: 33.5g<br>Calories: 400</div>
                                <div class="cost">10$</div>
                            </div>
                        </div>
                        <div class="card">
                            <img src="${chips}" alt="chips" style="width:45%; height:auto;">
                            <div>
                                <div class="item-title">Crispy Tortoilla Chips</div>
                                <div class="protein">Protein: 9g<br>Calories: 100</div>
                                <div class="cost">10$</div>
                            </div>
                        </div>
                    </span>
                </div>
            </div>`
}

export default menuGen