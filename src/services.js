import dining from './dining.jpg';
import delivery from './delivery.jpg';
import band from './band.jpg';
import party from './party.jpg';

const serviceGen = (generate)=>{
    console.log('service')
    generate.innerHtml = `
    <div style="color:#01705e; display: flex; justify-content: center; font-size: max(70px,5vw);">Our Multiple Services</div>
    <div style="display: flex;font-weight:550; font-size:max(20px,1vw); color: rgb(4, 29, 4); text-align: center;margin-left: 10%; margin-right: 10%; margin-top: 2%;">Discover our wide range of personalized services designed to support your health and fitness journey. From customized meal plans tailored to your dietary needs to expert nutrition guidance and fitness consultations, our team of professionals is dedicated to helping you achieve your goals. Experience the power of nourishing your body with wholesome, flavorful meals and let us be your partner in embracing a healthier lifestyle.</div>
    <div class="service">
        <div class="dining">
            <img src="${dining}" alt="dining" width="60%" height="auto">
            <span style="margin-top: 20px;font-size: min(3vw,25px);">Dining</span>
        </div>
        <div class="delivery">
            <img src="${delivery}" alt="delivery" width="60%" height="auto">
            <span style="margin-top: 20px;font-size: min(3vw,25px);">Fast Delivery</span>
        </div>
        
        <div class="party">
            <img src="${party}" alt="party" width="60%" height="auto">
            <span style="margin-top: 20px;font-size: min(3vw,25px);">Catering Service</span>
        </div>
        <div class="band">
            <img src="${band}" alt="band" width="60%" height="auto">
            <span style="margin-top: 20px;font-size: min(3vw,25px);">Live Band</span>
        </div>
    </div>`
}

export  default serviceGen