import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

export default function Map() {
    return (
        <View style={styles.container}>
            <View style={styles.icons}>
                <FontAwesome5 name="telegram-plane" size={32} color="#717171" />
                <Ionicons name="search-outline" size={32} color="#717171" style={{ marginLeft: 197 }} />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>CoffeTime</Text>
                <Text style={{fontFamily: 'SFUILight', color: '#ADADAD', fontSize: 16}}>900 м = 15 минут</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    icons: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 140,
        marginHorizontal: 45,
    },
    title: {
        fontFamily: 'lobsterRegular',
        fontSize: 24,
        marginBottom: 15
    },
    titleContainer: {
        position: 'absolute',
        bottom: 45,
        left: 70
    }
});