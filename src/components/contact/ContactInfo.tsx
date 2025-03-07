export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-light mb-4">Get in Touch</h2>
        <p className="text-neutral-600">
          We&lsquod love to hear from you. Please fill out the form or reach out
          using the contact information below.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="font-medium mb-1">Address</h3>
          <p className="text-neutral-600">
            123 Jewelry Street
            <br />
            Istanbul, Turkey 34000
          </p>
        </div>

        <div>
          <h3 className="font-medium mb-1">Email</h3>
          <a
            href="mailto:info@axadiata.com"
            className="text-neutral-600 hover:text-black transition-colors"
          >
            info@axadiata.com
          </a>
        </div>

        <div>
          <h3 className="font-medium mb-1">Phone</h3>
          <a
            href="tel:+901234567890"
            className="text-neutral-600 hover:text-black transition-colors"
          >
            +90 123 456 7890
          </a>
        </div>

        <div>
          <h3 className="font-medium mb-1">Hours</h3>
          <p className="text-neutral-600">
            Monday - Friday: 9:00 AM - 6:00 PM
            <br />
            Saturday: 10:00 AM - 4:00 PM
            <br />
            Sunday: Closed
          </p>
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-2">Follow Us</h3>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-neutral-600 hover:text-black transition-colors"
          >
            Instagram
          </a>
          <a
            href="#"
            className="text-neutral-600 hover:text-black transition-colors"
          >
            Facebook
          </a>
          <a
            href="#"
            className="text-neutral-600 hover:text-black transition-colors"
          >
            Pinterest
          </a>
        </div>
      </div>
    </div>
  );
}
