import { StyleSheet, Text, View, Image } from 'react-native';
import { fonts } from '../../shared/styles/fonts';

export function NoCoffee() {
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Image source={require('../../../assets/icons/image_no_coffe.png')} style={styles.image} />
            <View style={{ marginTop: 110, alignItems: 'center' }}>
                <Text style={styles.text}>Здесь нет ни одной чашки кофе</Text>
                <Text style={{...styles.text, marginTop: 12}}>Попробуйте вернуться к нам позже</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        marginTop: 186,
    },
    text: {
        fontFamily: fonts.SFUIRegular,
        fontSize: 16,
        color: '#5E5E5E'
    }
});