import { useState } from "react";

function BasketArticleList({is_showing_basket, SetShowingBasket}: {is_showing_basket: boolean, SetShowingBasket: (v:boolean)=>void}){
    if (!is_showing_basket){
        return (
            <>
            </>
        );
    }
    return (
        <div className={`sticky top-[10vh] left-[10vw] h-[80vh] w-[80vw] bg-zinc-200 z-10 rounded-xl`}>
            <button className="absolute right-2 top-2 w-12 h-12" onClick={()=>SetShowingBasket(!is_showing_basket)}>
                <img src="/cancel-cross.svg" />
            </button>
        </div>
    );
}

function Basket() {
  const [is_showing_basket, SetShowingBasket] = useState<boolean>(false);
  return (
    <>
        <div className="w-12 h-12">
            <div className="w-full h-full bg-gray-300 rounded-full flex flex-col justify-center">
                <button onClick={()=>SetShowingBasket(!is_showing_basket)}>
                    <div className="w-8/12 h-8/12 m-auto">
                        <img src="/panier.png" />
                    </div>
                </button>
            </div>
        </div>
        <BasketArticleList is_showing_basket={is_showing_basket} SetShowingBasket={SetShowingBasket}/>
    </>
  );
}

export default Basket;
