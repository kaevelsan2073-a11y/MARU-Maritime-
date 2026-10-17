// Central place for company details. Everything here is confirmed by the
// company; do not add claims that have not been provided by Maru Maritime.
export const site = {
  name: "Maru Maritime",
  legalName: "Maru Maritime LLC",
  tagline: "Anchored in Trust | Driven by Excellence",
  label: "Maritime Asset Management",
  // Company description, as provided by Maru Maritime.
  description:
    "Maru Maritime creates unique opportunities in ship owning, commercial, technical and overall end-to-end asset management throughout the life cycle of a ship.",
  relationships:
    "Our deep relationships in Japan, Korea and China, with our presence in the United States, give us the advantage to bridge the gap efficiently between the seller, buyer, operator and charterer.",
  // In order of priority.
  services: ["Asset management", "Commercial management", "Chartering", "Turnkey services"],
  // Anchors on the Services page, matching the order above.
  serviceIds: ["asset-management", "commercial-management", "chartering", "turnkey-services"],
  parties: ["Seller", "Buyer", "Operator", "Charterer"],
  relationshipRegions: ["Japan", "Korea", "China"],
  presence: "United States",
  location: "CT, USA",
  email: "ships@marumaritime.com",
  disclaimer:
    "Information on this website is for general information only and does not constitute an offer or solicitation of any investment.",
};

export const nav = [
  { href: "/about/", label: "About" },
  { href: "/services/", label: "Services" },
  { href: "/investors/", label: "Investors & Partners" },
];
