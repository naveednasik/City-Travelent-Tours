import React from 'react';
import { NavbarWrapper, TravelentLogo, LogoText, NavOptions, NavOption, Logo, LinkStyles } from './Navbar.styled';
import { Link } from "react-router-dom";

const navOptions = [
   {
      name: "Home",
      url: "/"
   },
   {
      name: "Destinations",
      url: "/"
   },
   {
      name: "Holiday Types",
      url: "/"
   },
   {
      name: "About Us",
      url: "/"
   },
   {
      name: "Contact Us",
      url: "/"
   },
];

const Navbar = () => (
   <NavbarWrapper>
      <TravelentLogo>
         <img src="/images/travelent_logo.png" alt="Logo" style={Logo} />
         <LogoText>TRAVELENT</LogoText>
      </TravelentLogo>

      <NavOptions>
         {
            navOptions.map((option, index) => (
               <NavOption key={index}>
                  <Link
                     to={`${option?.url}`}
                     style={LinkStyles}
                  >
                     {option.name}
                  </Link>

               </NavOption>
            ))
         }
      </NavOptions>
   </NavbarWrapper >
);

export default Navbar;
