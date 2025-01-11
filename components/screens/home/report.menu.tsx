
import { MenuItem } from '@/components/ui/MenuItem';
import { Title } from '@/components/ui/Title';
import { animationMenuItems, menuItems } from '@/config/data/menuItems';
import { globalStyles } from '@/config/theme/theme';
import { View, ScrollView } from 'react-native';

export const ReportMenu = () => {

    return (
        <View style={globalStyles.mainContainer}>
        <View style={globalStyles.globalMargin}>
          <ScrollView>
            <Title text='Opciones del Menu' safe />
            {
              menuItems.map((item, index) => (
                  <MenuItem key={item.component}
                    {...item}
                    href={item.href}
                    isFirst={index === 0}
                    isLast={index === menuItems.length - 1}
                  />
              ))
            }
            <View style={{ margin: 10 }} />
  
            {
              animationMenuItems.map((item, index) => (
                <MenuItem key={item.component}
                  {...item}
                  isFirst={index === 0}
                  isLast={index === animationMenuItems.length - 1}
  
                />
              ))
            }
          </ScrollView>
        </View>
  
      </View>
    );
}