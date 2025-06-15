import Breadcrumb from "../components/Breadcrumb";
import LinkButton from "../components/LinkButton";

export default function Home() {
  return (
    <div className="mt-10 w-lvh h-lvh text-left">
      <Breadcrumb />
      <h1 className="text-4xl">Home</h1>
      <div className="mt-5 gap-5 flex">
        <LinkButton text="Products" route="/products" />
        <LinkButton text="Carts" route="/carts" />
      </div>
    </div>
  );
}
