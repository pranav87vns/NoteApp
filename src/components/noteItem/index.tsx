
import React from 'react';
import { Text, View, Pressable} from "react-native";
import { styles } from './styles'

export const NoteItem = ({index,note,onPressNote}: 
    {index:number; note:string; onPressNote:(note : string, index:number )=>void}) => {

    const { container, indexContainer, noteStyle, indexStyle, noteContainer} = styles
    const onPressNoteItem = () => {
        onPressNote(note, index)
    }

    return (
        <Pressable style={container} onPress={onPressNoteItem}>
            <View style={indexContainer}>
                <Text style={indexStyle}>{index}</Text>
            </View>
            <View style={noteContainer}>
                <Text style={noteStyle}>{note}</Text>
            </View>
        </Pressable>
    );
}

