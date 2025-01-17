import React from 'react';
import PropTypes from 'prop-types';
import { TourCardWrapper, CityText, CardText, CountryText } from './TourCard.styled';

const TourCard = ({ city, cardClicked }) => {

   return (
      <TourCardWrapper>
         <img src={city?.imgUrl} alt="city" onClick={() => cardClicked(city)} />
         <CardText>
            <CityText>{city?.city}</CityText>,
            <CountryText>{city?.country}</CountryText>
         </CardText>
      </TourCardWrapper>
   )
};

TourCard.propTypes = {
   city: {
      imgUrl: PropTypes.string,
      city: PropTypes.string,
      country: PropTypes.string,
   },
   cardClicked: PropTypes.func,
};

TourCard.defaultProps = {
   city: {
      imgUrl: "/images/lahore_pic.jpg",
      city: "Lahore",
      country: "Pakistan",
   },
   cardClicked: (card) => console.log("Card Clicked:", card),
};

export default TourCard;
