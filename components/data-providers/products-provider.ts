import { MenuItemType } from "@/components/elements/menu";

//TODO: sort out Types here
export const products: MenuItemType[] = [
    {
        id: "pos",
        label: "Crypto Payment Terminal",
        url: "/pos",
        order: 1,
        description: "Get paid in crypto in your physical store",
        full_description: "Our Crypto Payment Terminal machine makes crypto payments accessible for any business",
        cta: "Explore payment terminal",
        img: { src: "/product-pos.png" },
        benefits: [
            {
                id: 'NFC',
                icon: 'Close',
                label: 'NFC contactless payments',
                description: 'The first Payment Terminal on the market that accepts crypto currencies via NFC contactless.'
            },
            {
                id: 'fast',
                icon: 'Close',
                label: 'Fast payment detection',
                description: 'Our system get most of the crypto currencies payments detected in seconds. Sometimes faster than a Credit Card.'
            },
            {
                id: 'fee',
                icon: 'Close',
                label: '1% fee',
                description: 'We charge at maximum a 1% fee for our service for every payment.'
            },
        ]
    },
    {
        id: "app",
        label: "Mobile App",
        url: "/app",
        order: 2,
        description: "Enable any smartphone to accept crypto payments",
        full_description: "Download a simple and user-friendly app to accept payments in more than 40 cryptocurrencies.",
        cta: "explore mobile APP",
        img: { src: "/product-app.png" }
    },
    {
        id: "e-commerce",
        label: "E-Commerce plugin",
        url: "/e_commerce",
        order: 3,
        description: "Accept crypto currencies in your e-commerce store",
        full_description: "Integrate cryptocurrency payment options seamlessly into your online business with just a few clicks.",
        cta: "explore e-commerce",
        img: { src: "/product-ecommerce.png" }
    },
    {
        id: "vending",
        label: "Vending Machine",
        url: "/vending",
        order: 4,
        description: "Increase sales with smart vending machine.",
        full_description: "More than 100 million people want to use crypto assets for daily expenses and purchases, but there was no universal solution for this.",
        cta: "explore options",
        img: { src: "/product-vending.png" }
    },
    //{ id: "invoicing", label: "Invoicing", url: "/invoicing", order: 5 },
    {
        id: "api",
        label: "API",
        url: "/api",
        order: 6,
        description: "Integrate crypto payments where you need it.",
        full_description: "REST API integration will cover every need of your business.",
        cta: "Explore API",
        img: { src: "/product-api.png" }
    },
]