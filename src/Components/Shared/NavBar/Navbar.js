import React, { useState,useEffect } from "react";
import {Link} from 'react-router-dom';
import clsx from "clsx";
import Logo from '../../../assets/Home/Logo.jpg'
import { FormattedMessage } from "react-intl";
import{MdKeyboardArrowDown} from 'react-icons/md'

import MobileNav from "../MobileNav/MobileNav";
import { BiFilterAlt, BiSearch } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import './navbar.scss'
import Resources from "./Megamenus/Resources";
import Course from "./Megamenus/Courses";

const Navbar = (props) =>{
    const [isSticky, setIsSticky] = useState(false);
   
    useEffect(() => {
    const nav = document.querySelector(".navbar");
    const navHeight = nav.scrollHeight;

    const handleScroll = () => {
      const scrollHeight = window.pageYOffset;
      setIsSticky(scrollHeight > 25 ? true : false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const [search, setSearch] = useState('')

    return(
        <div id="navbar" className={clsx(`navbar ${props.styles}`, isSticky ? "nav__sticky" : "")} >
         
         <div className="left-side">
            <Link to='/' className="navlogo">
                <div className="logo-container" style={{content: `url(${Logo})`}}>
                </div>
            </Link>
            </div>

            <div className="nav-links">

                <div className="nav-link courses-link">
                    <Link to='/' className="inner-nav-link">
                        <FormattedMessage id='courses' defaultMessage='Courses' />
                        <MdKeyboardArrowDown  className='arrow1' />
                    </Link>
                    <div className="line"></div>
                    <Course />
                  {/* <p><FormattedMessage id='All' defaultMessage ='Wiev all Categories'/> <BsArrowRightCircleFill/>*/}
                    
                    
                </div>
                <div className="nav-link apps-link">
                    <Link to='/' className="inner-nav-link">
                        <FormattedMessage id='apps' defaultMessage='Apps' />
                        
                    </Link>
                </div>
                <div className="nav-link resources-link">
                    <Link to='/' className="inner-nav-link">
                        <FormattedMessage id='resources' defaultMessage='Resources' />
                        <MdKeyboardArrowDown  className='arrow1' />
                    </Link>
                </div>
                <div className="nav-link blog-link">
                    <Link to='/' className="inner-nav-link">
                        <FormattedMessage id='blog' defaultMessage='Blog' />
                    </Link>
                </div>
                <div className="nav-link about-us-link">
                    <Link to='/' className="inner-nav-link">
                        <FormattedMessage id='about-us' defaultMessage='About US' />
                    </Link>
                </div>

            </div>

            <div className="search-container">
                <form>
                    <button type="submit"><BiSearch /></button>
                    <input 
                        type='search'
                        value={search}
                        id='search'
                        name='search'
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='Search courses'
                ></input>
                </form>
                <div className="filter-container">
                    <button className="filter">
                        <BiFilterAlt />
                    </button>
                </div>
            </div>

            <div className="auth">
                <div className="cart-container">
                    <button className="cart">
                        <FiShoppingCart />
                        <span>2</span>
                    </button>
                </div>
                <Link to='/' className="login">
                    <FormattedMessage id='log-in' defaultMessage='Log In' />
                </Link>
                <Link to='/' className="signup">
                    <FormattedMessage id='sign-up' defaultMessage='Sign Up' />
                </Link>
            </div>



          
          { /*<MobileNav/>*/}
      
        </div>
    )

}



export default Navbar