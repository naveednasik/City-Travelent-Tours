import React from 'react';
import PropTypes from 'prop-types';
import { CardDetailsWrapper, HeadingBox, Heading, Description, Destinations, TourDetails, TourImages, Title, ReturnButton } from './CardDetails.styled';

const CardDetails = ({ card, cardClicked }) => {
   return (
      <CardDetailsWrapper>
         <ReturnButton onClick={() => cardClicked(null)}>Return</ReturnButton>
         <img src={card?.imgUrl} alt={card?.city} />
         <HeadingBox>
            <Heading>
               {"Popular Destinations"}
            </Heading>
            <Description>
               {"Tours give you the oppurtunity to see alot within a time framex"}
            </Description>
         </HeadingBox>

         {card?.famousDestinations?.map((dest, index) => (
            <Destinations key={index} reverse={index % 2 !== 0}>
               <TourDetails>
                  <Title>
                     {dest?.title}
                  </Title>
                  <Description>
                     {dest?.description}
                  </Description>
               </TourDetails>
               <TourImages>
                  {dest?.images?.map((image, idx) => (
                     <img key={idx} src={image} alt={`${dest.title} ${idx + 1}`} />
                  ))}
               </TourImages>
            </Destinations>
         ))}

      </CardDetailsWrapper>
   );
};
CardDetails.propTypes = {};

CardDetails.defaultProps = {};

export default CardDetails;
