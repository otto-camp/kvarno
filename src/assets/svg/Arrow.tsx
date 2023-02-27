export default function Arrow({
  direction,
  w,
  h,
}: {
  direction: 'left' | 'right' | 'up' | 'down';
  w?: number;
  h?: number;
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
      className={`fill-current ${getDirection()} inline-block`}
      xmlns="http://www.w3.org/2000/svg"
      width={w ?? 24}
      height={h ?? 24}
      viewBox="0 0 24 24"
    >
      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
    </svg>
  );
}
