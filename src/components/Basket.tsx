import { useState } from "react";
import { article } from "../articleType";

function BasketArticleList({is_showing_basket, SetShowingBasket, basket}: {is_showing_basket: boolean, SetShowingBasket: (v:boolean)=>void, basket: Array<{article: article, quantity: number}>}){
    function get_total_price(): number{
        let total_price = 0;
        for (let i=0;i<basket.length;i++){
            total_price += basket[i].article.prix * basket[i].quantity;
        }
        return total_price;
    }
    if (!is_showing_basket){
        return (
            <>
            </>
        );
    }
    return (
        <>
        <div className={`absolute top-[10vh] left-[10vw] h-[80vh] w-[80vw] bg-zinc-200 z-10 rounded-xl`}>
            <button className="absolute right-2 top-2 w-12 h-12" onClick={()=>SetShowingBasket(!is_showing_basket)}>
                <img src="/cancel-cross.svg" />
            </button>
            <div className="pt-14 flex flex-col content-end">
                {basket.map((element:{article: article, quantity: number}) => 
                    <div key={element.article.id}>
                        <div className="flex flex-row justify-end gap-x-2 me-2">
                            <div className="flex flex-row">
                                <div className="flex flex-col justify-between">
                                    <div className="flex flex-row justify-end">
                                        <h3 className="me-2 w-24 text-end">{element.quantity} { element.article.name }</h3>
                                    </div>
                                    <div className="flex flex-row justify-end">
                                        <p>prix unitaire: {element.article.prix}€ | prix total: {element.article.prix * element.quantity}€</p>
                                    </div>
                                </div>
                            </div>
                            <img src={element.article.image_url} className="w-24 h-24" />
                        </div>
                        {element.article.id === basket[basket.length-1].article.id ? (
                            <>
                            </>
                        ) : (
                            <hr className="bg-gray-300 h-1 my-3" />
                        )}
                    </div>
                )}
                <div className="ms-auto mt-5">
                    <div className="me-5">prix total: {get_total_price()}€</div>
                    <button className="p-3 bg-green-300 hover:bg-green-400 text-xl text-center rounded-lg">Acheter</button>
                </div>
            </div>
        </div>
        </>
    );
}

function Basket({ basket }: {basket: Array<{article: article, quantity: number}>}) {
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
        <BasketArticleList is_showing_basket={is_showing_basket} SetShowingBasket={SetShowingBasket} basket={basket}/>
    </>
  );
}

export default Basket;
