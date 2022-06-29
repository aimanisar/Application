import React from "react";

import{
    StyleSheet,
    View,
    Text,
}  from 'react-native';


const Header = (props) => {
    return(
        <View
            style={styles.header}
        >
            <Text>
                I am
            </Text>
        </View>

    )
}

const styles= StyleSheet.create(
    {
        header: {
            width:'100%',
            height: 70,   
            backgroudColor: '#6495ED',
            justifyContent: 'center',
            
        }
    }
)

export default Header;