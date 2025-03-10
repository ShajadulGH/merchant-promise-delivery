export const data = [
  {
    sl: 1,
    invoice: {
      id: "INV-24896",
      status: "delivered",
      date: "01/07/2024",
    },
    parcel: {
      companyName: "Tech Corp",
      storeName: "Tech Store",
      merchantOrderId: "ORD12345",
      serviceType: "Express Delivery",
      deliveryType: "Something",
    },
    status: "delivered",
    customer: {
      name: "Alice Johnson",
      number: "555-123-4567",
      address: "789 Oak St",
      district: "Midtown",
      area: "Somewhere",
    },
    amount: {
      cod: 3280,
      collected: 3280,
      totalCharge: 97.8,
    },
    paymentReturnStatus: {
      status: "paid",
      code: "PAID123",
      paidAt: "01/07/2024 10:00 AM",
    },
  },
  {
    sl: 2,
    invoice: {
      id: "INV-24625",
      status: "partial delivered",
      date: "10/07/2024",
    },
    parcel: {
      companyName: "Tech Corp",
      storeName: "Tech Store",
      merchantOrderId: "ORD12345",
      serviceType: "Express Delivery",
      deliveryType: "Something",
    },
    status: "partial delivered",
    customer: {
      name: "Alice Johnson",
      number: "555-123-4567",
      address: "789 Oak St",
      district: "Midtown",
      area: "Somewhere",
    },
    amount: {
      cod: 1500,
      collected: 1500,
      totalCharge: 50.5,
    },
    paymentReturnStatus: {
      status: "partial return",
      code: "PRET456",
      paidAt: "10/07/2024 02:00 PM",
    },
  },
  {
    sl: 3,
    invoice: {
      id: "INV-24900",
      status: "canceled",
      date: "05/07/2024",
    },
    parcel: {
      companyName: "Tech Corp",
      storeName: "Tech Store",
      merchantOrderId: "ORD12345",
      serviceType: "Express Delivery",
      deliveryType: "Something",
    },
    status: "canceled",
    customer: {
      name: "Alice Johnson",
      number: "555-123-4567",
      address: "789 Oak St",
      district: "Midtown",
      area: "Somewhere",
    },
    amount: {
      cod: 5000,
      collected: 5000,
      totalCharge: 120.75,
    },
    paymentReturnStatus: {
      status: "returned",
      code: "RET789",
      paidAt: "05/07/2024 11:30 AM",
    },
  },
];
