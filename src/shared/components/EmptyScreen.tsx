import { StyleSheet, View, Image, ViewProps } from 'react-native';
import { fonts } from '../styles/fonts';

export function EmptyScreen({ children }: ViewProps) {
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/icons/image_no_coffe.png')} style={styles.image} />
            <View style={styles.childrenContainer}>
                {children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    image: {
        marginTop: 186,
    },
    text: {
        fontFamily: fonts.SFUIRegular,
        fontSize: 16,
        color: '#5E5E5E'
    },
    childrenContainer: {
        marginTop: 110,
        alignItems: 'center'
    }
});