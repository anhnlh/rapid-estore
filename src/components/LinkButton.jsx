import { Link } from "react-router";

export default function LinkButton({ text, route }) {
  return (
    <Link
      to={route}
      className="p-3 text-2xl bg-sky-600 rounded-md hover:bg-sky-300 duration-500 font-semibold hover:px-5"
    >
      {text}
    </Link>
  );
}
