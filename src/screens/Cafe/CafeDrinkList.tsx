import { FlatList, View } from 'react-native';
import { useEffect, useState } from 'react';
import { CafeStackProps } from '../../../navigationTypes';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import { DrinkCard } from '../Drink/DrinkCard';
import { fetchCafeDrinks, selectCafeDrinks } from '../../redux/cafeReducer';
import { globalStyles } from '../../shared/styles/globalStyles';
import { Cafe } from '../../../componentTypes';
import { LoadingIndicator } from '../../shared/components/LoadingIndicator';
import { CafeListHeader } from './CafeListHeader';

type DrinkProps = {
    sessionId: string,
    cafe: Cafe,
    navigation: CafeStackProps['navigation'];
}

export function CafeDrinkList({ sessionId, cafe, navigation }: DrinkProps) {
    const dispatch = useDispatch<AppDispatch>();
    const drinks = useSelector(selectCafeDrinks);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        dispatch(fetchCafeDrinks({ sessionId, cafeId: cafe.id }))
            .then(() => setIsLoading(false));
    }, [dispatch]);

    const pressHandler = (id: string) => navigation.navigate('DrinkDetailsScreen', { sessionId, id });

    return (
        <View style={globalStyles.container}>
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
                ListHeaderComponent={() => { return (<CafeListHeader cafe={cafe} />) }}
            /> : (<LoadingIndicator />)}
        </View>
    )
}