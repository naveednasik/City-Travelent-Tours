import { styled } from 'styled-components';

export const NavbarWrapper = styled.div`
    margin: 3rem;
    display:flex;
    gap:25%;
`;

// export const TravelentLogo = styled(Box)(() => ({
//     display: "flex",
//   }));


export const TravelentLogo = styled.div`
    display: flex;
    gap: 10px;
`;

export const Logo = {
    width: "50px",
    height: "50px",
};
export const NavOptions = styled.div`
    // background-color:red;
    display: flex;
    flex-grow: 1;
    flex-shrink: 1;
    justify-content: space-between;
    max-width: 700px;
`;


export const NavOption = styled.div`
    padding: 10px;
    align-self: center;
    font-family: sans-serif;
    font-size: 1rem;
    font-weight: 500;

    a {
        text-decoration: none;
        color: #433f3fa1;
        transition: color 0.3s ease;

        &:hover {
            color: #00c0ff; /* Hover color */
        }
    }
`;

export const LinkStyles = {
    fontFamily: "fantasy",
    fontSize: "16px",
    fontWeight: "600",
    "&:hover": {
        color: "#00c0ff",
    },
};

export const LogoText = styled.div`
   font-family: Gill Sans, sans-serif;
   font-weight: bold;
   font-size: 25px;
   color: #00c0ff;
   align-self: center;
`;