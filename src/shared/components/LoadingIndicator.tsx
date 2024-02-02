import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { colors } from '../styles/colors';

export function LoadingIndicator() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size='large' color={colors.PRIMARY} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});