import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import UserRecentPostsList from './layouts/UsersRecentPosts/UsersRecentPosts'
import { MantineProvider, AppShell, LoadingOverlay } from '@mantine/core'
import { useWindowScroll, useScrollLock } from '@mantine/hooks'
import { NotificationsProvider } from '@mantine/notifications';

function App() {
	

    return (
		<>
			<MantineProvider
				theme={{
					primaryColor: 'green',
					fontFamily: 'Verdana, Open Sans, sans serif',
				}}
			>
				<NotificationsProvider position="bottom-left" zIndex={2077}>
					<UserRecentPostsList />

				</NotificationsProvider>
			</MantineProvider>
		</>
    )
}

export default App
