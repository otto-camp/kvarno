import Container from './Container';
interface CardProps {
  height: number;
  width: number;
  bgColor: string;
  border: number;
  radius: number;
}
function Card({ height, width, bgColor, border, radius }: CardProps) {
  return (
    <>
      <div>
        <Container
          width={width}
          height={height}
          bgColor={bgColor}
          border={border}
          radius={radius}
        >
          <h1 className="text-6xl font-black text-center">Hello World</h1>
        </Container>
      </div>
    </>
  );
}

export default Card;
