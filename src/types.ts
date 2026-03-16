export type StockItem = {
  name: string;
  ticker: string;
  link: string;
  price: number;
  img: string;
  currency?: string;
  nominal: number;
};

export type GistResponse = {
  variant1: StockItem[];
};
