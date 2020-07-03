import styled from 'styled-components';

export const Container = styled.div`
    padding: 0 15px;
    height: 100%;
 /*   flex: 0 0 320px; */

    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 320px;

    & + div {
        border-left: 1px solid rgba(0, 0, 0, 0.05);
        
    }
    
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 42px;

    }

    h2{
        font-weight: 500px;
        font-size: 16px;
        padding: 10px;
        
        
    }


  
`;