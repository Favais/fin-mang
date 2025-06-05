const creditCardData = [
    {
        type: 'Credit Card',
        brand: 'Master Card',
        maskedNumber: '3388 4556 8860 8***',
        amount: 25000,
        currency: '$',
        color: '#F79E1B', // example Mastercard color
        id: 1
    },
    {
        type: 'Credit Card',
        brand: 'Visa',
        maskedNumber: '4211 2255 3344 7***',
        amount: 18600,
        currency: '$',
        color: '#1A1F71', // example Visa blue
        id: 2
    },
    {
        type: 'Credit Card',
        brand: 'American Express',
        maskedNumber: '3759 876543 2100 ***',
        amount: 32350,
        currency: '$',
        color: '#2E77BB', // AmEx blue
        id: 3
    },
    {
        type: 'Credit Card',
        brand: 'Discover',
        maskedNumber: '6011 5567 8912 6***',
        amount: 14200,
        currency: '$',
        color: '#FF6000', // Discover orange
        id: 4
    },
    {
        type: 'Credit Card',
        brand: 'Master Card',
        maskedNumber: '5500 1234 5678 9***',
        amount: 27890,
        currency: '$',
        color: '#F79E1B',
        id: 5
    }
];


const transactions = [
    {
        item: "🎧 Headphones",
        shopName: "Audio World",
        date: "10 Apr, 2025",
        paymentMethod: "Credit Card",
        amount: "$75.00"
    },
    {
        item: "👟 Sneakers",
        shopName: "Urban Steps",
        date: "10 Apr, 2025",
        paymentMethod: "Credit Card",
        amount: "$55.00"
    },
    {
        item: "🍔 Burger",
        shopName: "MaxBite",
        date: "10 Apr, 2025",
        paymentMethod: "Credit Card",
        amount: "$11.00"
    },
    {
        item: "🎬 Movie ticket",
        shopName: "Cineplex",
        date: "10 Apr, 2025",
        paymentMethod: "Credit Card",
        amount: "$14.00"
    },
    {
        item: "🚕 Taxi fare",
        shopName: "Lyft",
        date: "10 Apr, 2025",
        paymentMethod: "Credit Card",
        amount: "$9.00"
    },
    {
        item: "🍜 Noodles",
        shopName: "Wok Express",
        date: "10 Apr, 2025",
        paymentMethod: "Credit Card",
        amount: "$13.00"
    },
    {
        item: "💻 Mouse",
        shopName: "TechTown",
        date: "10 Apr, 2025",
        paymentMethod: "Credit Card",
        amount: "$25.00"
    },
    {
        item: "📱 Phone case",
        shopName: "MobileHub",
        date: "10 Apr, 2025",
        paymentMethod: "Credit Card",
        amount: "$18.00"
    }
];


export { creditCardData, transactions }  