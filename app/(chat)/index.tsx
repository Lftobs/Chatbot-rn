import { useEffect, useRef, useState } from 'react';
import { View, Text, Pressable, Image, ImageBackground, FlatList, TextInput } from 'react-native';
import { SvgXml } from 'react-native-svg';
import {aiRes} from '@/lib/gemini'

type msgContent = {
    content: string,
    time: string | null,
    role: 'user' | 'system',
    id: number
}


const initaldata: Array<msgContent>  = [
  { content: 'Hello', time: null, role: 'system', id: 1 },
]

const curlRight = `<svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.8869 20.1846C11.6869 20.9846 6.55352 18.1212 4.88685 16.2879C6.60472 12.1914 -4.00107 2.24186 2.99893 2.24148C4.61754 2.24148 6 -1.9986 11.8869 1.1846C11.9081 2.47144 11.8869 6.92582 11.8869 7.6842C11.8869 18.1842 17.8869 19.5813 16.8869 20.1846Z" fill="#2377F1"/>
</svg>
`

const curlLeft = `<svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.11315 20.1846C5.31315 20.9846 10.4465 18.1212 12.1132 16.2879C10.3953 12.1914 21.0011 2.24186 14.0011 2.24148C12.3825 2.24148 11 -1.9986 5.11315 1.1846C5.09194 2.47144 5.11315 6.92582 5.11315 7.6842C5.11315 18.1842 -0.88685 19.5813 0.11315 20.1846Z" fill="white"/>
</svg>
`

export default function HomeScreen() {
  const messageRef = useRef<TextInput | null>(null)
  const [message, onChangeMessage] = useState('')
  const [data, setData] = useState<Array<msgContent>> (initaldata)
  const getTime = (date: any) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let amOrPm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+ minutes : minutes;
    let time = hours + ':' + minutes + ' ' + amOrPm;
    return time;
  }

  useEffect( () => {
    console.log(data)
  }, [data])

  return (
    
    <View className="flex flex-1">
      <ImageBackground source={require(`../../assets/images/bg.png`)} resizeMode="repeat" className="bg-slate-300 absolute -z-10 w-full h-full">
        <View className="flex-1 mt-3 mx-3">
          <FlatList
            initialNumToRender={3}
            data={data}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              if (item.role === 'user') {
                return (
                  <View key={item.id} className={`relative bg-[#2377F1] self-end p-3 px-6 rounded-3xl mt-2 ${item.id === data.length && 'mb-3'}`}>
                    <View className="flex-row gap-3">
                      <Text className="text-base max-w-[73%] text-white">{item.content}</Text>
                      <Text className="text-sm text-white self-end">{item.time ?? getTime(new Date) }</Text>
                    </View>

                    <SvgXml xml={curlRight} width={20} height={20} className="absolute bottom-0 right-0 z-50" />
                  </View>
                )
              } else {
                return (
                  <View className={`relative bg-white p-3 pl-6 self-start rounded-3xl mt-2 ${item.id === data.length && 'mb-3'} `}>
                    <View className="flex-row gap-3">
                      <Text className="text-base max-w-[73%] flex-row">{item.content}</Text>
                      <Text className="text-sm self-end">{item.time ?? getTime(new Date) }</Text>
                    </View>

                    <SvgXml xml={curlLeft} width={20} height={20} className="absolute bottom-0 left-[-.1rem] z-50" />
                  </View>
                )
              }

            }}
            keyExtractor={ (item) => item.id.toString()}
            className="mb-14"
          />
        </View>
        <View className="absolute bottom-0 flex-row bg-white h-14 w-[100%] items-center justify-between px-3">
          <Image source={require('../../assets/images/add.png')} />
          <TextInput
            ref={messageRef}
            placeholder='Message'
            onChangeText={onChangeMessage}
            className="border-[#E3E4E6] border-2 h-10 bg-[#F0F1F3] w-3/5 rounded-2xl px-5"
          />
          <Pressable 
            onPress={() => {
              message && setData(prev => [...prev,  { content: message, time: getTime(new Date), role: 'user', id: data.length + 1 }])              
            }}
            onPressOut={ async () => {
              let msg = await aiRes(message) ?? 'Sorry, I did not get that. Can you please rephrase?'
              
              message && setData(prev => [...prev,  { content: msg, time: getTime(new Date), role: 'system', id: data.length + 2 }])
              
              messageRef.current?.clear()
            }}
            className=' w-1/5 bg-[#2377F1] rounded-2xl h-10 items-center justify-center'
          >
            <Text className='text-white font-semibold'>Send</Text>
          </Pressable>

        </View>
      </ImageBackground>
    </View>
  );
}

