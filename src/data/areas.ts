export type FocusArea = {
  slug: string;
  number: string;
  title: string;
  short: string;
  description: string;
  highlights: string[];
};

export const focusAreas: FocusArea[] = [
  {
    slug: "education",
    number: "01",
    title: "Education",
    short:
      "Igniting young minds through digital literacy, scholarships, and rural school revitalization programs.",
    description:
      "We believe a classroom is the first field where a nation is sown. Our education work brings learning material, trained mentors, and digital tools to village schools that have long been left out of the country's growth story.",
    highlights: [
      "Scholarships for first-generation learners",
      "Digital literacy labs in rural schools",
      "After-school mentoring and remedial classes",
      "Teacher training and learning-material support",
    ],
  },
  {
    slug: "women-empowerment",
    number: "02",
    title: "Women's Rights & Empowerment",
    short:
      "Creating self-reliant micro-economies led by local women collectives and legal awareness initiatives.",
    description:
      "When a woman earns, learns, and knows her rights, an entire village shifts. We organise self-help groups, run skill workshops, and hold legal awareness camps so women can lead their own livelihoods.",
    highlights: [
      "Self-help groups and micro-enterprise seed support",
      "Tailoring, craft, and agri-processing skill training",
      "Legal awareness and rights counselling camps",
      "Safe spaces and survivor support networks",
    ],
  },
  {
    slug: "environment",
    number: "03",
    title: "Environment Protection & Disaster Relief",
    short:
      "Protecting local ecosystems, planting trees, and preparing communities for climate resilience.",
    description:
      "From plantation drives to flood response, we work with villages to protect the land that feeds them and to stand beside them when nature turns harsh.",
    highlights: [
      "Native tree plantation and green belt care",
      "Water body restoration and rainwater harvesting",
      "Emergency relief kits during floods and cyclones",
      "Community disaster-preparedness training",
    ],
  },
  {
    slug: "underprivileged-support",
    number: "04",
    title: "Support for Underprivileged People",
    short:
      "Direct aid and structural support for those living on the margins of society.",
    description:
      "Dignity comes before charity. We provide food, clothing, shelter linkage, and documentation help so families on the margins can access what is already rightfully theirs.",
    highlights: [
      "Ration and winter relief distribution",
      "Government scheme and document facilitation",
      "Shelter and rehabilitation linkage",
      "Livelihood grants for daily-wage families",
    ],
  },
  {
    slug: "animal-welfare",
    number: "05",
    title: "Animal Welfare",
    short:
      "Providing compassionate care, rescue, and veterinary services to voiceless lives.",
    description:
      "Compassion cannot be selective. Our volunteers rescue injured street animals, run sterilization and vaccination drives, and maintain feeding points through harsh seasons.",
    highlights: [
      "Street animal rescue and first-aid response",
      "Sterilization and anti-rabies vaccination drives",
      "Seasonal feeding and water stations",
      "Awareness programmes in schools",
    ],
  },
  {
    slug: "health-awareness",
    number: "06",
    title: "Health Awareness & Social Welfare",
    short:
      "Bridging the healthcare gap in remote villages with mobile clinics and preventive health camps.",
    description:
      "Distance should not decide who survives. We bring doctors, diagnostics, and preventive health knowledge to villages far from the nearest hospital.",
    highlights: [
      "Mobile health camps and free check-ups",
      "Maternal and child nutrition programmes",
      "Blood donation and eye-care drives",
      "Menstrual health and hygiene awareness",
    ],
  },
  {
    slug: "rural-development",
    number: "07",
    title: "Rural & Community Development",
    short:
      "Revitalizing the village heart of India through infrastructure, clean water, and vocational training.",
    description:
      "Our long-term work builds the everyday infrastructure of village life — clean water, working sanitation, community spaces, and heritage-based crafts that keep livelihoods rooted at home.",
    highlights: [
      "Clean drinking water and sanitation projects",
      "Village infrastructure and community halls",
      "Heritage craft and vocational training",
      "Farmer collectives and market linkage",
    ],
  },
];

export const getArea = (slug: string) =>
  focusAreas.find((area) => area.slug === slug);
