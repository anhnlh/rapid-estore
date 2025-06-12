import Button from "../components/Button";

export default function Home() {
  return (
    <>
      <h1 className="text-6xl">Welcome to the Rapid E-Store!</h1>
      <div className="mt-10">
        <Button text="Products" route="/products" />
        <Button text="Carts" route="/carts" />
      </div>
    </>
  );
}
