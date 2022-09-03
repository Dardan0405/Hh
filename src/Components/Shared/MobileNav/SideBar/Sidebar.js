import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import {AiOutlineInbox,AiFillAppstore} from 'react-icons/ai'
import { CgClose } from 'react-icons/cg'
import {  MdKeyboardArrowDown } from 'react-icons/md'
import {GrResources} from 'react-icons/gr'

import {  RiApps2Fill } from 'react-icons/ri'
import { Courses,Resource} from "../../NavBar/data";
import {FcAbout} from 'react-icons/fc'

const Sidebar = (props) =>{
const [list,showList] = useState(false);
const [list1,showList1]= useState(false);

function show(){
    showList(!list);
}
function show1(){
    showList1(!list1);
}


return(
    <div className="side-bar">
        <div className="side-bar logo">
            <Link to='/'>
                <div className="mobile-logo"></div>
            </Link>
            <button onClick={props.click}><CgClose/> </button>
        </div>
        
        <div className="mobile-sidebar links">
            
            <div className="sidebar-dropdown">
                <div className="nav-sidebar links" onClick={show}>
                    <Link to='/' className="Nav-anchor">
                        <AiOutlineInbox/>
                        <FormattedMessage id="Course" defaultMessage='Courses'/>
                    </Link>
                    <div className="Dropdown-arrow">
                        <MdKeyboardArrowDown/>
                    </div>
                </div>
                {list === true && 
                <div className="mobile dropdown">
                    {Courses.map((props)=>{
                        return(
                         <div className="inner-links">
                            <Link to={props.to}>{props.title}</Link>
                         </div>
                        )
                    })}
                </div>
                }
            </div>
         
         <div className="nav-sidebar-links">
            <Link to='/' className="Nav-anchor">
                <AiFillAppstore/>
                <FormattedMessage id ='App' defaultMessage='Apps'/>
            </Link>
         </div>

         <div className="sidebar-dropdown">
            <div className="nav-sidebar links" onClick={show1}>
                <Link to='/' className="Nav-anchor">
                  <GrResources />
                  <FormattedMessage id="Res" defaultMessage='Resources'/>
                </Link>
                <div className="Dropdown-arrow">
                    <MdKeyboardArrowDown/>
                </div>
            </div>
            {list1 === true &&
            <div className="mobile dropdown">
                {Resource.map((props) =>{
                    return(
                        <div className="inner-links">
                            <Link to={props.to}>{props.title}</Link>
                        </div>
                    )
                })}
                </div>
            }
         </div>

         <div className="nav-sidebar-links">
         
            <Link to='/' className="Nav-anchor">
                <RiApps2Fill/>
                <FormattedMessage id ='Blog' defaultMessage='Blog'/>
            </Link>
        
         </div>

         <div className="nav-sidebar-links">
            <Link to='/' className="Nav-anchor">
                <FcAbout/>
                <FormattedMessage id ='About' defaultMessage='About Us'/>
            </Link>
         </div>
  
         

        </div>
    </div>
)

}

export default Sidebar