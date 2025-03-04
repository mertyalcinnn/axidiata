import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-8 px-8 bg-sand text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl mb-4">Axidiata</h3>
          <p>Exclusive Diamond Jewelry Collection</p>
        </div>
        <div>
          <h3 className="text-xl mb-4">Quick Links</h3>
          <div className="space-y-2">
            <Link href="/collection" className="block hover:opacity-80">Collection</Link>
            <Link href="/preorder" className="block hover:opacity-80">Preorder</Link>
            <Link href="/about" className="block hover:opacity-80">About</Link>
          </div>
        </div>
        <div>
          <h3 className="text-xl mb-4">Contact</h3>
          <div className="space-y-2">
            <p>Email: info@axidiata.com</p>
            <p>Phone: +1 234 567 890</p>
            <Link href="/contact" className="block hover:opacity-80">Contact Form</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}