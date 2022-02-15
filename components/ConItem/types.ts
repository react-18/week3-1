interface ContItem {
  id: number;
  name: string;
  originalPrice: number;
  minSellingPrice: number;
  count?: number;
  imageUrl: string;
}

export interface ConItemProps {
  conItem: ContItem;
  brandName?: string;
  isList?: boolean;
}
