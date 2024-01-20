import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Drink } from '../../../types';
import { DrinkList } from './DrinkList';

type DrinkProps = {
    sessionId: string,
    cafeId: string,
}

export function CafeDrinkList({ sessionId, cafeId }: DrinkProps) {
    const [drinks, setDrinks] = useState<Drink[]>([]);

    useEffect(() => {
        try {
            const fetchDrinks = async () => {
                const response = await fetch('http://cafe.prox2.dex-it.ru/api/Product/GetProductsCafe', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json; charset=utf8',
                    },
                    body: JSON.stringify({ sessionId: sessionId, cafeId: cafeId })
                })
                if (!response.ok) {
                    console.log(response.status);
                    throw new Error('Something went wrong');
                }
                const responseJson = await response.json();
                setDrinks(responseJson);
            }
            fetchDrinks();
        }
        catch (error) {
            console.error(error);
        }
    }, []);

    return (
        <DrinkList drinks={drinks} />
    )
}