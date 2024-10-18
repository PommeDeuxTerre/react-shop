import { useState } from "react";
import { article } from "../articleType";

enum BasketState {
  hidden,
  show,
  form,
  valided,
}

function BasketArticleList({basket_state, SetShowingBasket, basket, setBasket}: {basket_state: BasketState, SetShowingBasket: (v:BasketState)=>undefined, basket: Array<{article: article, quantity: number}>, setBasket(v:Array<{article: article, quantity: number}>):void}){
    function get_total_price(): number{
        let total_price = 0;
        for (let i=0;i<basket.length;i++){
            total_price += basket[i].article.prix * basket[i].quantity;
        }
        return total_price;
    }

    function validate_transaction(): void{
        setBasket([]);
        SetShowingBasket(BasketState.valided);
    }

    if (basket_state == BasketState.hidden){
        return (
            <>
            </>
        );
    }else if (basket_state == BasketState.show){
        return (
            <>
            <div className={`absolute top-[10vh] left-[10vw] h-[80vh] w-[80vw] bg-zinc-200 z-10 rounded-xl`}>
                <button className="absolute right-2 top-2 w-12 h-12" onClick={()=>SetShowingBasket(BasketState.hidden)}>
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
                                            <p>unitaire: {element.article.prix}€ | prix total: {element.article.prix * element.quantity}€</p>
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
                        <button className="p-3 bg-green-300 hover:bg-green-400 text-xl text-center rounded-lg" onClick={()=>SetShowingBasket(BasketState.form)}>Acheter</button>
                    </div>
                </div>
            </div>
            </>
        );
    }else if (basket_state == BasketState.form){
        return (
            <div className={`absolute top-[10vh] left-[10vw] h-[80vh] w-[80vw] bg-zinc-200 z-10 rounded-xl`}>
                <h2 className="h-28 text-center text-green-700 text-2xl mt-12">validate transaction (prix total: {get_total_price()}€)</h2>
                <div className="ms-auto mt-5">
                    <form className="mx-auto w-[70vw] flex flex-col content-end">
                        <div className="flex flex-row justify-between">
                            <input className="w-5/12 rounded p-1 shadow border border-2 text-gray-700 leading-tight focus:border-sky-200 focus:outline-none focus:shadow-outline" type="text" name="first-name" placeholder="prénom" />
                            <input className="w-5/12 rounded p-1 shadow border border-2 text-gray-700 leading-tight focus:border-sky-200 focus:outline-none focus:shadow-outline" type="text" name="last-name" placeholder="nom" />
                        </div>
                        <br />
                        <input className="rounded p-1 shadow border border-2 text-gray-700 leading-tight focus:border-sky-200 focus:outline-none focus:shadow-outline" type="email" name="email" placeholder="email" />
                        <br />
                        <input className="rounded p-1 shadow border border-2 text-gray-700 leading-tight focus:border-sky-200 focus:outline-none focus:shadow-outline" type="text" name="adresse" placeholder="adresse" />
                        <br />
                        <input className="rounded p-1 shadow border border-2 text-gray-700 leading-tight focus:border-sky-200 focus:outline-none focus:shadow-outline" type="text" name="credit-card" placeholder="numéro de carte de crédit" />
                        <br />
                        <button className="p-3 bg-green-300 hover:bg-green-400 text-xl text-center rounded-lg ml-auto" onClick={validate_transaction}>Acheter</button>
                    </form>
                </div>
            </div>
        );
    }
    else if (basket_state == BasketState.valided){
        return (
            <div className={`absolute top-[10vh] left-[10vw] h-[80vh] w-[80vw] bg-zinc-200 z-10 rounded-xl`}>
                <button className="absolute right-2 top-2 w-12 h-12" onClick={()=>SetShowingBasket(BasketState.hidden)}>
                    <img src="/cancel-cross.svg" />
                </button>
                <div className="h-full pt-14 flex flex-col content-end flex flex-col justify-center">
                    <h2 className="h-28 text-center text-green-700 text-2xl">L'achat a bien été effectué</h2>
                </div>
            </div>
        );
    }
}

function Basket({ basket, setBasket }: {basket: Array<{article: article, quantity: number}>, setBasket:(v:Array<{article: article, quantity: number}>)=>void}) {
  const [basket_state, SetShowingBasket] = useState<BasketState>(BasketState.hidden);

  function setShowingBasketHook(basket_state: BasketState): undefined{
      SetShowingBasket(basket_state);
      return undefined;
  }

  return (
    <>
        <div className="w-12 h-12">
            <div className="w-full h-full bg-gray-300 rounded-full flex flex-col justify-center">
                <button onClick={()=>SetShowingBasket(basket_state == BasketState.hidden ? BasketState.show : BasketState.hidden)}>
                    <div className="w-8/12 h-8/12 m-auto">
                        <img src="/panier.png" />
                    </div>
                </button>
            </div>
        </div>
        <BasketArticleList basket_state={basket_state} SetShowingBasket={setShowingBasketHook} basket={basket} setBasket={setBasket} />
    </>
  );
}

export default Basket;
