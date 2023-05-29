import burger from './burger.png'
import './styleHome.css';
import 'boxicons';
const homeGen=(generate)=>{
    console.log('hi');
    generate.innerHTML=`
        <div class="info">
            <div class="slogan">
                <span>Eat Train Conquer. Fuel your victory.</span>
                <span style="color:black;font-size: max(20px,1vw); font-weight: 540;">Welcome to EatFit, where fitness meets culinary delight. Enjoy a menu crafted with the perfect blend of nourishing ingredients and mouthwatering flavors.</span>
                <span class="reviews">
                    <span class="review-content">
                        <span style="font-size: 3vw;">The Taste Tribunal</span>
                        <span style="font-size: max(1vw,20px); font-weight: 400;">"A harmonious fusion of fitness and flavors, this gym restaurant delights with nourishing cuisine and a vibrant ambiance, leaving patrons energized and satisfied."</span>
                    </span>
                    <box-icon name='news' ></box-icon> 
                    
                </span>
            </div>
            <div class="special">
                <span>Today's special</span>
                <span style="font-size: max(25px,2.8vw);">FitBurger Deluxe</span>
                <img style="width:100%; margin-top:100px;justify-self: flex-end;"src="${burger}">
            </div>
        </div>`;
}

export default homeGen;