import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        padding: 30,
        backgroundColor: '#7BD6A8',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: '50%',
        height: 60,
        resizeMode: 'contain',
        borderRadius: 150
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    },
    button: {
        width: '40%',
    },
    titleText: {
        padding: 20,
        fontSize: 18,
        color: 'red'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20
    },
    cancel: {
        position: 'absolute',
        right: 0,
        width: 35
    },
    mapContainer: {
        height: 530,
        width: '100%'
    },
    map : {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    inputContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        paddingTop: 60
    },
    screen: {
        flex: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    addButton: {
        width: 40
    }
});