import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-2">
              {/* <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ABClogo-Black_transparent_bg-cpHmeRp09XBDxIB5KKbaf0lok7mLwg.png"
                alt="Africa's Blockchain Club Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              /> */}
              <span className="text-xl font-bold text-foreground hidden sm:inline">Ecomm</span>
            </Link>
          </div>
          <div className="flex items-center gap-1 sm:gap-4">
            <Link
              href="/#about"
              className="text-foreground/80 hover:text-foreground px-2 py-2 rounded-md text-sm font-medium"
            >
              About
            </Link>
            <Link
              href="/addProduct"
              className="text-foreground/80 hover:text-foreground px-2 py-2 rounded-md text-sm font-medium"
            >
              AddProduct
            </Link>

          </div>
        </div>
      </div>
    </nav>
  )
}
