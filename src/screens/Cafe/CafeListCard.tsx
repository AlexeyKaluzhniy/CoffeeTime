import { StyleSheet, Text, View, Image, ViewProps } from 'react-native';
import { colors } from '../../shared/styles/colors';
import { fonts } from '../../shared/styles/fonts';
import { Cafe } from '../../../componentTypes';

export function CafeListCard({ children, cafe }: ViewProps & { cafe: Cafe }) {
    return (
        <View style={styles.cafeCard}>
            <Image source={{ uri: cafe.images }} style={styles.image} />
            <View style={styles.cardTextContainer}>
                <Text style={styles.itemTitle}>{cafe.name}</Text>
                <Text style={styles.locationText}>мы находимся:</Text>
                <Text style={styles.address}>{cafe.address}</Text>
                {children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cafeCard: {
        backgroundColor: '#fff',
        marginBottom: 8,
        height: 125,
        flexDirection: 'row',
        elevation: 2,
    },
    cardTextContainer: {
        flex: 1,
        marginLeft: 15
    },
    itemTitle: {
        marginVertical: 8,
        fontFamily: fonts.SFUILight,
        fontSize: 20,
        color: colors.PRIMARY
    },
    locationText: {
        color: colors.SECONDARY_TEXT,
        fontFamily: fonts.SFUILight
    },
    address: {
        color: colors.SECONDARY_TEXT,
        fontFamily: fonts.SFUIRegular,
        fontSize: 16
    },
    image: {
        width: 125,
        height: 125
    }
});