import Button from "../components/utils/LinkButton";

export default function Index() {
  return (
    <div className="justify-center text-center">
      <h1 className="text-6xl mb-10">Welcome to the Rapid E-Store!</h1>
      <Button text="Get Started" route="/home" />
    </div>
  );
}
