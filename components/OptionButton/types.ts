interface Option {
  expireAt: string;
  count: number;
  sellingPrice: number;
}

export interface OptionButtonProps {
  isOpened: boolean;
  isSelected: boolean;
  originalPrice: number;
  onClick: () => void;
  onSelect: () => void;
  options: Option[];
}
