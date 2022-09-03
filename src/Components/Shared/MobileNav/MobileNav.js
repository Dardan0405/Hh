import React, { useState } from "react";
import Backdrop from "./Backdrop/Backdrop";
import Sidebar from "./SideBar/Sidebar";
import Toolbar from "./Toolbar/Toolbar";

const MobileNav =() =>{
    const [openSideDrawer,setIsOpenSideDrawer] = useState(false);
    function showDrawer(){
        setIsOpenSideDrawer(!openSideDrawer);
    }
    function backDropClickHandler(){
        setIsOpenSideDrawer(false);
    }
    let sideDrawer;
    let backDrop;
  
    if (openSideDrawer){
        sideDrawer =  <Sidebar click={backDropClickHandler}/>
        backDrop = <Backdrop click ={backDropClickHandler}/>

    }
   return(
    <div className="mobile-nav">
        <Toolbar drawerClickHandler ={showDrawer} iconHandler ={openSideDrawer}/>
        {sideDrawer}
        {backDrop}
    </div>
   )
}

export default MobileNav