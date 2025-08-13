type MembershipItem = {
  name: string;
  value: string;
  id: string;
};

export const membershipData: MembershipItem[] = [
  {
    name: "General Membership Info",
    id: "general-membership-info",
    value: `
Any natural person of Croatian or foreign citizenship and legal entity registered in Croatia who is interested in participating in the Association's activities and contributing to the achievement of the Association's goals, and who accepts the provisions of the Statute, can become a member of the Association.

One becomes a member of the Association by registering in the list of members and signing the application form accepting the Statute and other acts of the Association.

Persons under the age of 14 can become members with a written declaration signed by their parent(s) or legal guardian(s) as well as minors over the age of 14 where it is necessary that their parents give us written consent.

As our member you can have many opportunities – mobilities, free seminars, study visits, field work and other activities.
    `,
  },
  {
    name: "Regular Membership",
    id: "regular-membership",
    value: `
Regular members are those members who actively participate in the activities and programs of our association.

Regular members can be adults, persons who participated in the founding of the Association, their family members and friends.

Regular members are making the Assembly of the Association and actively participate in the activities of the Association, while complying with the Statute and all the rules and guidelines of the Association and regularly paying the membership fee.
    `,
  },
  {
    name: "Associate Membership",
    id: "associate-membership",
    value: `
Associate members are those members who occasionally participate in the Association's activities or help the Association achieve its goals with financial or other support.

Associate members are natural and legal persons of legal age and minors. Associate members also pay regular membership fee.


    `,
  },
  {
    name: "Honorary Membership",
    id: "honorary-membership",
    value: `
Honorary members are persons among the members of the Association, other organizations, academic communities in Croatia and abroad who significantly contributed to the work and reputation of the Association and promote the activity and value of the Association through their activities.

They are appointed exclusively by the Assembly and they are not obliged to pay membership fees.
    `,
  },
  {
    name: "Membership Fee",
    id: "membership-fee",
    value: `For the year 2025 the membership fee is 10 EUR.`,
  },
];
