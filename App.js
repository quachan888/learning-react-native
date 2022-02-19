import { StyleSheet, View, Text } from 'react-native';
import React, { useState } from 'react';
import Focus from './src/features/focus/Focus';
import ButtonTest from './src/LearningRN/ButtonTest';

export default function App() {
    const [focusSubject, setFocusSubject] = useState(null);

    return (
        <View style={styles.container}>
            {/* <Focus addSubject={setFocusSubject} />
            <Text>{focusSubject}</Text> */}
            <ButtonTest />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 50
    }
});
