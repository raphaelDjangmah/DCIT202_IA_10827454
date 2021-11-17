import { Dimensions } from "react-native";
import { color } from "react-native-reanimated";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    // base colors
    primary: "#111015", 
    secondary: "#FFFFFF",   
    tetiary: "#F1F5F8",

    // colors
    black: "#1E1F20",
    white: "#FFFFFF",
    lemon: '#EFFD5F',
    mustard: '#E8B828',
    gold   : '#F9A602',
    fire   : '#FD50F',
    butter:  '#FABD02',
    lightGray: "#F5F5F6",
    lightGray2: "#F6F6F7",
    lightGray3: "#EFEFF1",
    lightGray4: "#F8F8F9",
    transparent: "transparent",
    darkgray: '#898C95',

    col1 : '#040406',
    col2 : '#FD9743',
    col3 : '#58585A',
    col4 : '#522F19',
    col5 : '#AA5F28',
    col6 : '#62462C',
    col8 : '#E9A73E'
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 10,
    padding: 10,
    padding2: 12,
    paddingLarge: 50,

    // font sizes
    largeTitle: 50,
    h1: 35,
    h2: 30,
    h3: 22,
    h4: 20,
    h5: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};

export const HEIGHT = {
    sm: 50,
    m: 80,
    l: 250,
    xl: height * 0.5,
    h: height
}

export const WIDTH = {
    xs: width * 0.3,
    sm: width * 0.4,
    m: width * 0.7,
    // m: 300,
    l: "100%",
}

export const BUTTONS = {
    primary: {
        height: HEIGHT.sm,
        backgroundColor: COLORS.primary,
        // marginVertical: SIZES.padding,
        borderRadius: SIZES.radius,
        justifyContent: 'center',
        alignItems: 'center',

    },
    secondary: {
        height: HEIGHT.sm,
        backgroundColor: COLORS.secondary,
        marginVertical: SIZES.padding,
        borderRadius: SIZES.radius,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: COLORS.primary,
        borderWidth: 2.5,

    },

    warning: {
        height: HEIGHT.sm,
        backgroundColor: COLORS.secondary,
        marginVertical: SIZES.padding,
        borderRadius: SIZES.radius,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: COLORS.gold,
        borderWidth: 2.5,

    },

    loginBut:{
        height: HEIGHT.sm,
        marginVertical: SIZES.padding,
        borderRadius: SIZES.radius,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.gold,
        borderColor:COLORS.primary,
        borderWidth: 2.5,
    },

    prim1: {
        backgroundColor: COLORS.col3,
        borderRadius: SIZES.radius,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2.5,
        borderColor: COLORS.col3
    },

    prim2: {
        height: HEIGHT.sm,
        marginVertical: SIZES.padding,
        borderRadius: SIZES.radius,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.col6,
        borderColor:COLORS.secondary,
        borderWidth: 2,
    }
}

export const FONTS = {
    largeTitle: {
        // fontFamily: "Roboto-regular", 
        fontSize: SIZES.largeTitle, lineHeight: 55
    },
    h1: {
        // fontFamily: "Roboto-Black", 
        fontSize: SIZES.h1, lineHeight: 36
    },
    h2: {
        // fontFamily: "Roboto-Bold", 
        fontSize: SIZES.h2, lineHeight: 30
    },
    h3: {
        // fontFamily: "Roboto-Bold", 
        fontSize: SIZES.h3, lineHeight: 22
    },
    h4: {
        // fontFamily: "Roboto-Bold", 
        fontSize: SIZES.h4, lineHeight: 22
    },
    h5: {
        // fontFamily: "Roboto-Black", 
        fontSize: SIZES.h5, lineHeight: 20
    },
    body1: {
        // fontFamily: "Roboto-Regular", 
        fontSize: SIZES.body1, lineHeight: 36
    },
    body2: {
        // fontFamily: "Roboto-Regular", 
        fontSize: SIZES.body2, lineHeight: 30
    },
    body3: {
        // fontFamily: "Roboto-Regular", 
        fontSize: SIZES.body3, lineHeight: 22
    },
    body4: {
        // fontFamily: "Roboto-Regular", 
        fontSize: SIZES.body4, lineHeight: 22
    },
    body5: {
        // fontFamily: "Roboto-Regular", 
        fontSize: SIZES.body5, lineHeight: 22
    },
    primary: {
        fontSize: SIZES.body3,
        lineHeight: 30,
        color: COLORS.tetiary,
        fontWeight: "500",
    },
    secondary: {
        fontSize: SIZES.body3,
        lineHeight: 30,
        color: COLORS.black,
        fontWeight: "500"
    },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;