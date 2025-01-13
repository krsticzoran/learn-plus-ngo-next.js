import Image from "next/image";
import MembershipTabs from "@/components/layout/about/tabs";

export default function Membership() {
  return (
    <>
      <section id="membership" className=" bg-primary relative ">
        <Image
          src="/images/shape-22.png"
          alt="shape"
          width={148}
          height={75}
          className="absolute top-0 left-0"
        />
        <Image
          src="/images/shape-23.png"
          alt="shape"
          width={356}
          height={170}
          className="absolute top-0 right-0"
        />
        <div className="max-w-screen-xl mx-auto  py-28 flex text-white ">
          <div className="xl:w-1/2 pr-5">
            <div className="xl:h-[180px]">
              <p className="text-lg font-medium uppercase text-secondary font-sla">
                Join Us to Contribute, Learn, and Grow
              </p>
              <h2 className="text-4xl font-extrabold leading-[60px] mt-2 xl:w-[80%]">
                Membership Eligibility and Opportunities
              </h2>
            </div>
            <p className="text-lg leading-7">
              Any natural person of Croatian or foreign citizenship and legal
              entity registered in Croatia who is interested in participating in
              the Association's activities and contributing to the achievement
              of the Association's goals, and who accepts the provisions of the
              Statute, can become a member of the Association.
            </p>
            <p className="text-lg leading-7 mt-4">
              One becomes a member of the Association by registering in the list
              of members and signing the application form accepting the Statute
              and other acts of the Association.
            </p>
          </div>
          <div className="xl:w-1/2 xl:pt-[180px] pl-5">
            <p className="text-lg leading-7 ">
              Persons under the age of 14 can become members with a written
              declaration signed by their parent(s) or legal guardian(s) as well
              as minors over the age of 14 where is necessary that their parents
              give us written consent.
            </p>
            <p className="text-lg leading-7 mt-4">
              As our member you can have many opportunities - mobilities, free
              seminars, study visits, field work and other activities.
            </p>
          </div>
        </div>
      </section>
      <MembershipTabs />
    </>
  );
}
