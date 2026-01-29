export default function Column({
  length,
  current,
}: {
  length: number;
  current: number;
}) {
  return (
    <div className="relative">
      <div
        className="absolute flex flex-col gap-4 transition-all"
        style={{
          top: "calc(var(--spacing) * -" + current + "0)",
        }}
      >
        {Array.from({ length: length }).map((_, i) => (
          <div>{i}</div>
        ))}
      </div>
    </div>
  );
}
