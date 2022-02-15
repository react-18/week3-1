const BASE_URL = 'https://api2.ncnc.app';
export const SOON = `${BASE_URL}/con-items/soon`;
export const CATEGORY = `${BASE_URL}/con-category1s`;
export const BRAND = (conCategory1Id: string) =>
  `${BASE_URL}/con-category1s/${conCategory1Id}/nested`;
export const ITEM = (conItemId: string) => `${BASE_URL}/con-items/${conItemId}`;
export const FAQ_TYPE = `${BASE_URL}/qa-types`;
export const FAQ_CONTENT = (qaTypeId: string) =>
  `${BASE_URL}/qas?qaTypeId=${qaTypeId}`;
