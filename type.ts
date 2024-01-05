export interface ProductType {
  id: number | null | undefined;
  title: string;
  description: string;
  image: string;
  price: number;
  previousPrice: number;
  isNew: boolean;
  category: string;
  quantity: number;
}

export interface ItemProps {
  item: ProductType;
}

export interface StateProps {
  pro: {
    productData: ProductType[];
    userInfo: {};
    orderData: {
      length: number;
      map(arg0: (item: ProductType) => import("react").JSX.Element): import("react").ReactNode;
      order: ProductType[];
    };
    favoriteData: ProductType[];
  };
}
