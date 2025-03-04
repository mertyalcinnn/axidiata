import Link from "next/link";

export default function Header() {
  return (
    <header className="py-4 px-8 border-b border-gray-200 bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/"
          className="text-3xl font-heading font-bold text-gray-800 hover:text-gray-600 transition-colors"
        >
          Axidiata
        </Link>
        <div className="space-x-8">
          <Link
            href="/collection"
            className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 relative group"
          >
            Collection
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/preorder"
            className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 relative group"
          >
            Preorder
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/about"
            className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 relative group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 relative group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
