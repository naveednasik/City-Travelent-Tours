import styled from 'styled-components';

export const TourCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 200px;
//    transition: transform 0.3s ease, box-shadow 0.3s ease;
   cursor: pointer;

   &:hover {
      transform: translateY(-10px) scale(1.05);
   }
    img{
         width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
        border-radius: 15px;
        max-height: 150px; 
        box-shadow: 0 4px 6px 2px rgba(0, 0, 0, 38%);
    }
`;

export const CityText = styled.div`
    font-family: cursive;
`;

export const CountryText = styled.div`
    font-weight: bold;
    font-family: cursive;
`;

export const CardText = styled.div`
    display:flex;
    align-self: center;
    gap: 5px;
`;