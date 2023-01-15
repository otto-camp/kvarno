import Container from './Container';

function Card() {
  return (
    <div className="overflow-auto h-[300px] mx-auto">
      <Container>
        <h1 className="font-black text-center">Hello World</h1>
      </Container>
    </div>
  );
}

export default Card;
