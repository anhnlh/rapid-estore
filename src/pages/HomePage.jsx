import Breadcrumb from "../components/Breadcrumb";
import Button from "../components/Button";

export default function HomePage() {
  return (
    <div className="mt-10 w-lvh h-lvh text-left">
      <Breadcrumb />
      <h1 className="text-4xl">Home</h1>
      <div className="mt-8 gap-5 flex">
        <Button text="Products" route="/products" />
        <Button text="Carts" route="/carts" />
      </div>
    </div>
  );
}
