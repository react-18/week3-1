interface CategoryInfo {
  id: number;
  name: string;
  createdAt: string;
  priority: number;
  discountRate: number;
  info: string;
  imageUrl: string;
}

interface BrandInfo {
  id: number;
  name: string;
  adminUserId: number;
  priority: number;
  createdAt: string;
  conCategory1Id: number;
  info: string;
  imageUrl: string;
  conCategory1: CategoryInfo;
}

interface Option {
  expireAt: string;
  count: number;
  sellingPrice: number;
}
interface ConItem {
  id: number;
  name: string;
  originalPrice: number;
  minSellingPrice: number;
  ncSellingPrice: number;
  information: string | null;
  tip?: string;
  warning: string;
  discountRate?: number;
  info: string | null;
  isOnlyAccount: number;
  conCategory2Id: number;
  imageUrl: string;
  conCategory2: BrandInfo;
  options: Option[];
}

export interface DetailProps {
  conItem: ConItem;
}
