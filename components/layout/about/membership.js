import Image from "next/image";
import { membership, membershipInfo } from "@/data/about";
import MembershipInfoCard from "@/components/ui/membership-info-card";
import Accordion from "@/components/ui/accordion";

export default function Membership() {
  return (
    <>
      <section id="membership" className="relative bg-primary">
        <Image
          src="/images/shape-23.png"
          alt="shape"
          width={356}
          height={170}
          className="absolute right-0 top-0"
        />
        <div className="mx-auto flex max-w-screen-xl py-28 text-white">
          <div className="pr-5 xl:w-1/2">
            <div className="mb-10">
              <p className="text-lg font-medium uppercase text-secondary">
                Join Us to Contribute, Learn, and Grow
              </p>
              <h2 className="mt-2 text-4xl font-extrabold leading-[60px] text-white xl:w-[80%]">
                Membership Eligibility and Opportunities
              </h2>
            </div>
            <MembershipInfoCard data={membershipInfo[0]} />
          </div>
          <div className="pl-5 xl:w-1/2">
            <MembershipInfoCard data={membershipInfo[1]} />
            <div className="mt-6">
              <MembershipInfoCard data={membershipInfo[2]} />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white bg-[url('/images/shape-15.png')] bg-cover bg-center bg-no-repeat">
        <div className="mx-auto max-w-screen-xl py-28">
          <div className="mb-20 text-center">
            <h2 className="text-center text-4xl font-extrabold leading-[60px] text-primary">
              Choose the Best Membership Plan for You
            </h2>
          </div>
          <div className="flex">
            <div className="relative mr-6 w-1/2">
              <Image
                src="/images/membership.jpg"
                fill
                alt="exam"
                className="overflow-hidden rounded-[20px] object-cover"
              />
            </div>
            <div className="ml-6 flex w-1/2 py-8">
              <Accordion data={membership} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
