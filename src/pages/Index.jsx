import Button from "../components/utils/LinkButton";

export default function Index() {
  return (
    <div className="justify-center text-center">
      <h1 className="text-6xl">Welcome to the Rapid E-Store!</h1>
      <h2 className="mt-3 mb-10 text-sm text-neutral-400">Made by anhnlh</h2>
      <Button text="Get Started" route="/home" />
    </div>
  );
}
