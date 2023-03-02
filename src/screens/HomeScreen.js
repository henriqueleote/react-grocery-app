import React from 'react';
import { Text, Image, SafeAreaView, View, StyleSheet, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import { NativeModules } from 'react-native';
const { StatusBarManager } = NativeModules;


const users = [
    {
        name: 'brynn',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Userimage.png'
    },
    {
        name: 'brynn',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Userimage.png'
    },
    {
        name: 'brynn',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Userimage.png'
    },
    {
        name: 'brynn',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Userimage.png'
    },
    {
        name: 'brynn',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Userimage.png'
    },
    {
        name: 'brynn',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Userimage.png'
    },
]

const HomeScreen = () => {


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View
                style={{
                    backgroundColor: 'transparent',
                    paddingHorizontal: 16,
                    paddingTop: Platform.OS === 'android' ? StatusBarManager.HEIGHT : 0,
                }}>
            </View>
            <View style={styles.container}>
                <FlatList
                    data={users}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Image
                                source={{ uri: item.avatar }}
                                style={styles.cardImage}
                            />
                            <Text style={styles.cardText}>{item.name}</Text>
                        </View>
                    )}
                    //Setting the number of column
                    numColumns={3}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </SafeAreaView >
    );
};
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#121212',
        paddingTop: 50,
        paddingRight: 0,
        paddingLeft: 0,
        paddingBottom: 100,
    },
    card: {
        width: 100,
        height: 100,
        margin: 10,
        padding: 20,
        backgroundColor: '#1e1e1e'
    },
    cardImage: {
        width: 50,
        height: 50,
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    cardText: {
        textAlign: 'center'
    }
});