import React, { Component }  from 'react';
import { View, Text, ScrollView, StyleSheet} from 'react-native';
import Header from './Header';
import Banner from './Banner';
import Content from './Content';

class UIONE extends Component {
    render(){
        return (
            <ScrollView style={styles.container}>
                <Header />
                <Banner />
                <Content />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{ flex:1, backgroundColor:'#fff'}
})

export default UIONE;
