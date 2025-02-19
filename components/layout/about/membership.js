import Image from "next/image";
import { membership, membershipInfo } from "@/data/about";
import MembershipInfoCard from "@/components/ui/membership-info-card";

export default function Membership() {
  return (
    <>
      <section id="membership" className=" bg-primary relative ">
        <Image
          src="/images/shape-23.png"
          alt="shape"
          width={356}
          height={170}
          className="absolute top-0 right-0"
        />
        <div className="max-w-screen-xl mx-auto  py-28 flex text-white ">
          <div className="xl:w-1/2 pr-5">
            <div className="mb-10">
              <p className="text-lg font-medium uppercase text-secondary ">
                Join Us to Contribute, Learn, and Grow
              </p>
              <h2 className="text-4xl font-extrabold leading-[60px] mt-2 xl:w-[80%] text-white">
                Membership Eligibility and Opportunities
              </h2>
            </div>
            <MembershipInfoCard data={membershipInfo[0]} />
          </div>
          <div className="xl:w-1/2  pl-5">
            <MembershipInfoCard data={membershipInfo[1]} />
            <div className="mt-6">
              <MembershipInfoCard data={membershipInfo[2]} />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white bg-[url('/images/shape-15.png')] bg-cover bg-center bg-no-repeat ">
        <div className="max-w-screen-xl mx-auto py-28  ">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold leading-[60px]   text-center text-primary">
              Choose the Best Membership Plan for You
            </h2>
            <h3 className="text-2xl  font-semibold  mt-2 text-pretty">
              For the year 2025 the
              <span className="text-secondary"> membership fee </span>is 10 EUR
            </h3>
          </div>

          <div className="flex  space-x-8">
            {membership.map((el) => (
              <div
                className="bg-white shadow-md rounded-[20px] py-16 px-8  flex-1"
                style={{
                  boxShadow: "0px 0px 30px 1px rgba(0, 0, 0, 0.15)",
                }}
              >
                <h3 className="text-xl font-semibold text-primary mb-4 uppercase">
                  {el.question}
                </h3>
                <p className="text-gray-one text-lg">{el.answer}</p>
                <p className="text-gray-one text-lg mt-2">{el.secondAnswer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
