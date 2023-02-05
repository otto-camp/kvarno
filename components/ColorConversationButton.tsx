export default function ColorConversationButton({ color }: { color: string }) {
  return (
    <p className="my-2 cursor-pointer p-2 text-2xl font-semibold ">{color}</p>
  );
}
