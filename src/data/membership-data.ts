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
    name: "Membership Fee",
    id: "membership-fee",
    value: `
    For the year 2025 the membership fee is 10 EUR.

    IBAN: HR97 2402006 1101245199

    For membership just type "Članarina za - ime člana - za 2025. godinu" or "Membership for - a member's name - for 2025"
    `,
  },
];
