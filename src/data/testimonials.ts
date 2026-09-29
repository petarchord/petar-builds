import type { ImageMetadata } from "astro";
import LibbyAvatar from "../assets/libby-avatar.png";
import BehroozAvatar from "../assets/behrooz-avatar.jpeg";
import NikolaMirkovAvatar from "../assets/nikola-mirkov-avatar.jpeg";
import BranislavAvatar from "../assets/branislav-avatar.jpeg";
import NikolaMladenovicAvatar from "../assets/nikola-mladenovic-avatar.png";

export type Testimonial = {
  id: string;
  name: string;
  role: { en: string; sr: string };
  company: string;
  quote: { en: string; sr: string };
  avatar?: ImageMetadata;
};

export const testimonials: Testimonial[] = [
  {
    id: "libby",
    name: "Libby Schlesinger",
    avatar: LibbyAvatar,
    role: { en: "Founder & VP", sr: "Osnivač i VP" },
    company: "Paayed",
    quote: {
      en: "Petar consistently took initiative and approached his work with a strong sense of ownership. His contribution to our component library and the standardisation of UI across the platform gave us a more consistent frontend, better reusability, and stronger foundations as we continue to scale. Proactive, collaborative, and genuinely invested in improving the product beyond the tasks assigned to him.",
      sr: "Petar je dosledno preuzimao inicijativu i pristupao poslu sa jakim osećajem odgovornosti. Njegov doprinos našoj biblioteci komponenti i standardizaciji UI-a na celoj platformi doneo nam je konzistentniji frontend, bolju ponovnu upotrebljivost i čvršće temelje za dalji rast. Proaktivan, timski orijentisan i iskreno posvećen unapređenju proizvoda i van zadataka koji su mu dodeljeni.",
    },
  },
  {
    id: "behrooz",
    name: "Behrooz Shabani",
    avatar: BehroozAvatar,
    role: {
      en: "Solution Architect & Tech Lead",
      sr: "Solution Architect i Tech Lead",
    },
    company: "Paayed",
    quote: {
      en: "Petar was an outstanding software developer on our banking platform. He tackled technically demanding tasks with remarkable diligence, especially when standardizing our React components. His code reviews were consistently insightful and helped elevate the whole team’s quality.",
      sr: "Petar je bio izvanredan softverski inženjer na našoj bankarskoj platformi. Tehnički zahtevne zadatke rešavao je izuzetno temeljno, posebno pri standardizaciji naših React komponenti. Njegovi code review-i su uvek bili pronicljivi i podigli su kvalitet rada celog tima.",
    },
  },
  {
    id: "nikola-mirkov",
    name: "Nikola Mirkov",
    avatar: NikolaMirkovAvatar,
    role: { en: "Tech Lead", sr: "Tech Lead" },
    company: "Devtech",
    quote: {
      en: "On Nulia, Petar took a leading role on the frontend of one of the most technically demanding parts of the product, turning complex analytical requirements and large datasets into clear, interactive experiences with custom D3.js visualizations. He solved hard problems independently while keeping the user in mind. Someone I could rely on to take ownership and deliver.",
      sr: "Na Nulia projektu Petar je preuzeo vodeću ulogu na frontendu jednog od tehnički najzahtevnijih delova proizvoda, pretvarajući kompleksne analitičke zahteve i velike skupove podataka u jasna, interaktivna iskustva sa prilagođenim D3.js vizualizacijama. Teške probleme rešavao je samostalno, uvek misleći na korisnika. Neko na koga sam mogao da se oslonim da preuzme odgovornost i isporuči.",
    },
  },
  {
    id: "branislav",
    name: "Branislav Stojiljković",
    avatar: BranislavAvatar,
    role: {
      en: "Principal Software Engineer & Tech Lead",
      sr: "Principal Software Engineer i Tech Lead",
    },
    company: "Symphony",
    quote: {
      en: "Petar worked as a React front-end developer under my lead on a fast-paced initiative for a leading name in the fashion industry. He handled his components reliably, collaborated effectively across the team, and helped us meet our target deadlines.",
      sr: "Petar je radio kao React frontend developer pod mojim vođstvom na dinamičnom projektu za jedno od vodećih imena u modnoj industriji. Pouzdano je isporučivao svoje komponente, efikasno sarađivao sa timom i pomogao nam da ispoštujemo ciljane rokove.",
    },
  },
  {
    id: "nikola-mladenovic",
    name: "Nikola Mladenović",
    avatar: NikolaMladenovicAvatar,
    role: { en: "Project Manager", sr: "Projekt menadžer" },
    company: "Lioneve Media",
    quote: {
      en: "Petar excelled as a Frontend Engineer on multiple projects. His technical skills and attention to detail consistently resulted in user-friendly interfaces that exceeded expectations. A fantastic collaborator who communicates effectively and fosters a positive team environment.",
      sr: "Petar se istakao kao Frontend Engineer na više projekata. Njegove tehničke veštine i pažnja prema detaljima dosledno su rezultirale korisnički prijatnim interfejsima koji su premašili očekivanja. Sjajan saradnik koji jasno komunicira i gradi pozitivnu atmosferu u timu.",
    },
  },
];

export const getTestimonial = (id: string) =>
  testimonials.find((t) => t.id === id);
