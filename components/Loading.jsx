import { StyleSheet, ActivityIndicator, View, Text } from 'react-native';

const Loading = () => {
    return (
        <View style={styles.LoadingView}>
            <ActivityIndicator size='large'/>
            <Text>Loading...</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    LoadingView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Loading;