// Northstar Support MVP
// Member 3: Order Status Search Logic

function normalizeOrderId(input) {
    if (!input) {
        return null;
    }

    // Convert input to text and remove unnecessary spaces
    let orderId = String(input).trim().toUpperCase();

    // Add # if the customer entered only the number
    if (!orderId.startsWith("#")) {
        orderId = `#${orderId}`;
    }

    return orderId;
}

function findOrder(input) {
    const orderId = normalizeOrderId(input);

    if (!orderId) {
        return {
            found: false,
            message: "Please provide your order number."
        };
    }

    const order = orders.find(order => order.orderId === orderId);

    if (!order) {
        return {
            found: false,
            orderId: orderId,
            message: `I couldn't find an order with the number ${orderId}. Please check the order number and try again.`
        };
    }

    return {
        found: true,
        order: order
    };
}

function getOrderStatus(input) {
    const result = findOrder(input);

    if (!result.found) {
        return result;
    }

    const order = result.order;

    let message;

    switch (order.status) {
        case "Processing":
            message = `Order ${order.orderId} is being processed and has not shipped yet.`;
            break;

        case "Shipped":
            message = `Order ${order.orderId} has shipped and is currently in transit.`;
            break;

        case "Out for Delivery":
            message = `Order ${order.orderId} is out for delivery and should arrive today.`;
            break;

        case "Delivered":
            message = `Order ${order.orderId} has been delivered.`;
            break;

        case "Cancelled":
            message = `Order ${order.orderId} has been cancelled.`;
            break;

        default:
            message = `Order ${order.orderId} has status: ${order.status}.`;
    }

    return {
        found: true,
        orderId: order.orderId,
        status: order.status,
        carrier: order.carrier,
        trackingNumber: order.trackingNumber,
        estimatedDelivery: order.estimatedDelivery,
        shippedDate: order.shippedDate,
        message: message
    };
}
