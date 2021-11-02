import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import Login from "./screens/Login";
// import Register from "./screens/Register";
// import Forgotpassword from "./screens/Forgotpassword";
import Index from "./screens/Index";
// import Profile from "./screens/Profile";

// import Otp from "./screens/Otp";
// import Resetpassword from "./screens/Resetpassword";

import Middlemancoffee from "./screens/Middlemancoffee";
import Lalucia from "./screens/Lalucia";
import Laughcoffee from "./screens/Laughcoffee";
import Artkeephandcraftcoffee from "./screens/Artkeephandcraftcoffee";
import November from "./screens/November";
import Mirrorcoffee from "./screens/Mirrorcoffee";
import Bubbleshake from "./screens/Bubbleshake";
import Meekhwamsook from "./screens/Meekhwamsook";
import Kopihomecoffee from "./screens/Kopihomecoffee";
import Nommee from "./screens/Nommee";

const Stack = createStackNavigator();

const horizontalAnimation = {
  gestureDirection: "horizontal",
  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={horizontalAnimation}>
        {/* <Stack.Screen name='Loading' component={Loading} options={{ 
        headerShown: false,
        title: 'โหลด',
          headerStyle: {
          backgroundColor: '#9E7FFE'
          }}}/> */}



        {/* <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
            title: "เข้าสู่ระบบ",
            headerStyle: {
              backgroundColor: "#9E7FFE",
            },
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
            title: "สมัครสมาชิก",
            headerStyle: {
              backgroundColor: "#9E7FFE",
            },
          }}
        />
        <Stack.Screen
          name="Forgotpassword"
          component={Forgotpassword}
          options={{
            headerShown: false,
            title: "ลืมรหัสผ่าน",
            headerStyle: {
              backgroundColor: "#9E7FFE",
            },
          }}
        />

        <Stack.Screen
          name="Otp"
          component={Otp}
          options={{
            headerShown: false,
            title: "Otp",
            headerStyle: {
              backgroundColor: "#9E7FFE",
            },
          }}
        />

        <Stack.Screen
          name="Resetpassword"
          component={Resetpassword}
          options={{
            headerShown: false,
            title: "รีเซ็ตรหัสผ่าน",
            headerStyle: {
              backgroundColor: "#9E7FFE",
            },
          }}
        /> */}
        <Stack.Screen
          name="Index"
          component={Index}
          options={{
            headerShown: false,
            title: "หน้าแรก",
            headerStyle: {
              backgroundColor: "#9E7FFE",
            },
          }}
        />
        {/* <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            title: "โปรไฟล์",
            headerStyle: {
              backgroundColor: "#9E7FFE",
            },
          }}
        /> */}

<Stack.Screen
          name="Middlemancoffee"
          component={Middlemancoffee}
          options={{
            headerShown: false,
            title: "ทะเลหมอกเขาน้ำใส",
            headerStyle: {
              backgroundColor: "#9E7FFE",
            },
          }}
        />
 <Stack.Screen
          name="Lalucia"
          component={Lalucia}
          options={{
            headerShown: false,
            title: "วัดชลธาราสิงเห",
            headerStyle: {
              backgroundColor: "#9E7FFE",
            },
          }}
        />
 <Stack.Screen
          name="Laughcoffee"
          component={Laughcoffee}
          options={{
            headerShown: false,
            title: "มัสยิด 300 ปี",
            headerStyle: {
              backgroundColor: "#9E7FFE",
            },
          }}
        />

 <Stack.Screen
          name="Artkeephandcraftcoffee"
          component={Artkeephandcraftcoffee}
          options={{
            headerShown: false,
            title: "อุทยานแห่งชาติอ่าวมะนาว",
            headerStyle: {
              backgroundColor: "#9E7FFE",
            },
          }}
        />

 <Stack.Screen
          name="November"
          component={November}
          options={{
            headerShown: false,
            title: "หาดนราทัศน์",
            headerStyle: {
              backgroundColor: "#9E7FFE",
            },
          }}
        />
 <Stack.Screen
          name="Mirrorcoffee"
          component={Mirrorcoffee}
          options={{
            headerShown: false,
            title: "ผานับดาว",
            headerStyle: {
              backgroundColor: "#9E7FFE",
            },
          }}
        />

 <Stack.Screen
          name="Bubbleshake"
          component={Bubbleshake}
          options={{
            headerShown: false,
            title: "น้ำตกปาโจ",
            headerStyle: {
              backgroundColor: "#9E7FFE",
            },
          }}
        />

 <Stack.Screen
          name="Meekhwamsook"
          component={Meekhwamsook}
          options={{
            headerShown: false,
            title: "ศาลเจ้าโก้วเล่งจี่",
            headerStyle: {
              backgroundColor: "#9E7FFE",
            },
          }}
        />

 <Stack.Screen
          name="Kopihomecoffee"
          component={Kopihomecoffee}
          options={{
            headerShown: false,
            title: "วัดพระธาตุภูเขาทอง",
            headerStyle: {
              backgroundColor: "#9E7FFE",
            },
          }}
        />

         <Stack.Screen
          name="Nommee"
          component={Nommee }
          options={{
            headerShown: false,
            title: "สะพานคอย 100 ปี",
            headerStyle: {
              backgroundColor: "#9E7FFE",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
