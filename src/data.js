import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

import { ReactComponent as Bale } from "./images/bale.svg";
import { ReactComponent as Aparat } from "./images/aparat.svg";
import { ReactComponent as Eitaa } from "./images/eitaa.svg";

export const pageLinks = [
  { id: 1, href: "#home", text: "خانه" },
  { id: 2, href: "#about", text: "درباره ما" },
  { id: 3, href: "#services", text: "خدمات" },
  { id: 4, href: "#tours", text: "تورها" },
];
export const socialLinks = [
  { id: 1, href: "https://web.bale.ai", Icon: Bale },
  { id: 2, href: "https://www.aparat.com", Icon: Aparat },
  { id: 3, href: "https://www.eitaa.com", Icon: Eitaa },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "پس انداز پول شما",
    text: "با قیمت های مرقون به صرفه ما میتوانید پول خود را برای سال های متمادی جهت شرکت در تور های مختلف پس انداز کنید.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "طبیعت گردی بی وقفه",
    text: "از گشت و گذار بی وقفه در  طبیعت لذت ببرید و آنقدر راه بروید که جانتان جلوی چشمتان بیاید.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "راحتی فوق العاده",
    text: "خودتان را به ما بسپارید و درگیر کاغذ بازی و دوندگی های خسته کننده نشوید. یک گوشه لم  بدهید و حالش را ببرید.",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "26ام آبان 1404",
    title: "ماجراجویی در تبت",
    info: `در سرزمین بلند و خاموش Tibet، جایی که آسمان به زمین نزدیک‌تر از هر جای دیگری به نظر می‌رسد، بادهای سرد از میان قله‌های پوشیده از برف عبور می‌کنند و دعاها در پرچم‌های رنگی در هوا شناور می‌شوند.ماجراجویی در تبت یعنی قدم‌زدن روی جاده‌هایی که در سکوت کوهستان گم می‌شوند، جایی که هر نفس، یادآور عظمت طبیعت و کوچکی انسان است.`,
    location: "چین",
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: "12ام مهر 1405",
    title: "بهترین جاوا",
    info: "جزیره Java یکی از جذاب‌ترین مقاصد گردشگری جنوب‌شرق آسیاست که با آتشفشان‌های فعال، معابد تاریخی مثل بوروبودور و فرهنگ غنی‌اش، تجربه‌ای فراموش‌نشدنی برای سفر فراهم می‌کند.",
    location: "اندونزی",
    duration: 11,
    cost: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: "30ام بهمن 1399",
    title: "هنگ کنگ را جستجو کنید",
    info: "گردشگری در هنگ کنگ ترکیبی از آسمان‌خراش‌های مدرن، بازارهای شلوغ، و طبیعت کوهستانی و ساحلی است که تجربه‌ای پرانرژی و متنوع برای مسافران ایجاد می‌کند.",
    location: "هنگ کنگ",
    duration: 8,
    cost: 5000,
  },
  {
    id: 4,
    image: tour4,
    date: "5ام شهریور 1400",
    title: "زیبایی های کنیا",
    info: "زیبایی‌های کنیا در ترکیب شگفت‌انگیز دشت‌های ساوانا، حیات‌وحش بی‌نظیر در سافاری‌های ماسای مارا و غروب‌های طلایی آفریقایی خلاصه می‌شود که هر بیننده‌ای را مسحور می‌کند.",
    location: "کنیا",
    duration: 20,
    cost: 3300,
  },
];
