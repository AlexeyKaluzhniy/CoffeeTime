import { FlatList, View } from 'react-native';
import { useSelector } from 'react-redux';
import { selectAllFavorites } from '../../redux/favorite/favoriteReducer';
import { DrinkCard } from '../Drink/DrinkCard';
import { FavoriteStackProps } from '../../../navigationTypes';
import { NoCoffee } from './NoCoffee';
import { selectSessionId } from '../../redux/auth/authReducer';

export function Favorite({ navigation }: FavoriteStackProps) {
    const favorites = useSelector(selectAllFavorites);
    const sessionId = useSelector(selectSessionId);

    const pressHandler = (id: string) => navigation.navigate('DrinkDetailsScreen', { sessionId, id });

    return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
            {favorites.length > 0 ? (
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
                    ListHeaderComponent={() => { return (<View style={{ paddingTop: 10 }} />) }}
                />) : <NoCoffee />}
        </View>
    );
}