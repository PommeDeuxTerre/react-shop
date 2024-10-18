import Article from "./components/article";
import Nav from "./components/nav";
import {article} from "./articleType";
import { useState } from "react";


function App() {
  const [basket, setBasket] = useState<Array<{article: article, quantity: number}>>([]);
  let previous_basket = localStorage.getItem("react-shop-basket");
  if (previous_basket && previous_basket !== "[]" && basket.length === 0){
      console.log("pomme")
      setBasket(JSON.parse(previous_basket));
  }

  function setBasketHook(new_basket:Array<{article: article, quantity: number}>):void{
      localStorage.setItem("react-shop-basket", JSON.stringify(new_basket));
      setBasket(new_basket);
  }

  const datas: Array<article> = [
      {
          "id": 1,
          "name": "pomme",
          "description": "c'est une pomme",
          "image_url": "https://placehold.co/150x150",
          "prix": 1,
          "quantity": 10,
      },
      {
          "id": 2,
          "name": "patate",
          "description": "c'est une patate",
          "image_url": "https://placehold.co/150x150",
          "prix": 3,
          "quantity": 7,
      },
      {
          "id": 3,
          "name": "poire",
          "description": "c'est une poire",
          "image_url": "https://placehold.co/150x150",
          "prix": 2,
          "quantity": 15,
      }
  ]

  return (
    <>
        <div className="relative">
            <Nav basket={basket} setBasket={setBasketHook} />
            <div className="flex flex-row flex-wrap justify-center content-center">
                {datas.map(article => 
                    <div key={article.id} className="w-[12rem] h-[16rem] m-3">
                        <Article article={article} basket={basket} setBasket={setBasketHook} />
                    </div>
                )}
            </div>
        </div>
    </>
  )
}

export default App
