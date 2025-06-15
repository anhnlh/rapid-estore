import { Link } from "react-router";

export default function LinkButton({ text, route }) {
  return (
    <Link
      to={route}
      className="rounded-md bg-sky-600 p-3 text-2xl font-semibold duration-500 hover:bg-sky-300 hover:px-5"
    >
      {text}
    </Link>
  );
}
