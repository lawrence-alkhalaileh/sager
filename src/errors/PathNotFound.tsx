import { Link } from "react-router";
import Error404 from "@/assets/19.svg";
import DarkError404 from "@/assets/19-dark.svg";

export function PathNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] px-4 text-center">
      <div className="mb-8">
        <img src={Error404} className="dark:hidden max-h-[180px]" alt="404" />
        <img
          src={DarkError404}
          className="hidden dark:block max-h-[180px]"
          alt="404"
        />
      </div>

      <span className="px-3 py-1 text-sm font-medium rounded-full mb-4">
        404 Error
      </span>

      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-3">
        Page not found
      </h1>

      <p className="text-gray-600 dark:text-gray-400 max-w-md mb-8">
        Sorry, the page you’re looking for doesn’t exist or may have been moved.
      </p>

      <Link
        to="/"
        className="px-6 py-2 rounded-lg font-medium shadow"
      >
        Return Home
      </Link>
    </div>
  );
}
