import {Text, Button, View, FlatList, Keyboard} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Input, Layout, NoteItem} from '../../components';
import {useEffect, useState} from 'react';
import {styles} from './styles';
import navigation from '../../navigation';
import {
  useNavigation,
  useNavigationState,
  useIsFocused,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/types';

const Home = () => {
  const [newNote, setNewNote] = useState('');
  const [notes, setNotes] = useState<string[]>([]);
  const [editedNote, setEditedNote] = useState('');
  const {routes} = useNavigationState(state => state);
  const {buttonStyle, containerStyle, taskContainer} = styles;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const isFocused = useIsFocused();

  useEffect(() => {
    loadNotes();
  }, [isFocused]);

  const onPressAddNote = () => {
    if (newNote == null || newNote === '') return;
    setNotes([...notes, newNote]);
    Keyboard.dismiss();
    setNewNote('');
    saveNotes(notes);
  };

  const onPressNoteItem = (note: string, index: number) => {
    navigation.navigate('Details', {note, index});
  };

  const saveNotes = async (notes: string[]) => {
    await AsyncStorage.setItem('notes', JSON.stringify(notes));
  };

  const loadNotes = async () => {
    try {
      const getNotes = await AsyncStorage.getItem('notes');
      const parsedNotes = getNotes && JSON.parse(getNotes);
      parsedNotes && setNotes(parsedNotes);
    } catch (err) {
      console.log('Application Error. Cannot load data.');
    }
  };

  return (
    <Layout>
      <View style={containerStyle}>
        <Input placeholder="Enter new note" setValue={setNewNote}></Input>
        <View style={buttonStyle}>
          <Button
            color="#841584"
            title="Add Note"
            onPress={onPressAddNote}></Button>
        </View>
        {notes?.length > 0 &&
          notes.map((note, index) => {
            return (
              <View key={index} style={styles.taskContainer}>
                <NoteItem
                  index={index + 1}
                  note={note}
                  onPressNote={onPressNoteItem}
                />
              </View>
            );
          })}
      </View>
    </Layout>
  );
};

export default Home;
