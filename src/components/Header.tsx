import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-500 text-white p-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href = "/products"> Products</Link>
        <Link href = "/users">Users</Link>
    </header>
  );
}
