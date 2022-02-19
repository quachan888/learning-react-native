import React, { useState } from 'react';
import { View } from 'react-native';
import {
    BottomNavigation,
    Card,
    Text,
    Button,
    Paragraph,
    Title,
    Divider,
    Searchbar
} from 'react-native-paper';

const MusicRoute = () => (
    <View style={{ padding: 20 }}>
        <Card style={{ marginVertical: 15 }}>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Content>
                <Title>Card title</Title>
                <Paragraph>Card content</Paragraph>
            </Card.Content>
            <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
            </Card.Actions>
        </Card>
        <Card style={{ marginVertical: 15 }}>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Content>
                <Title>Card title</Title>
                <Paragraph>Card content</Paragraph>
            </Card.Content>
            <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
            </Card.Actions>
        </Card>
        <Divider />
    </View>
);

const AlbumsRoute = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = (query) => setSearchQuery(query);

    return (
        <View style={{ padding: 20 }}>
            <Searchbar
                placeholder="Search"
                value={searchQuery}
                onChangeText={onChangeSearch}
            />
            <Text
                style={{
                    fontSize: 30,
                    marginTop: 30,
                    color: 'orange',
                    textAlign: 'center'
                }}
            >
                Your input: {searchQuery}
            </Text>
        </View>
    );
};

const RecentsRoute = () => <Text>Recents</Text>;

const PurchasedRoute = () => <Text>Purchased</Text>;

const BottomNavigationTest = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'music', title: 'Music', icon: 'music-note' },
        { key: 'albums', title: 'Albums', icon: 'album' },
        { key: 'recents', title: 'Recents', icon: 'history' },
        {
            key: 'purchased',
            title: 'Purchased',
            icon: 'cart'
        }
    ]);

    const renderScene = BottomNavigation.SceneMap({
        music: MusicRoute,
        albums: AlbumsRoute,
        recents: RecentsRoute,
        purchased: PurchasedRoute
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    );
};

export default BottomNavigationTest;
