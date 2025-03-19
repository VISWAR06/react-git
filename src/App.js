import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"
function App(){
 /* const chg = () =>{
    const name=["hello","hi","how"]
    const int=Math.floor(Math.random()*name.length)
    return name[int]
  }
  function c(){
    const name=["not","in","out"]
    const int=Math.floor(Math.random()*name.length)
    return name[int]
  } */
  

  return(
    <div>
    
  <Header/>
  <Content/>
  <Footer/>
    </div>
  )
}
export default App