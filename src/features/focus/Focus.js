import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';

const Focus = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    What would you like to focus on?
                </Text>
                <View style={styles.inputContainer}>
                    <TextInput style={{ flex: 1 }} />
                    <RoundedButton
                        title="+"
                        size={50}
                        style={{ marginLeft: 16 }}
                    />
                </View>
            </View>
        </View>
    );
};

export default Focus;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    titleContainer: {
        flex: 0.5,
        padding: 16,
        justifyContent: 'center'
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 20
    }
});
