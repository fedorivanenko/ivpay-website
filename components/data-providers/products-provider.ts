import { MenuItemType } from "@/components/elements/menu";
import { error } from "console";


export function getProduct(products: MenuItemType[], id: typeof productsList[number]['id']) {
    const product = products.find((product) => product.id === id);

    if (product === undefined) throw Error(id +'no such product');
    return product
}

//TODO: sort out Types here
export const productsList: MenuItemType[] = [
    {
        id: "pos",
        label: "Crypto Payment Terminal",
        url: "/pos",
        order: 1,
        description: "Fastest crypto payments at your physical store",
        full_description: "Our Crypto Payment Terminal device makes crypto payments accessible for any business",
        cta: "Explore payment terminal",
        img: { src: "/product-pos.png" },
        benefits: [
            // icons can be searched here -> https://feathericons.com/
            {
                id: 'NFC',
                icon: 'Contactless',
                label: 'NFC payments',
                description: 'The first payment terminal on the market that accepts cryptocurrencies via NFC contactless technology.'
            },
            {
                id: 'fast',
                icon: 'FastForward',
                label: 'Fast detection',
                description: 'Our system processes most cryptocurrency payments in seconds — as fast as a credit card, and sometimes even quicker.'
            },
            {
                id: 'wifi',
                icon: 'Wifi',
                label: 'Only Wifi needed',
                description: 'All you need is a reliable WiFi connection, but you’re free to use a SIM card. Totally up to you!'
            },
            {
                id: 'fee',
                icon: 'Percent',
                label: '1% fee',
                description: 'No matter which device you use, it’s always just a 1% fee per payment'
            },
            {
                id: 'wallet',
                icon: 'Smartphone',
                label: 'Any crypto wallet',
                description: 'Your customers can pay with any crypto wallet they prefer. We’ve made the payment process quick and simple.'
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
        img: { src: "/product-app.png" },
        benefits: [
            {
                id: 'wallet',
                icon: 'Smartphone',
                label: 'Any crypto wallet',
                description: 'Your customers can pay with any crypto wallet they prefer. We’ve made the payment process quick and simple.'
            },
            {
                id: 'fast',
                icon: 'FastForward',
                label: 'Fast detection',
                description: 'Our system processes most cryptocurrency payments in seconds — sometimes even faster than a credit card.'
            },
            {
                id: 'wifi',
                icon: 'Wifi',
                label: 'Only Wifi needed',
                description: 'All you need is a reliable WiFi connection, but you’re free to use a SIM card for data if you prefer.'
            },
            {
                id: 'fee',
                icon: 'Percent',
                label: '1% fee',
                description: 'No matter which device you use, it’s always just a 1% fee per payment.'
            },
        ]
    },
    {
        id: "vending",
        label: "Vending Machine",
        url: "/vending",
        order: 4,
        description: "Increase sales with smart vending machine.",
        full_description: "Over 100 million people want to use crypto for everyday purchases, but a universal solution is still missing. We're excited to introduce our solution for vending machines.",
        cta: "explore vending machine",
        img: { src: "/product-vending.png" }
    },
    //{ id: "invoicing", label: "Invoicing", url: "/invoicing", order: 5 },
   {
        id: "e-commerce",
        label: "E-commerce integration",
        url: "/e_commerce",
        order: 3,
        description: "Start accepting cryptocurrencies in your online store today.",
        full_description: "Integrate cryptocurrency payment options seamlessly into your online business with just a few clicks.",
        cta: "explore e-commerce",
        img: { src: "/product-ecommerce.png" }
    },
    {
        id: "api",
        label: "API",
        url: "/api",
        order: 6,
        description: "Integrate crypto payments where you need it.",
        full_description: "REST API integration will cover every need of your business.",
        cta: "Explore API",
        img: { src: "/product-api.png" },
        benefits: [
            {
                id: 'NFC',
                icon: 'Close',
                label: 'NFC contactless payments',
                description: 'The first Payment Terminal on the market that accepts crypto currencies via NFC contactless.'
            },
        ]
    },
]