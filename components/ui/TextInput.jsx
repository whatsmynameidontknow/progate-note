import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function InputText({
    value,
    style,
    name,
    required,
    onChangeText,
    ...props
}) {
    const styles = StyleSheet.create({
        input: {
            borderWidth: 1,
            borderColor: '#ddd',
            padding: 10,
        },
        inputError: {
            paddingLeft: 5,
            color: 'red',
        },
    });
    const [inputValue, setInputValue] = useState(value);
    useEffect(() => {
        onChangeText(inputValue);
    }, [inputValue]);

    return (
        <View>
            <TextInput
                style={[styles.input, style]}
                onChangeText={(text) => setInputValue(text)}
                value={inputValue}
                {...props}
            />
            {required && inputValue.length === 0 && (
                <Text style={styles.inputError}>{name} can't be empty</Text>
            )}
        </View>
    );
}
