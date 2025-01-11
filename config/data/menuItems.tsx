import { RelativePathString } from "expo-router";

export interface ItemI {
    id: number;
    name: string;
    icon: string;
    href: RelativePathString;
}

export const animationMenuItems: ItemI[] = [
    {
        id: 1,
        name: 'Animation 101',
        icon: 'cube-outline',
        href: '../components/switches/SwitchScreen'
    },
    {
        id: 2,
        name: 'Animation 102',
        icon: 'albums-outline',
        href: '../components/switches/SwitchScreen'
    },
]

export const menuItems: ItemI[] = [

    {
        id: 1,
        name: 'Todos los usuarios',
        icon: 'toggle-outline',
        href: "../user"
    },
    {
        id: 2,
        name: 'Agregar Usuario',
        icon: 'alert-circle-outline',
        href: "../users/user"
    },
    {
        id: 3,
        name: 'Eliminar Usuario',
        icon: 'document-text-outline',
        href: "../users/user"
    },   
]

export const userItems: ItemI[] = [

    {
        id: 1,
        name: 'Todos los usuarios',
        icon: 'toggle-outline',
        href: "../user"
    },
    {
        id: 2,
        name: 'Agregar Usuario',
        icon: 'alert-circle-outline',
        href: "../user/screens/saveUser"
    },
    {
        id: 3,
        name: 'Eliminar Usuario',
        icon: 'document-text-outline',
        href: "../user/screens/deleteUser"
    },   
]

