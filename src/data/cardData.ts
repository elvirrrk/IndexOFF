export interface CardData {
  id: number;
  title: string;
  img?: string;
  link: string;
  tag?: string;
}
// foodAndDrinks, stuff,
export const Cards: CardData[] = [
  {
    id: 0,
    title: "Индекс борща",
    // img: "",
    link: "borsch",
    tag: "foodAndDrinks",
  },
  {
    id: 1,
    title: "Индекс блинов",
    // img: "",
    link: "pancake",
    tag: "foodAndDrinks",
  },
  {
    id: 2,
    title: "Индекс оливье",
    // img: "",
    link: "olivier",
    tag: "foodAndDrinks",
  },
  {
    id: 3,
    title: "Индекс Биг Мака",
    // img: "",
    link: "bigMac",
    tag: "foodAndDrinks",
  },
  {
    id: 4,
    title: "Индекс латте",
    // img: "",
    link: "latte",
    tag: "foodAndDrinks",
  },
  {
    id: 5,
    title: "Индекс кофе с бутербродом",
    // img: "",
    link: "coffeeAndSandwich",
    tag: "foodAndDrinks",
  },
  {
    id: 6,
    title: "Индекс Lego",
    // img: "",
    link: "lego",
    tag: "stuff",
  },
  {
    id: 7,
    title: "Индекс IPhone",
    // img: "",
    link: "iphone",
    tag: "stuff",
  },
  {
    id: 8,
    title: "Индекс помады",
    // img: "",
    link: "lipstick",
    tag: "stuff",
  },
  {
    id: 9,
    title: "Индекс картонных коробок",
    // img: "",
    link: "box",
    tag: "stuff",
  },
  {
    id: 10,
    title: "Индекс «RV»",
    // img: "",
    link: "rv",
    tag: "stuff",
  },
  {
    id: 11,
    title: "Индекс свиданий",
    // img: "",
    link: "dates",
    tag: "event",
  },
];
