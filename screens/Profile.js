// import React, { useState, useEffect } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   Image,
//   Dimensions,
//   TouchableOpacity,
//   Keyboard,
//   StatusBar,
//   Alert,
//   SafeAreaView,
//   ScrollView,
//   Button,
// } from "react-native";

// import { Icon, Avatar, ListItem } from "react-native-elements";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import * as ImagePicker from "expo-image-picker";

// const { width, height } = Dimensions.get("window");

// export default function Profile({ navigation }) {
//   const [image, setImage] = useState(null);

//   useEffect(() => {
//     (async () => {
//       if (Platform.OS !== "android") {
//         const { status } =
//           await ImagePicker.requestMediaLibraryPermissionsAsync();
//         if (status !== "granted") {
//           alert("Sorry, we need camera roll permissions to make this work!");
//         }
//       }
//     })();
//   }, []);

//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     console.log(result);

//     if (!result.cancelled) {
//       setImage(result.uri);
//     }
//   };

//   const logout = async () => {
//     try {
//       await AsyncStorage.clear();
//       Alert.alert("สำเร็จ", "ออกจากระบบแล้ว");
//       navigation.replace("Login");
//     } catch (e) {
//       Alert.alert("Failed to clear the async storage." + e);
//     }
//   };

//   return (
//     <View style={styles.containerstatus}>
//       <ScrollView>
//         <View style={styles.container}>
//           <View
//             style={{ backgroundColor: "#9E7FFE", width: "100%", height: "60%" }}
//           >
//             <View
//               style={{
//                 paddingTop: 70,
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <TouchableOpacity onPress={pickImage}>
//                 {image ? (
//                   <Image
//                     source={{ uri: image }}
//                     style={{ width: 75, height: 75, borderRadius: 75 }}
//                   />
//                 ) : (
//                   <Icon
//                     name="user-circle"
//                     type="font-awesome"
//                     size={75}
//                     color="#fff"
//                   />
//                 )}
//               </TouchableOpacity>
//             </View>
//             <View
//               style={{
//                 alignItems: "center",
//                 justifyContent: "center",
//                 paddingTop: 15,
//               }}
//             >
//               <View style={styles.nameButton}>
//                 <Text style={styles.nameButtonText}>Test Test</Text>
//               </View>
//             </View>
//             <View
//               style={{
//                 alignItems: "center",
//                 justifyContent: "center",
//                 bottom: 5,
//               }}
//             >
      
//             </View>
//           </View>

//           <Text></Text>
//           <View style={{ paddingTop: 30, top:-15 }}>
//             <View>
//               <ListItem
//                 bottomDivider
//                 // onPress={() => navigation.push("EditProfile")}
//               >
//                 <Icon
//                   name="account-circle"
//                   type="material-community"
//                   size={20}
//                   marginHorizontal={3}
//                 />
//                 <ListItem.Content>
//                   <ListItem.Title style={{ fontSize: 12 }}>
//                     ข้อมูลส่วนตัว
//                   </ListItem.Title>
//                 </ListItem.Content>
//                 <ListItem.Chevron />
//               </ListItem>

              
//             </View>
//           </View>
//           <View style={{ alignItems: "center", paddingTop: 20 }}>
//             <TouchableOpacity style={styles.logoutButton} onPress={logout}>
//               <Icon
//                 name="power-off"
//                 type="font-awesome"
//                 size={20}
//                 color="#fff"
//               />
//               <Text style={styles.logoutButtonText}>ออกจากระบบ</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={{ alignItems: "center", paddingTop: 15 }}>
//             <Text style={{ color: "#9E7FFE" }}>version: 0.1</Text>
//           </View>
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   containerstatus: {
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//     paddingBottom: 90,
//   },
//   textStyle: {
//     fontSize: 12,
//     color: "black",
//     flex: 1,
//   },
//   logoutButtonText: {
//     marginHorizontal: 12,
//     color: "#fff",
//     fontSize: 12,
//     fontWeight: "bold",
//   },
//   logoutButton: {
//     display: "flex",
//     flexDirection: "row",
//     width: "95%",
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#9E7FFE",
//     paddingVertical: 8,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//     elevation: 2,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 2,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.5,
//   },
//   nameButtonText: {
//     marginHorizontal: 12,
//     color: "#fff",
//     fontSize: 10,
//     fontWeight: "bold",
//     color: "#9E7FFE",
//   },
//   nameButton: {
//     display: "flex",
//     flexDirection: "row",
//     width: "60%",
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "white",
//     paddingVertical: 8,
//     paddingHorizontal: 20,
//     borderRadius: 4,
//     elevation: 2,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 2,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.5,
//   },

//   logisticButton: {
//     display: "flex",
//     width: "90%",
//     height: "75%",
//     backgroundColor: "white",
//     paddingVertical: 15,
//     paddingHorizontal: 15,
//     borderRadius: 4,
//     elevation: 2,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 2,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.5,
//   },

//   logisticContainer: {
//     flexDirection: "row",
//     width: "95%",
//     alignSelf: "center",
//     marginTop: 20,
//     marginBottom: 15,
//   },
//   logisticBtn: {
//     flex: 1,
//     width: "30%",
//     marginHorizontal: 0,
//     alignSelf: "center",
//   },
//   logisticIcon: {
//     borderWidth: 0,
//     alignItems: "center",
//     justifyContent: "center",
//     alignSelf: "center",
//     width: 70,
//     height: 70,
//     backgroundColor: "#ffffff",

//     borderRadius: 8,
//     shadowColor: "#000000",
//     shadowOffset: {
//       width: 2,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.5,
//   },

//   logisticBtnTxt: {
//     alignSelf: "center",
//     top: 5,
//     fontSize: 10,
//     color: "#707070",
//   },
//   logisticLogo: {
//     width: "55%",
//     height: "55%",
//   },
// });
