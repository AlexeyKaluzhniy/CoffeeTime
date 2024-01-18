import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { useState } from 'react';

type Drink = {
    id: string,
    productName: string,
    price: number,
    cofeId: string,
    cofeName: string,
    favarite: boolean,
    attribute: [
        {
            id: string,
            description: string,
            iconType: string
        }
    ],
    imagesPath: string
};

export default function Favorite() {
    const [data, setData] = useState<Drink[]>([{
        id: '1',
        productName: 'кофейный напиток',
        price: 0,
        cofeId: '1',
        cofeName: 'Capuccino',
        favarite: true,
        attribute: [{ id: '1', description: 'some description', iconType: 'some type' }],
        imagesPath: 'dfgdf'
    }]);

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={({ id }) => id}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Text>{item.cofeName}</Text>
                        </View>
                    );
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        //marginTop: 50
    },
});