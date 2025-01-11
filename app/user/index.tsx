



import HeaderScreen from "@/components/screens/HeaderScreen";
import { useEffect, useState } from "react";
import { Button } from '../../components/ui/Button';
import { ActivityIndicator, Text, View } from "react-native";
import { useUser } from "@/hooks/api/user/useUser";
import { UserI } from "@/hooks/api/user/user.interface";
import { colors } from "@/config/theme/theme";
import Loading from "@/components/ui/Loading";
import { CustomView } from "@/components/ui/CustomView";
import { Card } from "@/components/ui/Card";
import { CustomSwitch } from "@/components/ui/customSwitch";
const data: UserI[] = [
  {
    name: "fsdffdgs",
    last_name: "sdfgdgsdfs",
    phone: "gfdgfdfg",
    email: "dffgdgdfg@gmail.com",
    username: "adfggdfgdfrian",
    rol: "admin",
    status: true,
    id: "6757dc48c472ee89d951dcbe"
  },
  {
    "name": "fsdfdfdgs",
    "last_name": "sdfdgdgsdfs",
    "phone": "gfddgfdfg",
    "email": "dffdgdgdfg@gmail.com",
    "username": "adfggdfdgdfrian",
    "rol": "admin",
    "status": false,
    "id": "675ad3aa1e7d3f984866e1ca"
  },
  {
    "name": "fsdsfdfdgs",
    "last_name": "sdfdsgdgsdfs",
    "phone": "gfdsdgfdfg",
    "email": "dffsdgdgdfg@gmail.com",
    "username": "asd",
    "rol": "admin",
    "status": true,
    "id": "675ad8a91a9fe9b91175c01c"
  },
  {
    "name": "fsdsfdjfdgs",
    "last_name": "sdfdsjgdgsdfs",
    "phone": "gfdjsdgfdfg",
    "email": "dffsjdgdgdfg@gmail.com",
    "username": "qwe",
    "rol": "user",
    "status": false,
    "id": "675b4b4cadf0cf12151e11f7"
  }
]


export default function HomeScreen() {
  const [user, setUser] = useState<UserI[]>([]);
  const { users, isLoading } = useUser.find();

  useEffect(() => {
    setUser(data)
  }, [users])

  return (
    <>
      <HeaderScreen title='Gestionar Usuario' />
      {
        user.map((item) => (
          <Card key={item.id}>
            <CustomSwitch text={`@${item.username}`} isOn={item.status} onChange={(element) => { }} />
          </Card>
        ))
      }
    </>
  );
}



// import HeaderScreen from "@/components/screens/HeaderScreen";
// import { useEffect, useState } from "react";
// import { Button } from '../../components/ui/Button';
// import { ActivityIndicator, Text, View } from "react-native";
// import { useUser } from "@/hooks/api/user/useUser";
// import { UserI } from "@/hooks/api/user/user.interface";
// import { colors } from "@/config/theme/theme";
// import Loading from "@/components/ui/Loading";



// export default function HomeScreen() {
//   const [user, setUser] = useState<UserI[]>([]);
//   const { users, isLoading } = useUser.getAllUser();

//   useEffect(() => {
//     if (!isLoading) setUser(users)
//   }, [users])

//   return (
//     <>
//       {
//         isLoading
//           ? <Loading/>
//           : <>
//             <HeaderScreen title='Gestionar Usuario' />
//             <Button text="clik" onPress={() => { }} />
//             {/* <Text>{user.toString()}</Text> */}
//             {
//               users.map((item)=>(
//                 <Text>{item.name}</Text>
//               ))
//             }
//           </>
//       }
//     </>
//   );
// }