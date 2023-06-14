import React from 'react';
import { StyleSheet, StatusBar, Alert } from 'react-native';
import Post from './components/Post.jsx';
import axios from 'axios';
import DraggableFlatList from 'react-native-draggable-flatlist'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Loading from './components/Loading.jsx';

const App = () => {

    const [posts, setPosts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    const fetchPosts = () => {
        axios.get('https://6488dc570e2469c038fe7487.mockapi.io/posts')
            .then(({data}) => {
                setPosts(data);
            })
            .catch(() => {
                Alert.alert('Post Error', 'We couldnt find your posts :(');
            })
            .finally(() => {
                setLoading(false);
            });
    }

    React.useEffect(fetchPosts, [])

    const renderItem = ({ item, index, drag, isActive }) => {
        return <Post img={item.imageUrl} title={item.title} createdAt={item.createdAt} drag={drag} />;
    };

    const renderLoading = () => {
        return loading ? <Loading/>: '';
    }

    return (
        <GestureHandlerRootView style={styles.container}>
            {renderLoading()}
            <DraggableFlatList
                data={posts}
                renderItem={renderItem}
                keyExtractor={(item) => `draggable-item-${item.id}`}
                onDragEnd={({ data }) => setPosts(data)}
            />
            <StatusBar theme="auto" />
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10
    }
});

export default App;