import Article from "./components/article";
import Basket from "./components/Basket";
function App() {

  return (
    <>
        <div className="relative h-[300vh]">
            <Basket />
            <div className="flex flex-row justify-center content-center">
                <div className="w-[12rem] h-[16rem]">
                    <Article />
                </div>
            </div>
        </div>
    </>
  )
}

export default App
