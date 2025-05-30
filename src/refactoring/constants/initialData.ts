import { Coupon, Discount, Product } from "../../types";

export const initialProducts: Product[] = [
  {
    id: "p1",
    name: "상품1",
    price: 10000,
    stock: 20,
    discounts: [
      { quantity: 10, rate: 0.1 },
      { quantity: 20, rate: 0.2 },
    ],
  },
  {
    id: "p2",
    name: "상품2",
    price: 20000,
    stock: 20,
    discounts: [{ quantity: 10, rate: 0.15 }],
  },
  {
    id: "p3",
    name: "상품3",
    price: 30000,
    stock: 20,
    discounts: [{ quantity: 10, rate: 0.2 }],
  },
];

export const initialCoupons: Coupon[] = [
  {
    name: "5000원 할인 쿠폰",
    code: "AMOUNT5000",
    discountType: "amount",
    discountValue: 5000,
  },
  {
    name: "10% 할인 쿠폰",
    code: "PERCENT10",
    discountType: "percentage",
    discountValue: 10,
  },
];

// AdminPage.tsx
export const INITIAL_DISCOUNT: Discount = {
  quantity: 0,
  rate: 0,
};

export const INITIAL_COUPON: Coupon = {
  name: "",
  code: "",
  discountType: "percentage",
  discountValue: 0,
};

export const INITIAL_PRODUCT: Omit<Product, "id"> = {
  name: "",
  price: 0,
  stock: 0,
  discounts: [],
};
