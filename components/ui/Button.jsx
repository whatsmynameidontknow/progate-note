import { Pressable, StyleSheet, Text } from 'react-native';

export default function Button({ text, buttonStyle, textStyle, ...props }) {
    const styles = StyleSheet.create({
        button: {
            borderRadius: 5,
            backgroundColor: 'blue',
        },
        text: {
            color: 'white',
            textAlign: 'center',
        },
    });
    return (
        <Pressable style={[styles.button, buttonStyle]} {...props}>
            <Text style={[styles.text, textStyle]}>{text}</Text>
        </Pressable>
    );
}
