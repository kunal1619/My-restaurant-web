import React, { useState } from 'react';
import Rest from './Component/rest';
import Menu from './Component/menuApi';
import "./Component/style.css"
import Navbtn  from './Component/Navbtn';

const uniqueData=[
    //👇new set --ki wajah se names repeat nhii hoga, spread operaton ... se single arr me aa jayega 
    ...new Set(Menu.map((curElm)=>{ //Menu se category ko chhatna hai
      return curElm.category;
    })
    ),
    "All"
];
console.log(uniqueData);


const App = () => {
  const [menuData, setmenuData] = useState(Menu);
  const [menuList, setmenuList] = useState(uniqueData);
  
  const filterItems=(categori)=>{

    if(categori==="All"){
      setmenuData(Menu);
      return
    }
    const updatedData=Menu.filter((curElm)=>{
      return curElm.category===categori;//ham ye value Menu se filter karke updateddata me store kiya
    });
    setmenuData(updatedData);
  };
  
  return (
    <>
    <div>
      <Navbtn filterItems={filterItems} menuList={menuList}/>
      <Rest menudata={menuData}/> {/*this is prop, value asign karke fir rest.js me jakar ussey use  karna */}
    
    </div>
    </>
  )
}

export default App


