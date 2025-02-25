import { Maximize } from '@tamagui/lucide-icons'
import { Button, YStack } from 'tamagui'
import { useCurrentThreadWithMessages } from '~/state/message/useCurrentThread'
import {
  closeCurrentThread,
  updateUserCurrentChannel,
  useUserCurrentChannelState,
} from '~/state/user'
import { AnimationDriver } from '../animations/AnimationDriver'
import { ButtonClose } from '../ButtonClose'
import { MessageInput } from '../messages/MessageInput'
import { MessagesList } from '../messages/MessagesList'

export const MainOpenThread = () => {
  const thread = useCurrentThreadWithMessages()
  const channelState = useUserCurrentChannelState()
  const maximized = channelState?.maximized

  return (
    <AnimationDriver name="css">
      <YStack
        bg="$color2"
        shadowColor="$shadowColor"
        shadowRadius={10}
        animation={[
          'quickest',
          {
            opacity: {
              overshootClamping: true,
            },
          },
        ]}
        pos="absolute"
        t={0}
        r={0}
        b={0}
        w="70%"
        zi={1000}
        {...(maximized && {
          w: '100%',
        })}
        {...(thread
          ? {
              opacity: 1,
              x: 0,
            }
          : {
              opacity: 0,
              pe: 'none',
              x: 7,
            })}
      >
        {/* <YStack zi={1000} pos="absolute" t={10} l={-20} jc="center" gap="$3">
          <ButtonClose
            onPress={() => {
              closeCurrentThread()
            }}
          />

          <Button
            onPress={() => {
              updateUserCurrentChannel({
                maximized: true,
              })
            }}
            size="$2"
            ml={4}
            elevation={2}
            circular
            icon={Maximize}
            scaleIcon={1.1}
          ></Button>
        </YStack> */}

        {thread && (
          <>
            <MessagesList messages={thread?.messages || []} />
            <MessageInput inThread />
          </>
        )}
      </YStack>
    </AnimationDriver>
  )
}
