import {StyleSheet} from 'react-native'


export interface ThemeColors {
    primary: string;
    disabled: string;
    text: string;
    background: string;
    cardBackground: string;
    buttonTextColor: string;
}

export const colors: ThemeColors = {
    primary: '#5856D6',
    disabled: '#ccc',
    text: 'black',
    background: '#f3f2f7',
    cardBackground: 'white',
    buttonTextColor: 'white'
}

export const globalStyles = StyleSheet.create({
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.text
    },
    subTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.text
    },
    input: {
        height: 40,
        margin: 8,
        marginTop:4,
        marginBottom:4,
        borderWidth: 1,
        padding: 10,
        borderColor: 'rgba(0,0,0,0.3)',
        borderRadius:10,
        color: colors.text,
    },
    mainContainer: {
        flex: 2,
        backgroundColor:colors.background
    },
    globalMargin:{
        paddingHorizontal: 20,
        flex: 1
    },

    btnPrimary:{
        backgroundColor: colors.primary,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center'
    },
    btnDisabled: {
        backgroundColor: colors.primary,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center'
    },
    btnPrimaryText: {
        color: colors.text,
        fontSize: 16
    }
})




