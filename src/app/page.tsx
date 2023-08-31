export default function Home() {
  return (
    <div>
      <h1>Jonathan</h1>
      {Array.from(Array(100)).map(() => (
        <div>teste</div>
      ))}
    </div>
  );
}
