export interface AgeDistributionItem {
  ageGroup: string;
  percentage: number;
  color: string;
  description: string;
}

export const ageDistributionData: AgeDistributionItem[] = [
  { ageGroup: "12–25 jaar", percentage: 18, color: "#06b6d4", description: "Zeer actieve gebruikers, primair op TikTok, Instagram en Snapchat" },
  { ageGroup: "25–35 jaar", percentage: 18, color: "#3b82f6", description: "Hoge betrokkenheid via messaging, LinkedIn en Instagram" },
  { ageGroup: "35–45 jaar", percentage: 17, color: "#6366f1", description: "Gebruik verdeeld over werkgroepen, Facebook en entertainment" },
  { ageGroup: "45–55 jaar", percentage: 16, color: "#8b5cf6", description: "Vooral gericht op actueel nieuws en contact met familie" },
  { ageGroup: "55–65 jaar", percentage: 14, color: "#a855f7", description: "Nieuwsconsumptie, interesseclubs en familiecontact" },
  { ageGroup: "65–75 jaar", percentage: 11, color: "#ec4899", description: "Regelmatige communicatie via WhatsApp en gerichte groepen" },
  { ageGroup: "75+ jaar", percentage: 6, color: "#f43f5e", description: "Toegankelijk contact met kleinkinderen en familie" },
];

export const motivationData = [
  { name: "Contacten met vrienden & familie", percentage: 84, icon: "Users" },
  { name: "Vermaak & ontspanning", percentage: 76, icon: "Sparkles" },
  { name: "Nieuws & informatie", percentage: 62, icon: "Newspaper" },
  { name: "Creatieve expressie & inspiratie", percentage: 48, icon: "Palette" },
  { name: "Studie, werk & educatie", percentage: 39, icon: "BookOpen" },
];

export const impactComparisonData = [
  { aspect: "Contact & Verbinding", positief: 88, negatief: 12 },
  { aspect: "Nieuwstoegang", positief: 79, negatief: 21 },
  { aspect: "Stress & Schermtijd", positief: 18, negatief: 82 },
  { aspect: "Slaap & Concentratie", positief: 14, negatief: 86 },
  { aspect: "Zelfbeeld / Verwachtingen", positief: 26, negatief: 74 },
];

export const prosAndCons = {
  voordelen: [
    {
      title: "Blijf in contact met iedereen",
      description: "Directe en laagdrempelige verbinding met vrienden, klasgenoten en familie wereldwijd.",
      badge: "Sociaal",
    },
    {
      title: "Directe toegang tot nieuws & updates",
      description: "Binnen seconden op de hoogte van actuele gebeurtenissen, maatschappelijke trends en schoolupdates.",
      badge: "Kennis",
    },
    {
      title: "Leuke & creatieve mogelijkheden",
      description: "Platformen stimuleren creativiteit met video editing, fotografie, design en digitale expressie.",
      badge: "Creatief",
    },
    {
      title: "Kan motiveren & inspireren",
      description: "Inspiratie opdoen voor sport, hobby's, schoolprojecten en toekomstige carrières.",
      badge: "Groei",
    },
  ],
  nadelen: [
    {
      title: "Te veel schermtijd leidt tot stress",
      description: "Continue prikkels en de 'fear of missing out' (FOMO) zorgen voor cognitieve overbelasting.",
      badge: "Mentaal",
    },
    {
      title: "Minder tijd voor offline activiteiten",
      description: "Urenlang scrollen verdringt sport, beweging, huiswerk en écht face-to-face contact.",
      badge: "Tijdsbesteding",
    },
    {
      title: "Invloed op slaap & concentratie",
      description: "Blauw licht en late meldingen verstoren het melatonineniveau en verminderen focus overdag.",
      badge: "Fysiek",
    },
    {
      title: "Onrealistische verwachtingen",
      description: "Gemanipuleerde en perfecte beelden kunnen een vertekend zelfbeeld of onzekerheid creëren.",
      badge: "Perceptie",
    },
  ],
};

export const authorInfo = {
  name: "Yonathan Hidrian",
  class: "Klas 4m3",
  course: "Informatietechnologie (INFT)",
  assignment: "Opdracht 4: Website van Onderzoeksposter InDesign",
  academicYear: "2026–2027",
  quote: "Sociale media kan leuk en handig zijn, maar het is belangrijk om een goede balans te vinden. Gebruik het bewust, zodat het jouw leven verrijkt en niet bepaalt.",
};
