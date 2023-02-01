import React from 'react'
import { Image, Text, ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import ChargesList from './ChargesList'

const BookTicket = () => (
<ScrollView style={styles.book_ticket} showsVerticalScrollIndicator={false}>
<Text style={styles.main_title}>{item.main_title}</Text>
<Text style={styles.current_time}>{item.current_time}</Text>
<Image
    style={styles.seat_pic}
    source={{uri: item.seat_pic}}
    />
<Text style={styles.sort_by}>{item.sort_by}</Text>
<Text style={styles.deal_score}>{item.deal_score}</Text>
<Image
    style={styles.down_arrow}
    source={{uri: item.down_arrow}}
   />
<Text style={styles.seat_count}>{item.seat_count}</Text>
<Image
    style={styles.seat_icon}
    source={{uri: item.seat_icon}}
   />
<Image
    style={styles.menu_icon}
    source={{uri: item.menu_icon}}
   />
<Text style={styles.fees_title}>{item.fees_title}</Text>
<ChargesList item={item.charges_list}/>
</ScrollView>
)

export default BookTicket;

const styles = StyleSheet.create({
main_title: {
    fontSize: 12,
    fontWeight: '250',
    paddingHorizontal: 10,
    paddingTop:5
  },
current_time: {
    fontSize: 12,
    fontWeight: '250',
    paddingHorizontal: 10,
    paddingTop:5
  },
seat_pic: {
    width: '100vw',
    height: '100vw',
    marginTop: 5
  },
sort_by: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
deal_score: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
down_arrow: {
    width: '10vw',
    height: '10vw',
    margin: 5
  },
seat_count: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
seat_icon: {
    width: '10vw',
    height: '10vw',
    margin: 5
  },
menu_icon: {
    width: '10vw',
    height: '10vw',
    margin: 5
  },
fees_title: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  }
});