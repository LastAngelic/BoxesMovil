import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import styles from './styles';
import Box from './Box/Box';
import Row from './Tools/Row';
import Coolumn from './Tools/Coolumn';

// const boxes = new Array(10).fill(null).map((v, i) => i +1);

function Comp() {
    return(
        // <View style={styles.container}>
        //     <StatusBar hidden={true}/>
        //     {
        //         boxes.map( v => (
        //             <Box key = {v}>#{v}</Box>
        //         ))
        //     }
        // </View>

        <View style={styles.container}>
            {/* <StatusBar hidden = {true}/> */}
            <Row>
                <Coolumn>
                    <Box>#1</Box>
                    <Box>#2</Box>
                </Coolumn>

                <Coolumn>
                    <Box>#3</Box>
                    <Box>#4</Box>
                </Coolumn>
            </Row>

            <Row>
                <Coolumn>
                    <Box>#5</Box>
                    <Box>#6</Box>
                </Coolumn>
                
                <Coolumn>
                    <Box>#7</Box>
                    <Box>#8</Box>
                </Coolumn>
            </Row>
        </View>
    );
}

export default Comp;