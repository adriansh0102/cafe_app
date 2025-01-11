



import HeaderScreen from "@/components/screens/HeaderScreen";
import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useUser } from "@/hooks/api/user/useUser";
import { UserI } from "@/hooks/api/user/user.interface";
import { colors } from "@/config/theme/theme";
import Loading from "@/components/ui/Loading";
import { CustomView } from "@/components/ui/CustomView";
import { Card } from "@/components/ui/Card";
import { CustomSwitch } from "@/components/ui/customSwitch";
import { Button } from "@/components/ui/Button";
import { AlertFunction, AlertFunctionMessage } from "@/functions/alert";
import dataBase from "@/hooks/api/baseDB";
const data: UserI[] = [
    {
        name: "fsdffdgs",
        last_name: "sdfgdgsdfs",
        phone: "gfdgfdfg",
        email: "dffgdgdfg@gmail.com",
        username: "adfggdfgdfrian",
        rol: "admin",
        status: true,
        id: "67697cc55b4268951a4ea897"
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
    const [isloader, setIsloader] = useState<boolean>(false);

    const onSubmitDeleteUser = async (id: string = '') => {
        setIsloader(true);

        try {
            await dataBase.patch(`/api/users/${id}`);
            setIsloader(false);
            AlertFunctionMessage({ title: 'Satisfactorio', msg: 'Se ha eliminado el usuario correctamente' })
        } catch (error) {
            setIsloader(false);
            AlertFunction({ title: 'Error', msg: 'Ha ocurrido un error al eliminar el usuario' })
        }
    }

    useEffect(() => {
        setUser(data)
    }, [users])

    return (
        <>
            <HeaderScreen title='Gestionar Usuario' />
            {
                isloader ?
                    <Loading />
                    :
                    user.map((item) => (
                        <Card key={item.id}>
                            <View style={styles.userdeleteRow}>
                                <Text>@{item.username}</Text>
                                <Button text={'Eliminar'} style={{ backgroundColor: 'red' }} onPress={() => onSubmitDeleteUser(item.id)} />
                            </View>
                        </Card>
                    ))
            }
        </>
    );
}

const styles = StyleSheet.create({
    userdeleteRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5
    }
})



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