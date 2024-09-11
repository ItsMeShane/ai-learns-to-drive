import styled from 'styled-components';

export const Wrapper = styled.div`
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
`;
export const Container = styled.div`
   width: 500px;
   height: 500px;
   box-shadow: 5px 5px 25px 5px rgba(0, 0, 0, 0.5);
`;

export const Button = styled.div`
   position: var(--position);
   bottom: var(--offsetBottom);
   top: var(--offsettop);
   right: var(--offsetRight);
   padding: 10px 0;
   display: flex;
   justify-content: center;
   align-items: center;
   width: fit-content;
   cursor: pointer;

   a {
      min-width: 130px;
      padding: 12px 20px;
      text-decoration: none;
      color: white;
      background: linear-gradient(135deg, #6e7dfb, #8f92ff);
      border-radius: 12px;
      font-size: 16px;
      font-weight: 600;
      transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
      text-align: center;
      user-select: none;
      &:hover {
         background: linear-gradient(135deg, #8f92ff, #6e7dfb);
         box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
         transform: scale(1.05);
      }

      &:active {
         transform: scale(0.98);
         box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
      }
   }
`;

export const EditorContainer = styled.div`
   width: 100%;
   height: 100vh;
   background-color: green;
   display: flex;
   justify-content: center;
   align-items: center;
`;
