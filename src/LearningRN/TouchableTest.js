import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

const TouchableTest = () => {
    const [count, setCount] = useState(0);
    const handleIncrease = () => setCount((prevCount) => prevCount + 1);
    const handleDecrease = () => setCount((prev) => prev - 1);

    return (
        <View style={styles.container}>
            <View style={styles.countContainer}>
                <Text style={{ fontSize: 40 }}>Count: {count}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleIncrease}>
                <Text style={{ fontSize: 24 }}>Increase</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleDecrease}>
                <Text style={{ fontSize: 24 }}>Decrease</Text>
            </TouchableOpacity>
        </View>
    );
};

export default TouchableTest;

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#dddddd',
        padding: 10,
        marginVertical: 10
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    countContainer: {
        alignItems: 'center',
        padding: 10
    }
});
