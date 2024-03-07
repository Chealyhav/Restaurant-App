// define IAttributes type
export type IAttribute<T> = {
  id: number;
  attributes: T;
};

//define type response
export type IRespones<T> = {
  data: Array<IAttribute<T>>;
};
//define type response by param
export type IRespone<T> = {
  data: IAttribute<T>;
};

export interface Image {
  name?: string;
  width?: string;
  height?: string;
  size?: string;
  url?: string;
}

export type IImage = IRespone<Image>;





/*** Footer Interface ***/
export interface ContentProps {
  title: string;
  banner: IRespone<Image>;
  logo: IRespone<Image>;
}
/*** End Footer Interface ***/

/*** Profile Interface ***/
export interface HeaderProps {
  name: string;
  description: string;
  facebook_link: string;
  telegram_link: string;
  tiktok_link: string;
  map_url: string;
  phone_number: string;
  logo: IRespone<Image>;
  banner: IRespone<Image>;
}
/*** end Profile Interface ***/

/*** Products Interface ***/
export interface ProductPopupProps {
  isOpen: boolean;
  onClose?: () => void;
  product: Product;
  social: IRespone<HeaderProps>;
}


interface MenutagData {
  id: number;
  attributes: {
    name: string;
  };
}

export interface Product {
  priceKHR: string;
  name: string;
  priceUSD: string;
  code: string;
  des: string;
  src:IRespone<Image>;
  menutags: {
    data: MenutagData[];
  };
}

export interface ProductProps {
  id: number;
  name: string;
  products: {
    data: Array<IAttribute<Product>>;
  };
}

export interface CategoryProps{
  data:ProductProps[];
}
/*** End Products Interface ***/

