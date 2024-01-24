import { FlatList, View } from 'react-native';
import { useSelector } from 'react-redux';
import { fetchAllProducts, selectAllFavorites } from '../redux/favorite/favoriteReducer';
import { DrinkCard } from './Drink/DrinkCard';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';

export function Favorite() {
    const dispatch = useDispatch<AppDispatch>();
    const favorites = useSelector(selectAllFavorites);

    const pressHandler = (id: string) => { };

    useEffect(() => {
        dispatch(fetchAllProducts("645b8378-37e3-49a7-ae4d-675fda1b2986"));
    }, [dispatch]);

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={favorites}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return (
                        <DrinkCard drink={item} pressHandler={pressHandler} />
                    );
                }}
                numColumns={2}
                overScrollMode='never'
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}