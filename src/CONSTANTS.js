// Importing components
import Hero from "./pages/Home/components/Hero";
import PromoCode from "./pages/Home/components/PromoCode";
import Products from "./pages/Home/components/Products";
import ConnectWithUs from "./pages/Home/components/ConnectWithUs";
import MeetChef from "./pages/Home/components/MeetChef";

// Importing backgrounds
import bgHero from "./assets/backgrounds/bgHero.jpg";
import promoBg from "./assets/backgrounds/promoBg.jpg";
import promoCodeBg from "./assets/backgrounds/promoCodeBg.jpg";
import collection1 from "./assets/backgrounds/collection1.jpg";
import collection2 from "./assets/backgrounds/collection2.jpg";
import collection3 from "./assets/backgrounds/collection3.jpg";
import collection4 from "./assets/backgrounds/collection4.jpg";
import collage1 from "./assets/backgrounds/collage1.jpg";
import collage2 from "./assets/backgrounds/collage2.jpg";
import collage3 from "./assets/backgrounds/collage3.jpg";
import collage4 from "./assets/backgrounds/collage4.jpg";

// Importing SVGs
import { ReactComponent as HamBurger } from "./assets/svgs/hamburger.svg";
import { ReactComponent as Footer1 } from "./assets/svgs/footer1.svg";
import { ReactComponent as Footer2 } from "./assets/svgs/footer2.svg";
import { ReactComponent as Footer3 } from "./assets/svgs/footer3.svg";
import { ReactComponent as SignH } from "./assets/svgs/signH.svg";
import { ReactComponent as Product1 } from "./assets/svgs/product1.svg";
import { ReactComponent as Product2 } from "./assets/svgs/product2.svg";
import { ReactComponent as Product3 } from "./assets/svgs/product3.svg";
import { ReactComponent as Product4 } from "./assets/svgs/product4.svg";
import { ReactComponent as LeftDouble } from "./assets/svgs/leftDouble.svg";
import { ReactComponent as RightDouble } from "./assets/svgs/rightDouble.svg";
import { ReactComponent as Leaf } from "./assets/svgs/leaf.svg";
import { ReactComponent as Close } from "./assets/svgs/close.svg";
import { ReactComponent as Bag } from "./assets/svgs/bag.svg";
import { ReactComponent as Favorite } from "./assets/svgs/favorite.svg";


export {
  HamBurger,
  Footer1,
  Footer2,
  Footer3,
  SignH,
  Product1,
  Product2,
  Product3,
  Product4,
  LeftDouble,
  RightDouble,
  Leaf,
  Close,
  Favorite,
  Bag,
  // images
  collection1,
  collection2,
  collection3,
  collection4,

};
export const PRODUCTS = [
  {
    title: "CINNAMON HONEY",
    mrp: "$12.00",
    price: "$9.00",
    Product: Product1,
  },
  {
    title: "COCONUT OIL",
    mrp: "$20.00 ",
    price: "$15.00",
    Product: Product2,
  },
  {
    title: "MANGO HONEY",
    mrp: "$9.00",
    price: "$6.00",
    Product: Product3,
  },
  {
    title: "HONEY HABANERO",
    mrp: "$12.00",
    price: "$9.00",
    Product: Product4,
  },
];

export const HOME_TITLES =[
  {
    id: "hero",
    title: "HOME",
  },
  {
    id: "products",
    title: "PRODUCTS",
  },
  {
    id: "meetChef",
    title: "MEET CHEF MATT",
  },
  {
    id: "faq",
    title: "FAQ",
  },
  {
    id: "connectWithUs",
    title: "CONNECT WITH US",
  },

]
export const HOME_SECTIONS = [
  {
    id: "hero",
    Component: Hero,
    background: bgHero,
  },
  {
    id: "products",
    Component: Products,
    background: "",
  },
  {
    id: "promoCode",
    Component: PromoCode,
    background: promoCodeBg,
  },
  {
    id: "meetChef",
    Component: MeetChef,
    background: promoCodeBg,
  },
  {
    id: "connectWithUs",
    Component: ConnectWithUs,
    background: promoBg,
  },
];
export const HOME_COLLAGE_IMAGES = [
  collage1,
  collage2,
  collage3,
  collage4
]
export const FOOTER = [
  {
    title: "FREE SHIPPING WORLDWIDE",
    description: "Guaranteed Delivery",
    Logo: Footer1,
  },
  {
    title: "24/7 CUSTOMER SERVICE",
    description: "Text Us 24/7 at 070-7782-9137",
    Logo: Footer2,
  },
  {
    title: "QUALITY GUARANTEE!",
    description: "Send Within 30 Days",
    Logo: Footer3,
  },
];
