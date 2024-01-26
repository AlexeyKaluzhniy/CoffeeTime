import { FlatList, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { CafeStackProps } from '../../../navigationTypes';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { fetchCafeDrinks, selectCafeDrinks } from '../../redux/cafe/cafeDrinksReducer';
import { useSelector } from 'react-redux';
import { DrinkCard } from './DrinkCard';

type DrinkProps = {
    sessionId: string,
    cafeId: string,
    navigation: CafeStackProps['navigation'];
}

export function CafeDrinkList({ sessionId, cafeId, navigation }: DrinkProps) {
    const dispatch = useDispatch<AppDispatch>();
    const drinks = useSelector(selectCafeDrinks);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        dispatch(fetchCafeDrinks({ sessionId, cafeId }))
            .then(() => setIsLoading(false));
    }, [dispatch]);

    const pressHandler = (id: string) => navigation.navigate('DrinkDetailsScreen', {sessionId, id });

    return (
        <View style={{ flex: 1 }}>
            {!isLoading ? <FlatList
                data={drinks}
                keyExtractor={item => item.cofeId}
                renderItem={({ item }) => {
                    return (
                        <DrinkCard drink={item} pressHandler={pressHandler} />
                    );
                }}
                overScrollMode='never'
                showsVerticalScrollIndicator={false}
                numColumns={2}
                ListHeaderComponent={() => { return (<View style={{ paddingTop: 10 }} />) }}
            /> : null}
        </View>
    )
}