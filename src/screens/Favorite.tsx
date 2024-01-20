import React, { useState } from 'react';
import { DrinkList } from './Drink/DrinkList';
import { Drink } from '../../types';

export function Favorite() {
    const [data, setData] = useState<Drink[]>([{
        id: '1',
        cofeId: '1',
        name: 'Cappuccino',
        price: 2,
        favorite: true,
        imagesPath: ''
    }]);

    return (
        <DrinkList drinks={data} />
    )
}