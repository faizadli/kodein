import { View, Text, Image, ScrollView, TouchableOpacity,StatusBar, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ImageSlider } from 'react-native-image-slider-banner';

const Home = ({ route }) => {
  const { fullname } = route.params;
  
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
    >
        <StatusBar hidden={true}/>
        <View style={styles.container}>
          <View styles={styles.topMenu}>
            <View style={styles.topMenuUser}>
              <View>
                <Image 
                  source={require('./images/user/userPhoto.png')}
                  resizeMode={'contain'} 
                  style={styles.topMenuUserPhoto}
                />
              </View>
              <View style={styles.topMenuUserProfile}>
                <Text style={styles.topMenuUserTitle}>FullstackDeveloper,</Text>
                <Text style={styles.topMenuUserName}>Mochammad Faiz Adli</Text>
              </View>
            </View>
            <View>
              <TouchableOpacity style={styles.topMenuNotification}>
                <FontAwesome5 
                  style={styles.topMenuIconBell}
                  size={20}
                  name={'bell'}
                  solid
                />
                <FontAwesome5 
                  style={styles.topMenuIconCircle}
                  size={10}
                  name={'circle'}
                  solid
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.searchBox}>
            <TextInput
              placeholder='Search Tutorial'
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
            <View style={[styles.categoriesBox]}>
              <Text style={styles.categoriesTitle}>Networking</Text>
            </View>
          </ScrollView>
          <View>
            <ImageSlider
              data={[
                {img: 'https://i.pinimg.com/736x/c4/5e/9c/c45e9c05471593b3014022f0dc10163f.jpg'},
                {img: 'https://awsimages.detik.net.id/customthumb/2015/11/20/1146/JaewoonU1.jpg?w=750&q=90'},
                {img: 'https://awsimages.detik.net.id/community/media/visual/2020/02/10/e086ec7c-82c6-4d5c-8d11-d969d602b162.jpeg?w=750&q=90'}
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
    backgroundColor:'#ffffff',
  },
  topMenu:{
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center',
  },
  topMenuUser: {
    flexDirection:'row',
    alignItems:'center',
  },
  topMenuUserPhoto:{
    width:39,
    height:39
  },
  topMenuUserProfile:{
    paddingLeft:10,
  },
  topMenuUserName:{
    fontSize:15,
    color:'#444444',
    fontWeight: 'semi-bold',
    lineHeight:18,
  },
  topMenuUserTitle: {
    fontSize:14,
    color:'#999999',
    lineHeight:18,
  },
  topMenuNotification:{
    backgroundColor: '#DDDDDD',
    paddingTop:6,
    paddingRight:9,
    paddingBottom:6,
    paddingLeft:9,
    borderRadius:8,
    position:'relative',
  },
  topMenuIconBell:{
    color:'#ffffff',
  },
  topMenuIconCircle:{
    color:'#ff0000',
    position:'absolute',
    top:3,
    right:4,
  },
  searchBox: {
    marginVertical:20,
  },
  searchTextInput: {
    backgroundColor:'#f2f4f8',
    borderRadius:12,
    paddingHorizontal:16,
    fontSize:14,
    color:'#999999',
  },
  categoriesBoxScrollView:{

  },
  categoriesBox:{
    justifyContent:'center',
  },
  categoriesBoxMarginRight: {
    marginRight:16,
  },
  categoriesBoxActive:{
    backgroundColor:'#7cd2e0',
    borderRadius:12,
    fontSize:14,
    paddingHorizontal:16,
    paddingVertical:2,
  },
  categoriesTitleActive:{
    color:'#ffffff',
    fontSize:14,
  },
  categoriesTitle:{
    color:'#999999',
  },
})