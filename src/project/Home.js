import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native'
import React from 'react'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ImageSlider } from "react-native-image-slider-banner";

const userPhoto = require('../project/images/user/arya-febiyan.png');

const Home = ({ route }) => {
  const { fullname } = route.params;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
    >
      <StatusBar hidden={true} />
      <View style={styles.container}>
        <View style={styles.topMenu}>
          <View style={styles.topMenuUser}>
            <View>
              <Image source={userPhoto} resizeMode={'contain'} style={styles.topMenuUserPhoto} />
            </View>
            <View style={styles.topMenuUserProfile}>
              <Text style={styles.topMenuUserTitle}>Fullstack Developer,</Text>
              <Text style={styles.topMenuUserName}>{fullname}</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity style={styles.topMenuNotification}>
              <FontAwesome5 style={styles.topMenuIconBell} size={20} name={'bell'} solid />
              <FontAwesome5 style={styles.topMenuIconCircle} size={10} name={'circle'} solid />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.searchBox}>
          <TextInput
            placeholder="Search Tutorial"
            style={styles.searchTextInput}
          />
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={styles.categoriesBoxScrollView}
        >
          <View style={[styles.categoriesBox, styles.categoriesBoxMarginRight]}>
            <Text style={styles.categoriesTitle}>Design</Text>
          </View>
          <View style={[styles.categoriesBox, styles.categoriesBoxMarginRight, styles.categoriesBoxActive]}>
            <Text style={styles.categoriesTitleActive}>Multimedia</Text>
          </View>
          <View style={[styles.categoriesBox, styles.categoriesBoxMarginRight]}>
            <Text style={styles.categoriesTitle}>Programming</Text>
          </View>
          <View style={[styles.categoriesBox, styles.categoriesBoxMarginRight]}>
            <Text style={styles.categoriesTitle}>Database</Text>
          </View>
          <View style={styles.categoriesBox}>
            <Text style={styles.categoriesTitle}>Networking</Text>
          </View>
        </ScrollView>
        <View>
          <ImageSlider 
            data={[
              {img: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg'},
              {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU'},
              {img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg'}
            ]}
            showHeader
            autoPlay={true}
            caroselImageStyle={{ resizeMode: 'contain' }}
            onItemChanged={(item) => console.log("item", item)}
            closeIconColor="#fff"
          />
        </View>
      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    paddingVertical:StatusBar.currentHeight,
    paddingHorizontal:12,
    backgroundColor:'#FFFFFF',
  },
  topMenu: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    // backgroundColor:'red',
  },
  topMenuUser: {
    flexDirection:'row',
    alignItems:'center',
  },
  topMenuUserPhoto: {
    width:39,
    height:39,
  },
  topMenuUserProfile: {
    paddingLeft:10,
  },
  topMenuUserName: {
    fontSize:15,
    color:'#444444',
    fontFamily:'Poppins-SemiBold',
    lineHeight:18,
  },
  topMenuUserTitle: {
    fontSize:14,
    color:'#999999',
    fontFamily:'Poppins-Regular',
    lineHeight:18,
  },
  topMenuNotification: {
    backgroundColor:'#DDDDDD',
    paddingTop:6,
    paddingRight:9,
    paddingBottom:6,
    paddingLeft:9,
    borderRadius:8,
    position:'relative',
  },
  topMenuIconBell: {
    color:'#FFFFFF',
  },
  topMenuIconCircle: {
    color:'#FF0000',
    position:'absolute',
    top:3,
    right:4,
  },
  searchBox: {
    marginVertical:20,
  },
  searchTextInput: {
    backgroundColor:'#F2F4F8',
    borderRadius:12,
    paddingHorizontal:16,
    fontSize:14,
    color:'#999999',
    fontFamily:'Poppins-Regular',
  },
  categoriesBoxScrollView: {
    
  },
  categoriesBox: {
    justifyContent:'center',
  },
  categoriesBoxMarginRight: {
    marginRight:16,
  },
  categoriesBoxActive: {
    backgroundColor:'#7CD2E0',
    borderRadius:12,
    fontSize:14,
    paddingHorizontal:16,
    paddingVertical:2,
  },
  categoriesTitleActive: {
    color:'#FFFFFF',
    fontFamily:'Poppins-Regular',
    fontSize:14,
  },
  categoriesTitle: {
    color:'#999999',
    fontFamily:'Poppins-Regular',
  },
})