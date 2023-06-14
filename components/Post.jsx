import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';

const Post = ({img, title, createdAt, drag}) => {

    return (
        <View style={styles.PostView}>
            <TouchableOpacity onPressIn={drag}>
                <Image style={styles.PostImage} source={{uri: img}}/>
            </TouchableOpacity>
            <View style={styles.PostTextWrapper}>
                <Text style={styles.PostTitle}>{title}</Text>
                <Text style={styles.PostText}>{createdAt}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    PostView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: 10,
        height: 'auto',
        padding: 10,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'gray',
    },

    PostTextWrapper: {
        flex: 1
    },

    PostTitle: {
        fontSize: 18,
        fontWeight: 600
    },

    PostImage: {
        width: 80,
        height: 80,
        borderRadius: 20,
        flexWrap: 'wrap'
    },
});

export default Post;