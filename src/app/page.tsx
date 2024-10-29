import Header from "./component/Header/Header"
import Footer from "./component/Footer/Footer"

export default function HomePage(){
  return <div>

    <a href="/about">About</a>
    <br/>
    <Header abc={22} hello="Hello World" isbolean={true}></Header>
    <br/>
    <h2 className="green">This is HomePage</h2>
    <br/>
    
   

  </div>
}