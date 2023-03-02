import React from 'react';
import { Text, Dimensions, SafeAreaView, View, StyleSheet } from 'react-native';
import { NativeModules } from 'react-native';
const { StatusBarManager } = NativeModules;


const HomeScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View
                style={{
                    backgroundColor: 'transparent',
                    alignContent: 'center',
                    justifyContent: 'center',
                    paddingHorizontal: 16,
                    paddingTop: Platform.OS === 'android' ? StatusBarManager.HEIGHT : 0,
                    paddingBottom: 16
                }}>
            </View>
        </SafeAreaView>
    );
};
export default HomeScreen;