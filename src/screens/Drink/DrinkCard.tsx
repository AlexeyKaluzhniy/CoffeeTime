import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { fonts } from '../../shared/styles/fonts';
import { colors } from '../../shared/styles/colors';
import { Drink } from '../../../componentTypes';
import { FavoriteButton } from '../../shared/components/FavoriteButton';

type Props = {
    drink: Drink;
    pressHandler: (id: string) => void;
}

export function DrinkCard({ drink, pressHandler }: Props) {
    return (
        <TouchableOpacity style={styles.card} onPress={() => pressHandler(drink.id)} activeOpacity={0.7}>
            <View style={styles.header}>
                <Text style={styles.title}>{drink.name}</Text>
                <Text style={{ ...styles.title, fontSize: 12 }}>кофейный напиток</Text>
            </View>
            <Image source={{ uri: drink.imagesPath }} style={styles.image} />
            <View style={styles.footer}>
                <View style={styles.price}>
                    <Text style={styles.priceNumber}>{drink.price}</Text>
                    <Image source={require('../../../assets/icons/icon_ruble.png')} />
                </View>
                <FavoriteButton productId={drink.id} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '46%',
        height: 235,
        backgroundColor: '#fff',
        elevation: 3,
        marginBottom: 10,
        marginLeft: '2.7%'
    },
    header: {
        height: 70,
        paddingLeft: 8,
        paddingTop: 8,
    },
    title: {
        fontFamily: fonts.SFUIRegular,
        fontSize: 16,
        color: colors.SECONDARY_TEXT,
    },
    image: {
        width: '95%',
        height: 120,
        alignSelf: 'center'
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 6,
    },
    price: {
        left: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    priceNumber: {
        fontFamily: fonts.LobsterRegular,
        fontSize: 24,
        color: colors.PRIMARY
    }
});
