import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
  LogBox,
} from "react-native";
import { Icon, Header, Avatar } from "react-native-elements";
import MapView, { Callout, Marker } from "react-native-maps";

import ViewSlider from "react-native-view-slider";

const { width, height } = Dimensions.get("window");

export default function Kopihomecoffee({ navigation }) {


  return (
    <View>
      <StatusBar animated={true} />

      <Header
        placement="center"
        backgroundColor="#9E7FFE"
        containerStyle={{
          borderBottomWidth: 0,
          height: Platform.select({
            android: 70,
            default: 70,
          }),
        }}
        leftComponent={
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.goBackcontainer}
          >
            <Icon
              style={styles.goBackimage}
              name="angle-left"
              type="font-awesome"
              size={25}
              color="#fff"
            />
          </TouchableOpacity>
        }
        centerComponent={{ text: 'คาเฟ่แนะนำในเมืองนราธิวาส', style: { color: '#fff' } }}
        
      />

      <ScrollView>
        <View style={styles.container}>
          <>
            <ViewSlider
              renderSlides={
                <>
                  <View style={styles.viewBox}>
                    <Image
                      source={require("../src/assets/kopihomecoffee1.jpg")}
                      style={{ height: 200, width }}
                    />
                  </View>
                  <View style={styles.viewBox}>
                    <Image
                      source={require("../src/assets/kopihomecoffee2.jpg")}
                      style={{ height: 200, width }}
                    />
                  </View>
                  <View style={styles.viewBox}>
                    <Image
                      source={require("../src/assets/kopihomecoffee3.jpg")}
                      style={{ height: 200, width }}
                    />
                  </View>
                </>
              }
              style={styles.slider} //Main slider container style
              height={200} //Height of your slider
              slideCount={3} //How many views you are adding to slide
              dots={true} // Pagination dots visibility true for visibile
              dotActiveColor="#9E7FFE" //Pagination dot active color
              dotInactiveColor="white" // Pagination do inactive color
              dotsContainerStyle={styles.dotContainer} // Container style of the pagination dots
            //   autoSlide={false} //The views will slide automatically
            //   slideInterval={3000} //In Miliseconds
            />
          </>

                   
                  <View style={styles.contentViewBox}>

                    <View style={styles.contentContainer}>
                      <View
                        style={styles.contentBtn}
                 
                      >
                        <View style={styles.contentIcon}>
                          <Text style={styles.contentBtnTxt}>9.วัดพระธาตุภูเขาทอง</Text>
                          
                        </View>
                      </View>
                    </View>

                    <View style={styles.contentContainer}>
                      <View
                        style={styles.contentBtn}
                      >
                        <View style={styles.contentIcon1}>
                          
                          <Text style={styles.contenthistoryBtnTxt}><Text style={{fontWeight: 'bold'}}>ประวัติความเป็นมา : </Text><Text style={styles.contenthistoryBtnTxt1}> เป็นสถานที่ยึดเหนี่ยวจิตใจของเหล่าพี่น้องชาวไทยพุทธ ตั้งอยู่ในพื้นที่อำเภอสุคิริน เมื่อเข้ามาด้านในสิ่งหนึ่งที่นักท่องเที่ยวสัมผัสได้ นั่นคือ บรรยากาศที่รายล้อมด้วยธรรมชาติที่สมบูรณ์ นอกจากจะได้เข้ามาไหว้พระทำบุญแล้ว ในวันที่ท้องฟ้าอากาศเป็นใจ อาจจะได้เชยชมทะเลหมอก และพัดพามาพร้อมสายลมเย็น ๆ ณ บริเวณระเบียงชมวิวภายในวัด รวมถึงยังเป็นพื้นที่สำหรับปฏิบัติธรรม ให้กับผู้ที่ต้องการแสวงหาความสุขสงบภายในจิตใจอีกด้วย</Text>
                        </Text></View>
                      </View>
                    </View>

                     <View style={styles.contentContainer}>
                      <View
                        style={styles.contentBtn}
             
                      >
                        <View style={styles.contentIcon2}>
                          
                          <Text style={styles.contenthistoryBtnTxt}><Text style={{fontWeight: 'bold'}}>สถานที่ : </Text><Text style={styles.contenthistoryBtnTxt1}> ตำบลภูเขาทอง อำเภอสุคิริน จังหวัดนราธิวาส</Text>
                        </Text></View>
                      </View>
                    </View>

                    <View style={styles.contentContainer}>
                      <View
                        style={styles.contentBtn}
                      >
                       
                      </View>
                    </View>    
                  </View>

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    map: {
    width: "100%",
    height: "100%",
    
  },
  container: {
    flex: 1,
    paddingBottom: "151%",
  },

  Logo: {
    width: 25,
    height: 25,
    left: 7.5,
  },

  viewBox: {
    paddingHorizontal: 20,
    justifyContent: "center",
    width: width,
    padding: 10,
    alignItems: "center",
    height: 200,
  },
  slider: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
  },
  dotContainer: {
    backgroundColor: "transparent",
    position: "absolute",
    bottom: -10,
  },

  textStyle: {
    fontSize: 12,
    color: "black",
    flex: 1,
  },
  contentContainer: {
    flexDirection: "row",
    width: "96%",
    alignSelf: "center",
    marginTop: 10,
  
  },
  contentBtn: {
    flex: 1,
    width: "30%",
    marginHorizontal: 0,
    alignSelf: "center",
  },
  contentIcon: {
    borderWidth: 0,
    width: '100%',
    height: 45,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    shadowColor: "#000000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },

  contentIcon1: {
    borderWidth: 0,
    width: '100%',
    height: 260,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    shadowColor: "#000000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },

    contentIcon2: {
    borderWidth: 0,
    width: '100%',
    height: 70,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    shadowColor: "#000000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },

   contentIcon3: {
    borderWidth: 0,
    width: '100%',
    height: 250,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    shadowColor: "#000000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },

  contentBtnTxt: {
    padding: 10,
    fontSize: 16,
    color: "#000000",
    textAlign: 'center'
  },
  contenthistoryBtnTxt: {
    paddingTop: 10,
    paddingHorizontal: 25,
    fontSize: 16,
    color: "#000000",

  },

    contenthistoryBtnTxt1: {
    paddingTop: 5,
    paddingHorizontal: 25,
    fontSize: 14,
    color: "#000000",
  },



  contentLogo: {
    width: "75%",
    height: "75%",
  borderRadius: 8,
  },

  contentViewBox: {
    width: width,
    height: 200,
  },
  contentSlider: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  contentDotContainer: {
    backgroundColor: "transparent",
    position: "absolute",
    bottom: -15,
  },
  
  inputView: {
    width: "110%",
    height: 25,
    backgroundColor: "#ffffff",
    // backgroundColor: "#dfe4ea",
    borderRadius: 10,
    paddingHorizontal: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
 goBackcontainer: {
    position: "absolute",
    left: 10,
    top: -2,
  },
  goBackimage: {
    width: 30,
    height: 30,
  },

});

