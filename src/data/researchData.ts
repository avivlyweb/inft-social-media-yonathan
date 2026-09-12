export interface AgeDistributionItem {
  ageGroup: string;
  percentage: number;
  color: string;
  description: string;
  topPlatforms: string[];
  screenTime: string;
  peakHours: string;
  primaryUse: string;
  risks: string[];
  opportunities: string[];
  recommendation: string;
}

export const ageDistributionData: AgeDistributionItem[] = [
  {
    ageGroup: "12–25 jaar",
    percentage: 18,
    color: "#06b6d4",
    description: "Zeer actieve gebruikers, primair op TikTok, Instagram en Snapchat",
    topPlatforms: ["TikTok", "Instagram", "Snapchat", "YouTube"],
    screenTime: "3 tot 4,5 uur per dag",
    peakHours: "16:00 – 23:30 (na school & 's avonds)",
    primaryUse: "Micro-video's, visuele chat (Snap/Insta DMs) en trends volgen",
    risks: [
      "FOMO (Fear of Missing Out) & algoritmedruk",
      "Slaaptekort door nachtelijk oneindig scrollen",
      "Vertekend zelfbeeld door gefilterde perfecte levens"
    ],
    opportunities: [
      "Creatieve expressie en videobewerking",
      "Directe verbinding met hechte vriendengroepen",
      "Inspiratie voor studie, hobby's en muziek"
    ],
    recommendation: "Stel na 21:30 een automatische schermtijdlimiet in en laad de telefoon buiten de slaapkamer op."
  },
  {
    ageGroup: "25–35 jaar",
    percentage: 18,
    color: "#3b82f6",
    description: "Hoge betrokkenheid via messaging, LinkedIn en Instagram",
    topPlatforms: ["Instagram", "LinkedIn", "WhatsApp", "YouTube"],
    screenTime: "2,5 tot 3,5 uur per dag",
    peakHours: "08:00 – 09:00 & 20:00 – 22:30",
    primaryUse: "Professioneel netwerken, dagelijks nieuws, lifestyle en messaging",
    risks: [
      "Werk-privé vervaging door continue bereikbaarheid",
      "Vergelijkingsdrang rondom carrière- en woonmijlpalen",
      "Cognitieve vermoeidheid door multitasking op meerdere platforms"
    ],
    opportunities: [
      "Professionele netwerkkansen en vacatures via LinkedIn",
      "Onderhouden van wereldwijde vriendschappen",
      "Snelle toegang tot vakinhoudelijke inzichten en podcasts"
    ],
    recommendation: "Schakel zakelijke meldingen 's avonds uit en hanteer bewuste offline focusblokken."
  },
  {
    ageGroup: "35–45 jaar",
    percentage: 17,
    color: "#6366f1",
    description: "Gebruik verdeeld over werkgroepen, Facebook en entertainment",
    topPlatforms: ["WhatsApp", "Facebook", "Instagram", "LinkedIn"],
    screenTime: "2 tot 3 uur per dag",
    peakHours: "12:30 – 13:30 & 20:30 – 22:00",
    primaryUse: "Gezinsorganisatie, buurt- en schoolgroepen, nieuws en ontspanning",
    risks: [
      "Stroom aan groepschats en continue organisatiestress",
      "Verdringing van tijd voor fysieke beweging en diepe rust",
      "Verspreiding van onvolledige of sensationele nieuwsberichten"
    ],
    opportunities: [
      "Efficiënte afstemming van familie- en verenigingsactiviteiten",
      "Lokale betrokkenheid via buurt- en schoolgemeenschappen",
      "Laagdrempelig contact met oude vrienden en studiegenoten"
    ],
    recommendation: "Demp grote niet-urgente chatgroepen en bewaak strikt schermvrije gezinsmomenten."
  },
  {
    ageGroup: "45–55 jaar",
    percentage: 16,
    color: "#8b5cf6",
    description: "Vooral gericht op actueel nieuws en contact met familie",
    topPlatforms: ["Facebook", "WhatsApp", "YouTube", "LinkedIn"],
    screenTime: "1,5 tot 2,5 uur per dag",
    peakHours: "18:00 – 21:30",
    primaryUse: "Nieuwsconsumptie, familiecontact, praktische klus- en kookvideo's",
    risks: [
      "Gevoeligheid voor misleidende advertenties en clickbait",
      "Oogvermoeidheid door langdurig zittend schermgebruik na kantooruren",
      "Verstoord slaapritme door fel schermlicht voor het slapengaan"
    ],
    opportunities: [
      "Deelnemen aan gespecialiseerde hobby- en interessefora",
      "Intensief contact met opgroeiende of uitwonende kinderen",
      "Toegang tot praktische handleidingen en doe-het-zelf content"
    ],
    recommendation: "Activeer avondfilters voor blauw licht en controleer opvallend sensationeel nieuws bij neutrale bronnen."
  },
  {
    ageGroup: "55–65 jaar",
    percentage: 14,
    color: "#a855f7",
    description: "Nieuwsconsumptie, interesseclubs en familiecontact",
    topPlatforms: ["WhatsApp", "Facebook", "YouTube", "Pinterest"],
    screenTime: "1 tot 2 uur per dag",
    peakHours: "10:00 – 12:00 & 19:00 – 21:00",
    primaryUse: "Familie-updates, recepten/tuinieren, actualiteiten en culturele thema's",
    risks: [
      "Phishing, vriendschapsfraude en onduidelijke abonnementsvalstrikken",
      "Passief scrollgedrag dat fysieke activiteit verdringt",
      "Moeite met navigeren door snelle interface- en privacywijzigingen"
    ],
    opportunities: [
      "Structurele verbinding die sociale eenzaamheid effectief tegengaat",
      "Verdieping in kunst, tuinieren, reizen en levensverhalen",
      "Herontdekken van vroegere kennissen en contact houden met familieleden"
    ],
    recommendation: "Stel tweestapsverificatie in op WhatsApp en deel nooit verificatiecodes of bankgegevens."
  },
  {
    ageGroup: "65–75 jaar",
    percentage: 11,
    color: "#ec4899",
    description: "Regelmatige communicatie via WhatsApp en gerichte groepen",
    topPlatforms: ["WhatsApp", "Facebook", "YouTube"],
    screenTime: "45 min tot 1,5 uur per dag",
    peakHours: "10:00 – 11:30 & 15:00 – 17:00",
    primaryUse: "Contact met (klein)kinderen, fotodelen, lokaal nieuws en verenigingen",
    risks: [
      "Oplichting via valse noodberichten ('hulpvraag van zoon/dochter met nieuw nummer')",
      "Onduidelijke privacy-voorwaarden en cookies",
      "Frustratie bij ingewikkelde app-updates en accountwachtwoorden"
    ],
    opportunities: [
      "Generatie-overstijgend contact met kinderen en kleinkinderen",
      "Dagelijks meekijken met foto's, schoolsuccessen en vakanties",
      "Eenvoudige toegang tot historische documentaires en muziek op YouTube"
    ],
    recommendation: "Spreek een vast controlebelletje af bij onbekende geldverzoeken en vraag hulp bij privacy-instellingen."
  },
  {
    ageGroup: "75+ jaar",
    percentage: 6,
    color: "#f43f5e",
    description: "Toegankelijk contact met kleinkinderen en familie",
    topPlatforms: ["WhatsApp", "Beeldbellen", "Facebook"],
    screenTime: "30 tot 60 minuten per dag",
    peakHours: "11:00 – 12:00 & 16:00 – 18:00",
    primaryUse: "Beeldbellen met naasten en het bekijken van gezinsfoto's",
    risks: [
      "Fysieke obstakels zoals kleine knoppen en te klein lettertype",
      "Kwetsbaarheid voor telefonische helpdeskfraude en spoofing",
      "Gevoel van buitensluiting wanneer diensten uitsluitend digitaal worden aangeboden"
    ],
    opportunities: [
      "Onmisbare sociale levenslijn tegen sociaal isolement en eenzaamheid",
      "Live meegenieten van verjaardagen en mijlpalen zonder te hoeven reizen",
      "Gevoel van nabijheid en geborgenheid met familieleden op afstand"
    ],
    recommendation: "Stel grotere systeemletters in en programmeer belangrijke familiecontacten direct op het startscherm."
  },
];

export interface MotivationItem {
  name: string;
  shortName: string;
  percentage: number;
  icon: string;
  description: string;
}

export const motivationData: MotivationItem[] = [
  { name: "Contacten met vrienden & familie", shortName: "Vrienden & Familie", percentage: 84, icon: "Users", description: "Blijven verbinden met naasten en sociale kringen" },
  { name: "Vermaak & ontspanning", shortName: "Vermaak & Ontspanning", percentage: 76, icon: "Sparkles", description: "Leuke video's, memes en ontstressen na school of werk" },
  { name: "Nieuws & informatie", shortName: "Nieuws & Actualiteiten", percentage: 62, icon: "Newspaper", description: "Direct op de hoogte blijven van maatschappelijke updates" },
  { name: "Creatieve expressie & inspiratie", shortName: "Creatieve Expressie", percentage: 48, icon: "Palette", description: "Zelf content creëren, foto's, dansjes en design" },
  { name: "Studie, werk & educatie", shortName: "Studie & Educatie", percentage: 39, icon: "BookOpen", description: "Samenwerken voor schoolprojecten en vakinhoudelijke kennis" },
];

export interface ImpactComparisonItem {
  aspect: string;
  shortAspect: string;
  positief: number;
  negatief: number;
  description: string;
}

export const impactComparisonData: ImpactComparisonItem[] = [
  {
    aspect: "Contact & Verbinding",
    shortAspect: "Contact",
    positief: 88,
    negatief: 12,
    description: "88% ervaart sterkere banden met vrienden en familie; slechts 12% ervaart contact als oppervlakkig."
  },
  {
    aspect: "Nieuwstoegang",
    shortAspect: "Nieuws",
    positief: 79,
    negatief: 21,
    description: "79% blijft direct op de hoogte van actualiteiten; 21% ervaart nieuwsstress of overdosis."
  },
  {
    aspect: "Stress & Schermtijd",
    shortAspect: "Stress/Tijd",
    positief: 18,
    negatief: 82,
    description: "Liefst 82% ervaart stress of schuldgevoel bij te hoge schermtijd en notificaties."
  },
  {
    aspect: "Slaap & Concentratie",
    shortAspect: "Slaap/Focus",
    positief: 14,
    negatief: 86,
    description: "86% merkt concentratieverlies en een verstoord slaapritme door nachtelijk telefoongebruik."
  },
  {
    aspect: "Zelfbeeld / Verwachtingen",
    shortAspect: "Zelfbeeld",
    positief: 26,
    negatief: 74,
    description: "74% kampt met onzekerheid of FOMO door gemanipuleerde ideaalbeelden op sociale platforms."
  },
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
