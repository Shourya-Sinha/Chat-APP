import { Avatar, HStack,Text } from '@chakra-ui/react'
import React from 'react'
const Message = ({text,uri,user='other'}) => {
  return (
    <HStack alignSelf={user === 'me' ? 'flex-end': 'flex-start'} bg={'gray.100'} paddingX={user=== 'me'?'4':'2'} paddingY={'2'} borderRadius={'base'}>
        {
            user === 'other' && <Avatar src={uri} />
        }
        <Text>{text}</Text>
        {
            user ==='me' && <Avatar src={uri} />
        }

        
    </HStack>
  )
}

export default Message