import { View, Text, Modal, Platform } from 'react-native'
import React, { useState } from 'react'
import { CustomView } from '../ui/CustomView'
import { Title } from '../ui/Title'
import { Button } from '../ui/Button';
import { colors } from '../../config/theme/theme';

const ModalScreen = () => {

  const [visible, setVisible] = useState(false);

  return (
    <CustomView>
      <Title text='modal' />

      <Button text='Abrir modal' onPress={() => setVisible(true)} />

      <Modal visible={visible}
        animationType='slide'
      >
        <View style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.1)'
        }}>
          <View
            style={{
              paddingHorizontal: 10
            }}
          >

            <Title text='Modal content' safe />
          </View>
          <View style={{flex:1}}></View>
          <Button text='Cerrar Modal' onPress={()=>setVisible(false)}
            style={{
              height:Platform.OS === 'android' ? 40 : 60,
              borderRadius:0
            }}/>
        </View>
      </Modal>
    </CustomView>
  )
}

export default ModalScreen