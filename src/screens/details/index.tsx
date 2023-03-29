import { Input, Layout, NoteItem, Header } from "../../components"
import { Text , Button, View, Pressable, Image, SafeAreaView } from "react-native"
import { useState, useEffect } from "react"
import { useNavigation, useNavigationState } from '@react-navigation/native'
import {styles} from './styles'
import navigation from "../../navigation"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../navigation/types'


const Details = () => {
    const {header, input} = styles
    const [editNote, setEditNote] = useState('')
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    const { routes } = useNavigationState((state) => state)
   
    const { note, index } = routes.find((route) => route.name === 'Details')?.params as {
        note?: string
        index : number
      }
      
     const onBackPress = async () => {
        const getNotes = await AsyncStorage.getItem('notes') 
        const parsedNotes = getNotes && JSON.parse(getNotes)
        parsedNotes[index-1] = editNote
        await AsyncStorage.setItem('notes', JSON.stringify(parsedNotes))
        navigation.navigate('Home', { editNote, index })
     }
    
    useEffect( () => {
        note && setEditNote(note)
    },[note])

    return(
        <Layout>
        <View>
       <View style ={header}>
        <Header name= 'Details' onClosePress ={onBackPress}> </Header>
        </View>
        <View style ={input}>
            <Input
                placeholder = "Edit note"
                setValue={setEditNote}
                value= {editNote}
                >
            </Input>
            </View>
        </View>
        </Layout>
       
    )


}

export default Details