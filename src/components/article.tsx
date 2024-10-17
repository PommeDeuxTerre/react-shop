import { useState } from "react";
import { article } from "../articleType";

function Article({ article }: {article: article}) {
  const [nb_article, setNbArticle] = useState<number>(1);
  function add_one(): void{
      if (nb_article < article.quantity) {
          setNbArticle(nb_article + 1);
      }else{}
  }
  function remove_one(): void{
      if (nb_article > 0){
          setNbArticle(nb_article - 1);
      }else{}
  }
  function buy(): void{
      console.log(`added to the basket ${nb_article} times`);
  }
  return (
    <div className="w-full h-full bg-gray-100 rounded-lg">
        <img className="w-full rounded-t-lg" src={ article.image_url }/>
        <div className="w-full h-16 flex flex-row justify-between">
            <div className="w-5/12">
                <p className="ml-1">{ article.name }</p>
                <div className="flex flex-row justify-end divide-x divide-gray-100">
                    <button className="bg-gray-200 w-8 h-8 text-xl text-center rounded-l-lg" onClick={remove_one}>-</button>
                    <p className="bg-gray-200 w-8 h-8 text-xl text-center">{ nb_article }</p>
                    <button className="bg-gray-200 w-8 h-8 text-xl text-center rounded-r-lg" onClick={add_one}>+</button>
                </div>
            </div>
            <div className="flex flex-col justify-around w-5/12">
                <p className="mr-1 text-end">restant: { article.quantity }</p>
                <button className="bg-green-300 text-xl text-center rounded-lg" onClick={buy}>Ajouter</button>
            </div>
        </div>
    </div>
  )
}

export default Article;
