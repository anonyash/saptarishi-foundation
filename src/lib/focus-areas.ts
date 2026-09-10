export type FocusArea = {
  slug: string;
  number: string;
  title: string;
  short: string;
  intro: string;
  work: string[];
  outcomes: { value: string; label: string }[];
};

export const focusAreas: FocusArea[] = [
  {
    slug: "education",
    number: "01",
    title: "Education",
    short:
      "Igniting young minds through digital literacy, scholarships, and rural school revitalization programs.",
    intro:
      "Education is the first root we plant. We work with government schools, village learning centres, and families to make sure no child steps away from learning for want of a book, a teacher, or a meal.",
    work: [
      "After-school learning centres in under-served villages",
      "Scholarships and school kits for first-generation learners",
      "Digital literacy labs and teacher training",
      "Bridge courses for children returning to school",
    ],
    outcomes: [
      { value: "180+", label: "Learning Centres" },
      { value: "12k", label: "Children Enrolled" },
      { value: "82%", label: "Literacy Jump" },
    ],
  },
  {
    slug: "women-empowerment",
    number: "02",
    title: "Women's Rights & Empowerment",
    short:
      "Creating self-reliant micro-economies led by local women collectives and legal awareness initiatives.",
    intro:
      "When a woman earns, decides, and speaks freely, an entire village changes shape. We build collectives, skills, and legal awareness so women lead their own progress.",
    work: [
      "Self-help groups and micro-enterprise seed support",
      "Tailoring, handicraft, and food-processing skill training",
      "Legal aid clinics and rights awareness camps",
      "Safety and anti-violence community programmes",
    ],
    outcomes: [
      { value: "640", label: "Women Collectives" },
      { value: "9,300", label: "Women Trained" },
      { value: "2,100", label: "Enterprises Started" },
    ],
  },
  {
    slug: "environment-disaster-relief",
    number: "03",
    title: "Environment Protection & Disaster Relief",
    short:
      "Protecting local ecosystems, planting trees, and preparing communities for climate resilience.",
    intro:
      "From reviving village ponds to reaching flood-hit families within hours, we protect the land that sustains people and stand beside them when it turns hostile.",
    work: [
      "Native tree plantation and forest regeneration drives",
      "Water body revival and rainwater harvesting",
      "Relief kits, shelter, and clean water after disasters",
      "Village-level disaster preparedness training",
    ],
    outcomes: [
      { value: "125k", label: "Trees Planted" },
      { value: "70+", label: "Water Bodies Revived" },
      { value: "24 hr", label: "Relief Response" },
    ],
  },
  {
    slug: "underprivileged-support",
    number: "04",
    title: "Support for Underprivileged People",
    short:
      "Direct aid and structural support for those living on the margins of society.",
    intro:
      "Dignity before charity. We provide immediate relief while helping families build the documents, skills, and entitlements that lift them out of dependence.",
    work: [
      "Ration, clothing, and winter relief distribution",
      "Help accessing government schemes and identity documents",
      "Shelter support for homeless and migrant families",
      "Livelihood placement for daily-wage workers",
    ],
    outcomes: [
      { value: "48k", label: "Families Supported" },
      { value: "15k", label: "Scheme Linkages" },
      { value: "310", label: "Relief Camps" },
    ],
  },
  {
    slug: "animal-welfare",
    number: "05",
    title: "Animal Welfare",
    short:
      "Providing compassionate care, rescue, and veterinary services to voiceless lives.",
    intro:
      "Compassion cannot be selective. Our rescue teams, feeding points, and mobile veterinary units care for street and working animals across towns and villages.",
    work: [
      "Street animal rescue and emergency treatment",
      "Sterilisation and anti-rabies vaccination drives",
      "Summer water bowls and community feeding points",
      "Cattle and working-animal health camps",
    ],
    outcomes: [
      { value: "7,400", label: "Animals Treated" },
      { value: "3,100", label: "Sterilisations" },
      { value: "90", label: "Feeding Points" },
    ],
  },
  {
    slug: "health-social-welfare",
    number: "06",
    title: "Health Awareness & Social Welfare",
    short:
      "Bridging the healthcare gap in remote villages with mobile clinics and preventive health camps.",
    intro:
      "Most rural illness is preventable and most rural suffering is late diagnosis. We bring doctors, screening, and awareness to the doorstep.",
    work: [
      "Mobile clinics and free diagnostic camps",
      "Maternal and child nutrition programmes",
      "Menstrual health and hygiene awareness",
      "Blood donation and eye-care drives",
    ],
    outcomes: [
      { value: "520", label: "Health Camps" },
      { value: "96k", label: "Patients Screened" },
      { value: "38", label: "Villages Covered Monthly" },
    ],
  },
  {
    slug: "rural-community-development",
    number: "07",
    title: "Rural & Community Development",
    short:
      "Revitalizing the village heart of India through infrastructure, clean water, and heritage-based vocational training.",
    intro:
      "A village thrives when its water runs clean, its crafts earn well, and its youth need not leave. We invest in the shared infrastructure that holds a community together.",
    work: [
      "Clean drinking water and sanitation projects",
      "Solar lighting for streets and community spaces",
      "Heritage craft and vocational training hubs",
      "Farmer producer groups and organic farming support",
    ],
    outcomes: [
      { value: "450+", label: "Villages Reached" },
      { value: "1.2M", label: "Lives Impacted" },
      { value: "140", label: "Water Projects" },
    ],
  },
];

export const getFocusArea = (slug: string) =>
  focusAreas.find((area) => area.slug === slug);
