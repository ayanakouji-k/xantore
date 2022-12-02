type TSpaceItem = {
  text?: string;
  icon: any;
  color: string;
  onClick: any;
  confirm?: boolean;
};

export type TSpace = {
  items: TSpaceItem[];
};
