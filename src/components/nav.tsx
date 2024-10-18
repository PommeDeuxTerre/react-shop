import { article } from "../articleType";
import Basket from "./Basket";

function Nav({ basket, setBasket }: {basket: Array<{article: article, quantity: number}>, setBasket:(v:Array<{article: article, quantity: number}>)=>void}) {
  return (
    <>
        <nav className="flex flex-row justify-between bg-gray-200 sticky top-0">
            <h2 className="text-center">
                <a href="./" className="w-full h-full flex items-center px-3">
                    react-shop
                </a>
            </h2>
            <Basket basket={basket} setBasket={setBasket} />
        </nav>
    </>
  );
}

export default Nav;
