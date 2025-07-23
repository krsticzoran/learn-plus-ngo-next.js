import Link from "next/link";
import Image from "next/image";
import { footerLinks, currentYear } from "@/data/footer-links";
import SocialIcons from "../ui/social-icons";

export default function Footer() {
  return (
    <footer className="bg-primary ">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8 xl:px-0">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="text-secondary">
              <Image
                src="../logofooter.png"
                width={112}
                height={58}
                alt="logo"
              />
            </div>

            <p className="mt-4 max-w-xs text-white">
              We are dedicated to promoting lifelong learning and education.
            </p>

            <SocialIcons className="mt-8 flex gap-6" />
          </div>

          <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-2 lg:mt-0">
            {footerLinks.map((group, index) => (
              <div key={index}>
                <p className="text-xl font-semibold leading-7 text-white">
                  {group[0]}
                </p>
                <ul className="mt-6 space-y-4">
                  {group.map(
                    (el, i) =>
                      i > 0 && (
                        <li key={i}>
                          <Link
                            href={el[1]}
                            className="text-white transition hover:text-secondary"
                          >
                            {el[0]}
                          </Link>
                        </li>
                      ),
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div
          className="h-[1px]"
          style={{
            backgroundColor: "rgba(247, 245, 245, 0.1)",
          }}
        ></div>
        <div className="flex justify-center py-5">
          <p className="flex flex-col text-center font-poppins text-white sm:block">
            {`Copyright  ${currentYear} Learn Plus.`}{" "}
            <span>All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
