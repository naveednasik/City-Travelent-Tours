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

TourCard.propTypes = {};

TourCard.defaultProps = {};

export default TourCard;
