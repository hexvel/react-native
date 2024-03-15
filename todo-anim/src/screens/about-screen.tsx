import { Feather } from '@expo/vector-icons'
import {
	Box,
	Icon,
	Image,
	ScrollView,
	Text,
	VStack,
	useColorModeValue,
} from 'native-base'
import React from 'react'
import AnimatedColorBox from '../components/animated-color-box'
import LinkButton from '../components/link-button'
import Masthead from '../components/masthead'
import Navbar from '../components/navbar'

const AboutScreen = () => {
	return (
		<AnimatedColorBox
			flex={1}
			bg={useColorModeValue('warmGray.50', 'warmGray.800')}
			w='full'
		>
			<Masthead
				title='О приложении'
				image={require('../assets/about-masthead.png')}
			>
				<Navbar />
			</Masthead>
			<ScrollView
				borderTopLeftRadius='20px'
				borderTopRightRadius='20px'
				bg={useColorModeValue('warmGray.50', 'primary.900')}
				mt='-20px'
				pt='30px'
				p={4}
			>
				<VStack flex={1} space={4}>
					<Box alignItems='center'>
						<Image
							source={require('../assets/hexvel.jpg')}
							borderRadius='full'
							resizeMode='cover'
							w={120}
							h={120}
							alt='author'
						/>
					</Box>
					<Text fontSize='md' w='full'>
						Это приложение на React Native, которое поможет вам записывать сюда
						важные события.
					</Text>
					<LinkButton
						colorScheme='red'
						size='lg'
						borderRadius='full'
						href='https://youtube.com/@hexvel'
						leftIcon={
							<Icon as={Feather} name='youtube' size='sm' opacity={0.5} />
						}
					>
						Ютуб канал
					</LinkButton>
				</VStack>
			</ScrollView>
		</AnimatedColorBox>
	)
}

export default AboutScreen
