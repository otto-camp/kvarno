'use client';

import Container from './Container';
interface CardProps {
  height: number;
  width: number;
  bgColor: string;
}
function Card({ height, width, bgColor }: CardProps) {
  return (
    <div>
      <Container width={width} height={height} bgColor={bgColor}>
        <h1 className="text-6xl font-black text-center">Hello World</h1>
      </Container>
    </div>
  );
}

export default Card;
