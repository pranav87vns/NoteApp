import { View, Text ,Image, Pressable} from 'react-native'

import LeftArrow from '../header/leftarrow.svg'

export const Header = (props: any) => {
  return (
    <Pressable style={{flexDirection:'row', margin:15 }} onPress={props.onClosePress}>
      <Image source={require('../../assets/arrow.png')} resizeMode='contain' style={{
        width: '28%',
        height: '70%'
      }}></Image>
      <Text style={{fontWeight:'bold', fontSize:20, color:'#4c00b0', marginLeft:100}}>
        {props.name}
      </Text>
    </Pressable>
  )
}
