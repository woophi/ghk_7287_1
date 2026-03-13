export type StockItem = {
  name: string;
  ticker: string;
  link: string;
  price: number;
  img: string;
};

export type GistResponse = {
  variant1: StockItem[];
};
