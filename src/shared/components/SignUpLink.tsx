import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { fonts } from '../styles/fonts';
import { colors } from '../styles/colors';

export function SignUpLink({ handlePress, title }: { handlePress: () => void, title: string }) {
    return (
        <TouchableOpacity onPress={handlePress} style={{ marginTop: 15 }}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    title: {
        fontFamily: fonts.SFUIRegular,
        fontSize: 14,
        color: colors.SECONDARY_TEXT,
    }
});