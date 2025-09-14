export interface Channel {
  id: string;
  name: string;
  logo: string;
  category: string;
  provider: string;
}

export const channels: Channel[] = [
  {
    id: "011",
    name: "Asia Cup Hindi",
    logo: "https://jiotvimages.cdn.jio.com/dare_images/images/channel/ebe899403cceb7bb12a717884691e5b3.png",
    category: "Sports",
    provider: "SK Tech"
  },
  {
    id: "012",
    name: "Asia Cup English",
    logo: "https://jiotvimages.cdn.jio.com/dare_images/images/channel/3c41d4783b4b68ec340be1bee65bab95.png",
    category: "Sports",
    provider: "SK Tech"
  },
  {
    id: "013",
    name: "Asia Cup Tamil",
    logo: "https://jiotvimages.cdn.jio.com/dare_images/images/channel/80ab248b03658ffaddfebadb51eeec0b.png",
    category: "Sports",
    provider: "SK Tech"
  },
  {
    id: "014",
    name: "Asia Cup Telugu",
    logo: "https://jiotvimages.cdn.jio.com/dare_images/images/channel/8d500b9909f52f536a956e60caddb08e.png",
    category: "Sports",
    provider: "SK Tech"
  },
  {
    id: "1142",
    name: "Star Sports 1",
    logo: "https://jiotvimages.cdn.jio.com/dare_images/images/Star_Sports_1.png",
    category: "Sports",
    provider: "SK Tech"
  },
  {
    id: "1141",
    name: "Star Sports 2",
    logo: "https://jiotvimages.cdn.jio.com/dare_images/images/Star_Sports_2.png",
    category: "Sports",
    provider: "SK Tech"
  },
  {
    id: "1108",
    name: "Star Sports 1 Hindi HD",
    logo: "https://jiotvimages.cdn.jio.com/dare_images/images/Star_Sports_HD1_Hindi.png",
    category: "Sports",
    provider: "SK Tech"
  },
  {
    id: "1123",
    name: "Star Sports Select 1",
    logo: "https://jiotvimages.cdn.jio.com/dare_images/images/Star_Sports_Select_1.png",
    category: "Sports",
    provider: "SK Tech"
  },
  {
    id: "news1",
    name: "CNN International",
    logo: "/placeholder.svg",
    category: "News",
    provider: "SK Tech"
  },
  {
    id: "news2",
    name: "BBC World News",
    logo: "/placeholder.svg",
    category: "News",
    provider: "SK Tech"
  },
  {
    id: "ent1",
    name: "HBO",
    logo: "/placeholder.svg",
    category: "Entertainment",
    provider: "SK Tech"
  },
  {
    id: "ent2",
    name: "Netflix Channel",
    logo: "/placeholder.svg",
    category: "Entertainment",
    provider: "SK Tech"
  },
  {
    id: "movie1",
    name: "Star Movies",
    logo: "/placeholder.svg",
    category: "Movies",
    provider: "SK Tech"
  },
  {
    id: "movie2",
    name: "Hollywood Movies",
    logo: "/placeholder.svg",
    category: "Movies",
    provider: "SK Tech"
  }
];

export const categories = [
  "All Channels",
  "Favorites", 
  "Sports",
  "News",
  "Entertainment",
  "Movies"
];