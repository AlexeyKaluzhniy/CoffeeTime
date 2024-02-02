import { FlatList, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { selectAllFavorites } from '../../redux/favoriteReducer';
import { DrinkCard } from '../Drink/DrinkCard';
import { FavoriteStackProps } from '../../../navigationTypes';
import { selectSessionId } from '../../redux/authSlice';
import { EmptyScreen } from '../../shared/components/EmptyScreen';
import { globalStyles } from '../../shared/styles/globalStyles';

export function Favorite({ navigation }: FavoriteStackProps) {
    const favorites = useSelector(selectAllFavorites);
    const sessionId = useSelector(selectSessionId);

    const pressHandler = (id: string) => navigation.navigate('DrinkDetailsScreen', { sessionId, id });

    return (
        <View style={globalStyles.container}>
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
                    ListHeaderComponent={() => { return (<View style={globalStyles.headerListOffset} />) }}
                />) :
                <EmptyScreen>
                    <Text style={globalStyles.emptyScreenText}>Здесь нет ни одной чашки кофе</Text>
                    <Text style={{ ...globalStyles.emptyScreenText, marginTop: 12 }}>Попробуйте вернуться к нам позже</Text>
                </EmptyScreen>
            }
        </View>
    );
}