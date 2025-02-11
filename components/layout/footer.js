import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary  bg-[url('/images/shape-14.png')]">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="text-secondary">
              <p className="uppercase text-2xl font-semibold leading-7 font-spartan">
                <span className="text-white">learn</span> plus
              </p>
            </div>

            <p className="mt-4 max-w-xs text-white">
              Learn Plus is a non-governmental organization dedicated to
              promoting lifelong learning and education.
            </p>

            <ul className="mt-8 flex gap-6">
              <li>
                <Link
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10 bg-[rgba(255,255,255,0.13)] rounded-full text-white transition hover:bg-secondary"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10 bg-[rgba(255,255,255,0.13)] rounded-full text-white transition hover:bg-secondary"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10 bg-[rgba(255,255,255,0.13)] rounded-full text-white transition  hover:bg-secondary"
                >
                  <span className="sr-only ">YouTube</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19.615 3.184C20.44 3.414 21.1 4.078 21.328 4.903c.452 1.69.672 3.802.672 6.097 0 2.295-.22 4.406-.672 6.097-.228.825-.888 1.489-1.713 1.72C17.638 19.997 12 20 12 20s-5.638-.003-7.615-.183c-.825-.231-1.485-.895-1.713-1.72C2.22 15.406 2 13.295 2 11c0-2.295.22-4.406.672-6.097.228-.825.888-1.489 1.713-1.72C6.362 3.003 12 3 12 3s5.638.003 7.615.184zM10 8v8l6-4-6-4z" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-2 mt-10 lg:mt-0 ">
            <div>
              <p className="text-xl font-semibold leading-7 text-white">
                Services
              </p>

              <ul className="mt-6 space-y-4 ">
                <li>
                  <Link
                    href="#"
                    className="text-white transition hover:text-secondary"
                  >
                    Internships & Trainings
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-white transition hover:text-secondary"
                  >
                    Cultural Activities
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-white transition hover:text-secondary"
                  >
                    Project Writing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white transition hover:text-secondary"
                  >
                    Job Shadowing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xl font-semibold leading-7 text-white">
                About Us
              </p>

              <ul className="mt-6 space-y-4 ">
                <li>
                  <Link
                    href="#"
                    className="text-white transition hover:text-secondary"
                  >
                    Learn Plus
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-white transition hover:text-secondary"
                  >
                    What We Do
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-white transition hover:text-secondary"
                  >
                    What We Offer
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white transition hover:text-secondary"
                  >
                    Membership
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xl font-semibold leading-7 text-white">
                Explore
              </p>

              <ul className="mt-6 space-y-4 ">
                <li>
                  <Link
                    href="#"
                    className="text-white transition hover:text-secondary"
                  >
                    Services
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-white transition hover:text-secondary"
                  >
                    Erasmus+
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-white transition hover:text-secondary"
                  >
                    Our Partners
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xl font-semibold leading-7 text-white">
                Legal
              </p>

              <ul className="mt-6 space-y-4 ">
                <li>
                  <Link
                    href="#"
                    className="text-white transition hover:text-secondary"
                  >
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-white transition hover:text-secondary"
                  >
                    Cookie Policy
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-white transition hover:text-secondary"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          className=" h-[1px]"
          style={{
            backgroundColor: "rgba(247, 245, 245, 0.1)",
          }}
        ></div>
        <div className="flex justify-center py-5">
          <h5 className=" text-white font-poppins text-center flex flex-col sm:block">
            Copyright &copy; 2025 Learn Plus. <span>All rights reserved.</span>
          </h5>
        </div>
      </div>
    </footer>
  );
}
