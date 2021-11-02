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
import ViewSlider from "react-native-view-slider";

const { width, height } = Dimensions.get("window");

export default function Home({ navigation }) {


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
                      source={require("../src/assets/mirrorcoffee1.jpg")}
                      style={{ height: 200, width }}
                    />
                  </View>
                  <View style={styles.viewBox}>
                    <Image
                      source={require("../src/assets/meekhwamsook1.jpg")}
                      style={{ height: 200, width }}
                    />
                  </View>
                  <View style={styles.viewBox}>
                    <Image
                      source={require("../src/assets/artkeephandcraftcoffee1.jpg")}
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
              autoSlide={false} //The views will slide automatically
              slideInterval={3000} //In Miliseconds
            />
          </>

                   
                  {/* <View style={styles.categoryViewBox}>
                    <View style={styles.categoryContainer}>
                      <TouchableOpacity
                        style={styles.categoryBtn}
                        onPress={() => navigation.navigate('Middlemancoffee')}
                      >
                        <View style={styles.categoryIcon}>
                          <Image
                            style={styles.categoryLogo}
                            source={require("../src/assets/Middlemancoffee1.jpg")}
                          />
                          <Text style={styles.categoryBtnTxt}>1.ทะเลหมอกเขาน้ำใส</Text>
                        </View>
                      </TouchableOpacity>
                    </View> */}

                    <View style={styles.categoryViewBox}>
                    <View style={styles.categoryContainer}>
                      <TouchableOpacity
                        style={styles.categoryBtn}
                        onPress={() => navigation.navigate('Middlemancoffee')}
                      >
                        <View style={styles.categoryIcon}>
                          <Image
                            style={styles.categoryLogo}
                            source={require("../src/assets/middlemancoffee1.jpg")}
                          />
                          <Text style={styles.categoryBtnTxt} >1.ทะเลหมอกเขาน้ำใส</Text>
                        </View>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.categoryContainer}>
                      <TouchableOpacity
                        style={styles.categoryBtn}
                        onPress={() => navigation.navigate('Lalucia')}
                      >
                        <View style={styles.categoryIcon}>
                          <Image
                            style={styles.categoryLogo}
                            source={require("../src/assets/lalucia1.jpg")}
                          />
                          <Text style={styles.categoryBtnTxt}>2.วัดชลธาราสิงเห</Text>
                        </View>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.categoryContainer}>
                      <TouchableOpacity
                        style={styles.categoryBtn}
                        onPress={() => navigation.navigate('Laughcoffee')}
                      >
                        <View style={styles.categoryIcon}>
                          <Image
                            style={styles.categoryLogo}
                            source={require("../src/assets/laughcoffee1.jpg")}
                          />
                          <Text style={styles.categoryBtnTxt}>3.มัสยิด 300 ปี</Text>
                        </View>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.categoryContainer}>
                      <TouchableOpacity
                        style={styles.categoryBtn}
                        onPress={() => navigation.navigate('Artkeephandcraftcoffee')}
                      >
                        <View style={styles.categoryIcon}>
                          <Image
                            style={styles.categoryLogo}
                            source={require("../src/assets/artkeephandcraftcoffee1.jpg")}
                          />
                          <Text style={styles.categoryBtnTxt}>4.อุทยานแห่งชาติอ่าวมะนาว</Text>
                        </View>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.categoryContainer}>
                      <TouchableOpacity
                        style={styles.categoryBtn}
                        onPress={() => navigation.navigate('November')}
                      >
                        <View style={styles.categoryIcon}>
                          <Image
                            style={styles.categoryLogo}
                            source={require("../src/assets/november1.jpg")}
                          />
                          <Text style={styles.categoryBtnTxt}>5.หาดนราทัศน์</Text>
                        </View>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.categoryContainer}>
                      <TouchableOpacity
                        style={styles.categoryBtn}
                        onPress={() => navigation.navigate('Mirrorcoffee')}
                      >
                        <View style={styles.categoryIcon}>
                          <Image
                            style={styles.categoryLogo}
                            source={require("../src/assets/mirrorcoffee1.jpg")}
                          />
                          <Text style={styles.categoryBtnTxt}>6.ผานับดาว</Text>
                        </View>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.categoryContainer}>
                      <TouchableOpacity
                        style={styles.categoryBtn}
                        onPress={() => navigation.navigate('Bubbleshake')}
                      >
                        <View style={styles.categoryIcon}>
                          <Image
                            style={styles.categoryLogo}
                            source={require("../src/assets/bubbleshake1.jpg")}
                          />
                          <Text style={styles.categoryBtnTxt}>7.น้ำตกปาโจ</Text>
                        </View>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.categoryContainer}>
                      <TouchableOpacity
                        style={styles.categoryBtn}
                        onPress={() => navigation.navigate('Meekhwamsook')}
                      >
                        <View style={styles.categoryIcon}>
                          <Image
                            style={styles.categoryLogo}
                            source={require("../src/assets/meekhwamsook1.jpg")}
                          />
                          <Text style={styles.categoryBtnTxt}>8.ศาลเจ้าโก้วเล่งจี่</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    
                    <View style={styles.categoryContainer}>
                      <TouchableOpacity
                        style={styles.categoryBtn}
                        onPress={() => navigation.navigate('Kopihomecoffee')}
                      >
                        <View style={styles.categoryIcon}>
                          <Image
                            style={styles.categoryLogo}
                            source={require("../src/assets/kopihomecoffee1.jpg")}
                          />
                          <Text style={styles.categoryBtnTxt}>9.วัดพระธาตุภูเขาทอง</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    
                    <View style={styles.categoryContainer}>
                      <TouchableOpacity
                        style={styles.categoryBtn}
                        onPress={() => navigation.navigate('Nommee')}
                      >
                        <View style={styles.categoryIcon}>
                          <Image
                            style={styles.categoryLogo}
                            source={require("../src/assets/nommee1.jpg")}
                          />
                          <Text style={styles.categoryBtnTxt}>10.สะพานคอย 100 ปี</Text>
                        </View>
                      </TouchableOpacity>
                    </View>

                  </View>
                  
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: "523%",
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
  categoryContainer: {
    flexDirection: "row",
    width: "96%",
    alignSelf: "center",
    marginTop: 10,
  
  },
  categoryBtn: {
    flex: 1,
    width: "30%",
    marginHorizontal: 0,
    alignSelf: "center",
  },
  categoryIcon: {
  
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: '100%',
    height: '100%',
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

  categoryBtnTxt: {
    alignSelf: "center",
    fontSize: 16,
    color: "#000000",
    top: 5
  },
  categoryLogo: {
    width: "75%",
    height: "75%",
  borderRadius: 8,
  },

  categoryViewBox: {
    width: width,
    height: 200,
  },
  categorySlider: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  categoryDotContainer: {
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


});
