import React from 'react'
import { Flex, Box } from 'blockstack-ui'
import { Text } from '@components/section'
import { Button } from '@components/button'
import useCookie from 'react-use-cookie'
import { NOT_ACCEPTED, ACCEPTED } from '@common/cookies'

const CookieBanner = ({ ...rest }) => {
  const [cookie, setCookie] = useCookie('cookiesBanner', NOT_ACCEPTED)
  if (cookie === ACCEPTED) {
    return null
  }
  const handleClick = () => {
    if (cookie === NOT_ACCEPTED) {
      setCookie(ACCEPTED)
    }
  }
  return (
    <Box
      maxWidth={['100%', '300px', '300px']}
      zIndex={9999}
      position="fixed"
      bottom={0}
      right={[0, 0, 20]}
      bg="white"
      p={5}
      borderRadius={[0, '5px 5px 0 0', '5px 5px 0 0']}
      boxShadow="0px 2px 12px rgba(0, 0, 0, 0.04), 0px 1px 2px rgba(0, 0, 0, 0.08)"
    >
      <Box pb={5}>
        <Text fontSize={1}>
          We use cookies and similar technologies to analyze traffic and enhance
          your experience. For more information or to opt out, visit our{' '}
          <Text fontSize={1} is="a" href="/legal/privacy-policy">
            Privacy Policy
          </Text>
          .
        </Text>
      </Box>
      <Flex alignItems="center">
        <Button onClick={handleClick} noIcon py={2} mr={4} fontSize={1} px={3}>
          I agree
        </Button>
        <Text lineHeight={1} fontSize={1} is="a" href="/legal/privacy-policy">
          Learn more
        </Text>
      </Flex>
    </Box>
  )
}

export default CookieBanner
