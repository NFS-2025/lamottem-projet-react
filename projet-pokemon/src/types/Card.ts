export interface Card {
  id: string;
  name: string;
  image: string;
  hp?: string;
  types?: string[];
  rarity?: string;
  illustrator?: string;
  set?: {
    name: string;
  };
}
