import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;

  .photo-frame {
    width: 300px; /* Set fixed width */
    height: 500px; /* Set fixed height */
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #eee;
    overflow: hidden;
    background-color: #f8f8f8;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover; /* Ensure the image scales correctly without distortion */
  }
`;