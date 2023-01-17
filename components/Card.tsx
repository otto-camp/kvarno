import Container from './Container';
import Text from './Text';

function Card() {
  return (
    <div className="mx-auto h-[300px] overflow-auto">
      <Container>
        <Text />
      </Container>
    </div>
  );
}

export default Card;
