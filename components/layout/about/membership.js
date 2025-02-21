import Image from "next/image";
import { membership, membershipInfo } from "@/data/about";
import MembershipInfoCard from "@/components/ui/membership-info-card";
import Accordion from "@/components/ui/accordion";

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
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold leading-[60px]   text-center text-primary">
              Choose the Best Membership Plan for You
            </h2>
          </div>
          <div className="flex">
            <div className="relative w-1/2 mr-6">
              <Image
                src="/images/membership.jpg"
                fill
                alt="exam"
                className="rounded-[20px] object-cover overflow-hidden"
              />
            </div>
            <div className="w-1/2  ml-6 flex">
              <Accordion data={membership} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
