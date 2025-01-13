import Link from "next/link"

const NavBar = () => {
  return (
    <nav className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Timspace</h1>
        <div className="flex space-x-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/example" className="hover:underline">
            Example
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
