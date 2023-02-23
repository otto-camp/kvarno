export default function Arrow({
  direction,
}: {
  direction: 'left' | 'right' | 'up' | 'down';
}) {
  const getDirection = () => {
    if (direction === 'left') {
      return 'rotate-180';
    } else if (direction === 'down') {
      return 'rotate-90';
    } else if (direction === 'up') {
      return '-rotate-90';
    } else {
      return;
    }
  };
  return (
    <svg
      className={`fill-current ${getDirection()}`}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
    </svg>
  );
}
