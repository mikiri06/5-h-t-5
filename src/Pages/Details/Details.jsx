import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Details = () => {
	const [user, setUser] = useState({})
	const [isLoading, setIsLoading] = useState(true)

	const params = useParams()
	const navigate = useNavigate()

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
			.then(response => response.json())
			.then(data => {
				setUser(data)
				setIsLoading(false)
			})
			.catch(error => {
				console.error('Ошибка при загрузке:', error)
				setIsLoading(false)
			})
	}, [])

	if (isLoading) {
		return <div className='loader'></div>
	}

	return (
		<div>
			<ul>
				<li>{user.name}</li>
				<li>{user.username}</li>
				<li>{user.email}</li>
				<li>{user.phone}</li>
				<li>{user.website}</li>
			</ul>

			<button onClick={() => navigate(-1)}>go back</button>
		</div>
	)
}
