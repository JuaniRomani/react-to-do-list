import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Card = ({ text, link = '' }) => {
  return (
    <div>
      <Link href={link}>
        <Wrapper>
          <span>{text}</span>
        </Wrapper>
      </Link>
    </div>
  );
}
 
export default Card;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  min-width: 200px;
  padding: 2em;
  background-color: #333;
`;
