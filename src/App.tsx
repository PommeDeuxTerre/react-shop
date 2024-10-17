import Article from "./components/article";
import Basket from "./components/Basket";
import {article} from "./articleType";


function App() {
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
        <div className="relative h-[300vh]">
            <Basket />
            <div className="flex flex-row flex-wrap justify-center content-center">
                {datas.map(article => 
                    <div className="w-[12rem] h-[16rem] m-3">
                        <Article article={article}/>
                    </div>
                )}
            </div>
        </div>
    </>
  )
}

export default App
