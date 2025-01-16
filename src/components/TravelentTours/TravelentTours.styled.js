import styled from 'styled-components';

export const TravelentToursWrapper = styled.div`
    margin: 0  auto;
    max-width: 600px;
    height: fit-content;
    display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  grid-template-rows: min-content;
  gap: 16px;
       @media (max-width: 768px) {
      grid-template-columns: repeat(2, minmax(100px, 1fr));
      max-height: 585px;
   }
  
   /* Responsive for tablets and laptops */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
    max-height: auto;
  }

  /* Further adjustments for smaller devices like phones */
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
    max-width: 600px; /* Ensure the width doesn't exceed */
  }

  /* For extra small devices */
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, minmax(100px, 1fr));
  }
`;
