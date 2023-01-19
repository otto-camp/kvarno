import { useRef } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';
import Container from './Container';
import Text from './Text';

function Card() {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

  return (
    <div
      ref={ref}
      {...events}
      className="relative mx-auto h-[300px] overflow-auto rounded-lg bg-gray-700 p-12"
    >
      <Container>
        <Text />
      </Container>
    </div>
  );
}

export default Card;
