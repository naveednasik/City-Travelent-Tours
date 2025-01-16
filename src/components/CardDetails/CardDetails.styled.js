import styled from 'styled-components';

export const CardDetailsWrapper = styled.div`
flex: 0;
   overflow-y: auto;
   background: #fff;
   padding: 0;
   border-left: 1px solid #ddd;
   transition: flex 0.3s ease;
   overflow: hidden;
//    position: relative;
   img{
   width: 100%;
   border-radius: 10px  10px 0 0;
   max-height: 300px;
   }
`;

export const HeadingBox = styled.div`
    padding: 50px 0 20px;
`;

export const Heading = styled.div`
    font-weight: bold;
    font-size: 35px;
    font-family: monospace;
    justify-self: center;
    padding-bottom: 10px;
`;

export const Description = styled.div`
    font-family: monospace;
    font-size: smaller;
    justify-self: center;
`;

export const Destinations = styled.div`
    display: flex;
    flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
    gap: 20px;
    padding-top: 50px;
`;

export const TourDetails = styled.div`
    flex: 1 1 60%;
`;

export const Title = styled.div`
    padding-bottom: 10px;
    font-weight: bold;
    font-size: 18px;
    font-family: monospace;
    // justify-self: center;
`;

export const TourImages = styled.div`

    display: flex;
    flex: 1 1 40%;
   position: relative;
   margin-bottom: 20px;
   gap: 5px;

   img {
    min-height: 200px;
   max-width: 190px;
   border-radius: 5px;
      transition: transform 0.3s ease;

      &:nth-child(2) {
         transform: translateY(-30px);
          @media (max-width: 1100px) {
            display: none;
   }
      }
   }

   &:hover img {
      transform: scale(1.05); /* Zoom effect on hover */
   }
`;

export const ReturnButton = styled.button`
   position: absolute;
   top: 55px;
   right: 50px;
   padding: 10px 15px;
   font-size: 1rem;
   font-weight: bold;
   background-color: #00c0ff;
   color: #fff;
   border: none;
   border-radius: 5px;
   cursor: pointer;
   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
   transition: background-color 0.3s ease, transform 0.2s ease;

   &:hover {
      background-color: #008ecf;
      transform: translateY(-2px);
   }

   &:active {
      background-color: #006ba1;
      transform: translateY(0);
   }
`;