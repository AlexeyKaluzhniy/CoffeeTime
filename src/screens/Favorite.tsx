import React, { useState } from 'react';
import { Drink } from '../../componentTypes';
import { View } from 'react-native';

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
        <View></View>
    );
}