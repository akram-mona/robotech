export interface ProductType {
  studentsEnrolled: ReactNode;
  enrollmentOpen: any;
  duration: ReactNode;
  instructor: ReactNode;
  level: ReactNode;
  creator: ReactNode;
  image1: string | undefined;
  image2: string | undefined;
  image3: string | undefined;
  categoryName: string | number | boolean | readonly string[] | readonly number[] | readonly boolean[] | null | undefined;
  count: number;
  id: number | null | undefined;
  title: string;
  description: string;
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
    userInfo: null | { email: string; password: string }; // Adjust this based on your actual state structure
    orderData: {
      length: number;
      map(arg0: (item: ProductType) => import("react").JSX.Element): import("react").ReactNode;
      order: ProductType[];
    };
    favoriteData: ProductType[];
  };
}
