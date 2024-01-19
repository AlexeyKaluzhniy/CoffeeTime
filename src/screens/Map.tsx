import { View, Text, StyleSheet, Image } from "react-native";

export function Map() {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/icons/icon_locating.png')} style={{bottom: 250, left: 50}}/>
            <View style={styles.icons}>
                <Image source={require('../../assets/icons/icon_sent.png')} style={{ marginLeft: 45 }} />
                <Image source={require('../../assets/icons/icon_search.png')} style={{ marginRight: 45 }} />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>CoffeTime</Text>
                <Text style={{ fontFamily: 'SFUILight', color: '#ADADAD', fontSize: 16 }}>900 м = 15 минут</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-end'
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        bottom: 120,
    },
    title: {
        fontFamily: 'lobsterRegular',
        fontSize: 24,
        marginBottom: 10
    },
    titleContainer: {
        position: 'absolute',
        bottom: 45,
        left: 70,
    }
});