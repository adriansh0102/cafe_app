import { View, Text, useWindowDimensions, SectionList } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CustomView } from '@/components/ui/CustomView';
import { Separator } from '@/components/ui/Separator';
import SubTitle from '@/components/ui/SubTitle';
import { Title } from '@/components/ui/Title';
import { Card } from '@/components/ui/Card';


export interface DataI {
    title: string;
    data: string [];
}

const data: DataI[] = [
    {
        title:'Titulo 1',
        data:['descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion',]
    },
    {
        title:'Titulo 2',
        data:['descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion',]
    },
    {
        title:'Titulo 3',
        data:['descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion','descripcion',]
    }
]

const CustomSectionListScreen = () => {

    const { height } = useWindowDimensions();
    const { top } = useSafeAreaInsets();

  return (
    <CustomView>
        <Title text='Lista de personajes'/>

        <Card>
            <SectionList
                sections={data}
                keyExtractor={ ( item, index ) => item + index}
                renderItem={({item}) => <Text>{item}</Text>} 
                renderSectionHeader={ ({section}) => <SubTitle text={section.title}></SubTitle>}
                SectionSeparatorComponent={Separator}
                stickySectionHeadersEnabled
                ListHeaderComponent={ () => <Title text='Titulos header'/>}
                ListFooterComponent={ () => <Title text='Titulos footer'/>}
                showsVerticalScrollIndicator= {false}
                style={{
                    height: height- top - 100
                }}

            />
        </Card>
    </CustomView>
  )
}

export default CustomSectionListScreen