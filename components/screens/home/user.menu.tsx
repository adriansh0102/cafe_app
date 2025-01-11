
import { MenuItem } from '@/components/ui/MenuItem';
import { Title } from '@/components/ui/Title';
import { userItems } from '@/config/data/menuItems';
import { globalStyles } from '@/config/theme/theme';
import {  View, ScrollView } from 'react-native';

export const UserMenu = () => {

  return (
    <View style={globalStyles.mainContainer}>
      <View style={globalStyles.globalMargin}>
        <ScrollView>
          <Title text='Gestionar Usuarios' safe />
          {
            userItems.map((item, index) => (
              <MenuItem key={item.id}
                {...item}
                href={item.href}
                isFirst={index === 0}
                isLast={index === userItems.length - 1}
              />
            ))
          }               
        </ScrollView>
      </View>
    </View>
  );
}