interface Option {
  expireAt: string;
  count: number;
  sellingPrice: number;
}

export interface OptionButtonProps {
  isOpened: boolean;
  isSelected: boolean;
  onClick: () => void;
  onSelect: () => void;
  options: Option[];
}
