import Link from "next/link";

export default function Footer() {
    return (
      <footer className="bg-white text-blue-950 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Footer content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Section 1: Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-gray-400">Home</Link>
                </li>
                <li>
                  <Link href="\(public)\about" className="hover:text-gray-400">About</Link>
                </li>
                <li>
                  <Link href="/components/productpage.tsx" className="hover:text-gray-400">Product</Link>
                </li>
                <li>
                  <Link href="\src\app\(public)\contect" className="hover:text-gray-400">Contact</Link>
                  </li>
                <li>
                  <Link href="/components/login.tsx" className="hover:text-gray-400">Login</Link>
                </li>
               
              </ul>
            </div>
  
            {/* Section 2: Social Media */}
            <div>
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-gray-400">Facebook</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-400">Twitter</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-400">Instagram</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-400">LinkedIn</Link>
                </li>
              </ul>
            </div>
  
            {/* Section 3: Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li>Email: info@example.com</li>
                <li>Phone: +123 456 7890</li>
                <li>Address: 123 Street, City, Country</li>
              </ul>
            </div>
          </div>
  
          {/* Copyright and other information */}
          <div className="mt-8 text-center md:flex md:justify-between md:items-center border-t border-gray-700 pt-4">
            <p className="text-sm">&copy; 2024 My Website. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <Link href="#" className="text-sm hover:text-gray-400">Privacy Policy</Link> | 
              <Link href="#" className="ml-2 text-sm hover:text-gray-400">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    )
  }