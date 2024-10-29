// const Header =()=>{
//     return<div style={{backgroundColor:"yellow",border:"10px solide black"}}>
//         <h1 style={{color: "red"}}>THis is header component</h1>
//         <br/>
//         <h2>THis is header component 2</h2>
//         <br/>
//         <h3>THis is header component 3</h3>
//     </div>
// }

// export default Header;


// import cssStyle from "./header.module.css";

// const Header =(props:any)=>{
//     console.log(props,"props")
//     return<div>
//         <h1 className={cssStyle.h1}>THis is header component</h1>
//         <br/>
//         <h2>THis is header component 2</h2>
//         <br/>
//         <h3>THis is header component 3</h3>
//     </div>
// }

// export default Header;


import cssStyle from "./header.module.css";


const Header =()=>{
    
    return<div>
        <h1 className={cssStyle.h1}>THis is header component</h1>
        <br/>
        <h2>THis is header component 2</h2>
        <br/>
        <h3>THis is header component 3</h3>
    </div>
}

export default Header;