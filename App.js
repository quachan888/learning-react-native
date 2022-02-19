import { StyleSheet, View, Text } from 'react-native';
import React, { useState } from 'react';
import Focus from './src/features/focus/Focus';
import TouchableTest from './src/LearningRN/TouchableTest';

export default function App() {
    const [focusSubject, setFocusSubject] = useState('aaa');

    return (
        <View style={styles.container}>
            {/* <Focus /> */}
            <TouchableTest />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        paddingTop: 50
    }
});
