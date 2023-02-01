import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const chargesListItem = ({ item }) => (
<View style={styles.charges_list_item}>
<Text style={styles.charges}>{item.charges}</Text>
<Text style={styles.seat_location}>{item.seat_location}</Text>
<Text style={styles.rating}>{item.rating}</Text>
<Text style={styles.amazing_deal}>{item.amazing_deal}</Text>
<Image
    style={styles.right_arrow}
    source={{uri: item.right_arrow}}
   />
</View>
  );

const ChargesList = ({ item }) => (
<FlatList
    style={styles.charges_list}
    data={item}
    renderItem={chargesListItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default ChargesList;

const styles = StyleSheet.create({
charges: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
seat_location: {
    fontSize: 12,
    fontWeight: '250',
    paddingHorizontal: 10,
    paddingTop:5
  },
rating: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
amazing_deal: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
right_arrow: {
    width: '10vw',
    height: '10vw',
    margin: 5
  }
});