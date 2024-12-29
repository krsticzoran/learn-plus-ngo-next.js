export default function Footer() {
  const Icon = () => (
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="13"
        height="13"
        viewBox="0 0 13 13"
        fill="none"
      >
        <path
          d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
          fill="#B1B4BA"
        ></path>
      </svg>
    </span>
  );

  return (
    <footer className="bg-[#edf3f5] py-8">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
          {/* Contact Section */}
          <div className="space-y-4 text-lg">
            <h3 className="text-2xl font-semibold">
              Do you have questions or want more information? Contact us now
            </h3>
            <p className="flex items-center gap-2">
              📞 <span className="text-xl font-medium">+385 99 247 66 44</span>
            </p>
            <p className="flex items-center gap-2">
              ✉️{" "}
              <span className="text-xl font-medium">someemail@gmail.com</span>
            </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Explore Link</h4>
              <ul className="space-y-1">
                <li className="flex items-center gap-2">
                  <Icon /> About Us
                </li>
                <li className="flex items-center gap-2">
                  <Icon /> Blog
                </li>
                <li className="flex items-center gap-2">
                  <Icon /> Testimonials
                </li>
                <li className="flex items-center gap-2">
                  <Icon /> Terms & Conditions
                </li>
                <li className="flex items-center gap-2">
                  <Icon /> Privacy Policy
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Services</h4>
              <ul className="space-y-1">
                <li className="flex items-center gap-2">
                  <Icon /> Tourist Visa
                </li>
                <li className="flex items-center gap-2">
                  <Icon /> Commercial Visa
                </li>
                <li className="flex items-center gap-2">
                  <Icon /> Student Visa
                </li>
                <li className="flex items-center gap-2">
                  <Icon /> Residence Visa
                </li>
                <li className="flex items-center gap-2">
                  <Icon /> Working Visa
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Our Branches</h4>
              <ul className="space-y-1">
                <li className="flex items-center gap-2">
                  <Icon /> Canada
                </li>
                <li className="flex items-center gap-2">
                  <Icon /> Belgium
                </li>
                <li className="flex items-center gap-2">
                  <Icon /> Denmark
                </li>
                <li className="flex items-center gap-2">
                  <Icon /> Australia
                </li>
                <li className="flex items-center gap-2">
                  <Icon /> France
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-300 mt-8 pt-4 text-center text-sm text-gray-600">
          Copyright © 2024 Learn Plus. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
