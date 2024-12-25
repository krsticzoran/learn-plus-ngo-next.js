import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md p-4">
      <nav className="flex justify-center space-x-8">
        <Link href="/" className="text-xl text-gray-800 hover:text-blue-600">
          Home
        </Link>
        <Link
          href="/about"
          className="text-xl text-gray-800 hover:text-blue-600"
        >
          About Us
        </Link>
        <Link
          href="/contact"
          className="text-xl text-gray-800 hover:text-blue-600"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
