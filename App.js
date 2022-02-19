import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import Focus from './src/features/focus/Focus';
import BottomNavigationTest from './src/LearningRN/BottomNavigationTest';

export default function App() {
    const [focusSubject, setFocusSubject] = useState(null);

    return (
        <SafeAreaView style={styles.container}>
            {/* <Focus addSubject={setFocusSubject} />
            <Text>{focusSubject}</Text> */}
            <BottomNavigationTest />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 50
    }
});
