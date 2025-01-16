import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { TravelentTourPageWrapper, TravelentTourBody } from './TravelentTourPage.styled';
import Navbar from '../../components/Navbar/Navbar';
import TravelentTours from '../../components/TravelentTours/TravelentTours';
import CardDetails from '../../components/CardDetails/CardDetails';



const TravelentTourPage = () => {
   const [selectedCard, setSelectedCard] = useState(null);

   const cardClicked = (card) => {
      setSelectedCard(card); // Update state with the selected card
   };

   return (
      <TravelentTourPageWrapper>
         <Navbar />
         <TravelentTourBody isCardSelected={!!selectedCard}>
            <TravelentTours cardClicked={cardClicked} />
            {selectedCard && <CardDetails card={selectedCard} cardClicked={cardClicked} />}
         </TravelentTourBody>
      </TravelentTourPageWrapper>
   )

};

TravelentTourPage.propTypes = {};

TravelentTourPage.defaultProps = {};

export default TravelentTourPage;
