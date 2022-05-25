import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import UserRecentPostsList from './layouts/UsersRecentPosts/UsersRecentPosts'
import { MantineProvider, AppShell } from '@mantine/core'

function App() {


    return (
		<>
			<MantineProvider
				theme={{
					fontFamily: 'Verdana, Open Sans, sans serif',
				}}
			>
				<UserRecentPostsList />
			</MantineProvider>
		</>
    )
}

export default App
