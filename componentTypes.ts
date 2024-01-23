export type CafeList = {
    id: string;
    name: string;
    address: string;
    coordinates: string;
    description: string;
    images: string;
};

export type Drink = {
    id: string;
    cofeId: string;
    name: string;
    price: number;
    favorite: boolean;
    imagesPath: string;
};

export type DrinkDetails = {
    id: string;
    productName: string;
    price: number;
    cofeId: string;
    cofeName: string;
    favarite: boolean;
    attribute: [
        {
            id: string,
            description: string,
            iconType: string
        }
    ],
    imagesPath: string
};