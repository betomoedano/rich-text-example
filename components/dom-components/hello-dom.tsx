"use dom";

export default function DOMComponent({ name }: { name: string }) {
  return (
    <div>
      <h1>Hello testing one, {name}</h1>
      <button onClick={() => alert("Hello")}>Click me</button>
    </div>
  );
}
