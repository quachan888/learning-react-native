import {
    StyleSheet,
    Text,
    View,
    Alert,
    Button,
    SafeAreaView
} from 'react-native';
import React from 'react';

const ButtonTest = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi, qui.
                </Text>
                <Button
                    title="Press me"
                    onPress={() => Alert.alert('Simple Button pressed')}
                />
            </View>

            <Seperator />
            <View>
                <Text style={styles.title}>
                    Color different. Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Officia, ut.
                </Text>
                <Button
                    title="Check my color"
                    color="orange"
                    onPress={() => Alert.alert('Button with color')}
                />
            </View>

            <Seperator />
            <View>
                <Text style={styles.title}>Hello Flex button</Text>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around'
                    }}
                >
                    <Button
                        title="Order"
                        color="blue"
                        onPress={() => Alert.alert('Ordered')}
                    />
                    <Button
                        title="Ask more"
                        color="red"
                        onPress={() => Alert.alert('Offer accepted')}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

const Seperator = () => <View style={styles.seperator} />;

export default ButtonTest;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16
    },
    title: {
        textAlign: 'center',
        marginVertical: 8
    },
    seperator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth
    }
});
