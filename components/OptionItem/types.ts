interface Option {
  expireAt: string;
  count: number;
  sellingPrice: number;
}
export interface OptionItemProps {
  option: Option;
  originalPrice: number;
  onSelect: () => void;
}
