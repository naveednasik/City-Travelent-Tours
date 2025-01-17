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

CardDetails.propTypes = {
   card: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      imgUrl: PropTypes.string,
      famousDestinations: PropTypes.arrayOf(
         PropTypes.shape({
            title: PropTypes.string,
            images: PropTypes.arrayOf(PropTypes.string),
            description: PropTypes.string,
         })
      ),
   }),
   cardClicked: PropTypes.func,
};

CardDetails.defaultProps = {
   card: {
      title: "Default Title",
      description: "Default description",
      imgUrl: "/images/lahore_pic.jpg",
      famousDestinations: [
         {
            title: "Default Destination Title",
            images: ["/images/lahore_pic.jpg", "/images/lahore_pic1.jpg"],
            description: "Default destination description",
         },
      ],
   },
   cardClicked: (card) => console.log("Card Clicked:", card),
};

export default CardDetails;
