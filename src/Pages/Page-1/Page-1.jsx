import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Page1 = () => {
	const [users, setUsers] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(data => {
				setUsers(data)
				setIsLoading(false)
			})
			.catch(error => {
				console.error('Ошибка при загрузке:', error)
				setIsLoading(false)
			})
	}, [])

	return (
		<div>
			{isLoading ? (
				<span className='loader'></span>
			) : (
				users.map(user => (
					<h2 key={user.id}>
						<Link to={`/user/${user.id}`}>{user.username}</Link>
					</h2>
				))
			)}
		</div>
	)
}
