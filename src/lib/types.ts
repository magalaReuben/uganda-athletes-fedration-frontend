export type $NavLink = {
  label: string;
  route: string;
};

export type $NavItem = {
  label: string;
  route: string;
  links: $NavLink[];
};

export type $CarouselItem = {
  id: number;
  image: any;
  avatar: any;
  text: string;
  userName: string;
  location: string;
};

export type $lodgesItem = {
  id: number;
  image: any;
  name: string;
  price: string;
};
