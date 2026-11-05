export type MockOrderStatus =
  | "PENDING_PAYMENT"
  | "PAID"
  | "ACCEPTED"
  | "PREPARING"
  | "READY"
  | "OUT_FOR_DELIVERY"
  | "DELIVERED"
  | "PICKED_UP"
  | "CANCELLED"
  | "EXPIRED"
  | "REFUNDED";

export interface MockOrderLineItem {
  id: string;
  menuItemId: string;
  name: string;
  quantity: number;
  optionsSummary?: string;
  unitPriceKobo: number;
  lineTotalKobo: number;
  imageUrl: string;
}

export interface MockOrder {
  id: string;
  token: string;
  orderNumber: number;
  placedAtLabel: string;
  placedDateLabel: string;
  type: "DELIVERY" | "PICKUP";
  status: MockOrderStatus;
  twoWordStatus: string;
  items: MockOrderLineItem[];
  subtotalKobo: number;
  deliveryFeeKobo: number;
  discountKobo: number;
  totalKobo: number;
  promoCode?: string;
  customer: {
    name: string;
    phone: string;
    email?: string;
  };
  delivery?: {
    zoneName: string;
    street: string;
    landmark: string;
  };
  rider?: {
    name: string;
    phone: string;
    phoneHref: string;
  };
}

export interface OrderTrackingStage {
  step: number;
  key: MockOrderStatus;
  label: string;
  twoWordStatus: string;
  imageUrl: string;
}

export const ORDER_TRACKING_STAGES: OrderTrackingStage[] = [
  {
    step: 1,
    key: "ACCEPTED",
    label: "Accepted",
    twoWordStatus: "Order received",
    imageUrl:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80",
  },
  {
    step: 2,
    key: "PREPARING",
    label: "Preparing",
    twoWordStatus: "Being made",
    imageUrl:
      "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=900&q=80",
  },
  {
    step: 3,
    key: "READY",
    label: "Ready",
    twoWordStatus: "Wrapped hot",
    imageUrl:
      "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=80",
  },
  {
    step: 4,
    key: "OUT_FOR_DELIVERY",
    label: "On the way",
    twoWordStatus: "Rider moving",
    imageUrl:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80",
  },
  {
    step: 5,
    key: "DELIVERED",
    label: "Delivered",
    twoWordStatus: "Enjoy hot",
    imageUrl:
      "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=900&q=80",
  },
];

export const SAMPLE_ORDER: MockOrder = {
  id: "ord_1042",
  token: "1042",
  orderNumber: 1042,
  placedAtLabel: "12:41 PM",
  placedDateLabel: "Today, 12:41 PM",
  type: "DELIVERY",
  status: "PREPARING",
  twoWordStatus: "Being made",
  items: [
    {
      id: "line-1",
      menuItemId: "chicken-shawarma",
      name: "Chicken shawarma",
      quantity: 2,
      optionsSummary: "Large, Extra sausage",
      unitPriceKobo: 505000,
      lineTotalKobo: 1010000,
      imageUrl:
        "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "line-2",
      menuItemId: "chapman",
      name: "Chapman",
      quantity: 1,
      unitPriceKobo: 150000,
      lineTotalKobo: 150000,
      imageUrl:
        "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=300&q=80",
    },
  ],
  subtotalKobo: 1160000,
  deliveryFeeKobo: 80000,
  discountKobo: 116000,
  totalKobo: 1124000,
  promoCode: "WELCOME10",
  customer: {
    name: "Chinedu Okafor",
    phone: "0803 123 4567",
    email: "chinedu@example.com",
  },
  delivery: {
    zoneName: "Zone A (Nearby)",
    street: "24B Fola Osibo Street, Lekki Phase 1",
    landmark: "Opposite Prince Ebeano Supermarket",
  },
  rider: {
    name: "Musa",
    phone: "0803 000 0000",
    phoneHref: "tel:08030000000",
  },
};

export const MOCK_ORDER_HISTORY: MockOrder[] = [
  SAMPLE_ORDER,
  {
    ...SAMPLE_ORDER,
    id: "ord_1038",
    token: "1038",
    orderNumber: 1038,
    placedAtLabel: "7:15 PM",
    placedDateLabel: "Yesterday, 7:15 PM",
    status: "DELIVERED",
    twoWordStatus: "Enjoy hot",
    items: [
      {
        id: "line-3",
        menuItemId: "mixed-shawarma",
        name: "Mixed shawarma",
        quantity: 1,
        optionsSummary: "Large, Extra cheese",
        unitPriceKobo: 670000,
        lineTotalKobo: 670000,
        imageUrl:
          "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=300&q=80",
      },
      {
        id: "line-4",
        menuItemId: "zobo",
        name: "Zobo",
        quantity: 1,
        unitPriceKobo: 100000,
        lineTotalKobo: 100000,
        imageUrl:
          "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=300&q=80",
      },
    ],
    subtotalKobo: 770000,
    deliveryFeeKobo: 80000,
    discountKobo: 0,
    totalKobo: 850000,
    promoCode: undefined,
  },
];

