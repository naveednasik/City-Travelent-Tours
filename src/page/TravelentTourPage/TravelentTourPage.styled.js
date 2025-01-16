import styled from 'styled-components';

export const TravelentTourPageWrapper = styled.div`

`;

export const TravelentTourBody = styled.div`
    display: ${(props) => (props.isCardSelected ? 'flex' : '')};
   > div:first-child {
      /* TravelentTours Component */
      flex: ${(props) => (props.isCardSelected ? '0.5' : '1')};
      overflow-y: auto;
    //   background: #f5f5f5;
      padding: 16px;
      transition: flex 0.3s ease;
   }

   > div:last-child {
      /* CardDetails Component */
      flex: ${(props) => (props.isCardSelected ? '1' : '0')};
      overflow-y: auto;
      background: #fff;
      padding: 16px;
      border-left: 1px solid #ddd;
      transition: flex 0.3s ease;
   }
`;