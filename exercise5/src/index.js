import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./component/Header";
import FoodCard from "./component/FoodCard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Header />
    <FoodCard
      image="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2022/02/16/0/FNM_030122-Tom-Kha-Gai_s4x3.jpg.rend.hgtvcom.616.462.suffix/1645023419747.jpeg"
      article="his tom kha gai soup recipe (or Thai coconut chicken soup) is absolutely perfect. Rich and creamy yet tangy and salty, this Thai coconut chicken soup recipe is filling but light and positively bursting with flavor. The very best tom kha gai recipe I’ve ever made or tried. With Whole30, paleo, and vegan options, too. "
      head="อาหารคาว"
      subhead="ต้มข่าไก่"
    />
      <FoodCard
        image="https://i1.wp.com/seonkyounglongest.com/wp-content/uploads/2021/03/Tom-Yum-03-mini.jpg?fit=1000%2C667&ssl=1"
        article="Tom yum is a delicious hot and sour soup from Thailand. “Tom” means boiling “Yum” means mixed and “Kung” means shrimp. The protein can be anything you want like chicken, beef, pork, tofu, or just vegetables only. It is one dish that easily turns into plant-based. Tom yum always reminds me of Kimchi Jjigae, my comfort food from Korea. It is tangy, spicy, umami and so many flavors and textures in one bowl."
        head="อาหารคาวsu"
        subhead="ต้มยำกุ้ง"
      />
    <FoodCard
      image="https://img.freepik.com/premium-photo/lod-chong-thai-dessert-lod-chong-with-coconut-milk-wooden-floor_74656-1324.jpg?w=2000"
      article="ust about anywhere in Thailand you'll find a street vendor specializing in sweets, and Lod Chong is probably the most popular of Thai sweets so all of these vendors will have it. A strange sight for the newcomer to Lod Chong, it looks like little green worms in icy sugary water. A lovely combination of bright green color, rich sugary flavor, earthy fragrance and stomach-filling rice pasta. A must for anyone traveling to Thailand."
      head="อาหารหวาน"
      subhead="ลอดช่อง"
    />
    <FoodCard
      image="http://www.thailandstyle.info/thaifood/wp-content/uploads/2012/01/Chao_Kuai.jpg"
      article="Gulmohar,you are welcome.Colin, reudce half if one chicken is too big for you and Faye.Pete, quickly try out.LCOM, yes, any types will work.Rachel, ya, no problem, if cook small qty.somewhere to SG, not sure ler.Ju, hope you will like it.Sze Sze, after tried, let me know ya.Happy homebaker,you are welcome.Sulianmummy, Happy trying.tigerfish, get whatever size of chicken which can fit into your current rice cooker, loose cut chicken pieces also works.mimid3vils, it will come out with some juices, and little burn it is ok, better aroma."
      head="อาหารหวาน"
      subhead="เฉาก๊วย"
    />
  </>
);