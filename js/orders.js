// Northstar Support MVP
// Member 3: Order Status Mock Data

const orders = [
    {
        orderId: "#1001",
        status: "Shipped",
        carrier: "Northstar Express",
        trackingNumber: "NSE1001001",
        estimatedDelivery: "August 15, 2026",
        shippedDate: "August 12, 2026"
    },
    {
        orderId: "#1002",
        status: "Processing",
        carrier: null,
        trackingNumber: null,
        estimatedDelivery: "August 18, 2026",
        shippedDate: null
    },
    {
        orderId: "#1003",
        status: "Out for Delivery",
        carrier: "Northstar Express",
        trackingNumber: "NSE1001003",
        estimatedDelivery: "August 13, 2026",
        shippedDate: "August 10, 2026"
    },
    {
        orderId: "#1004",
        status: "Delivered",
        carrier: "Northstar Express",
        trackingNumber: "NSE1001004",
        estimatedDelivery: "August 10, 2026",
        shippedDate: "August 7, 2026"
    },
    {
        orderId: "#1005",
        status: "Cancelled",
        carrier: null,
        trackingNumber: null,
        estimatedDelivery: null,
        shippedDate: null
    }
];
