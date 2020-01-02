import styled from 'styled-components';

export const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;

    @media screen and (max-width: 800px) {
        padding: 20px 10px;
    }
`;