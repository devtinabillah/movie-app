import { LOGIN } from 'constants/apiRoute';
import { TOKEN } from 'constants/key';
import { STATUS_SUCCESS } from 'constants/response';
import { TTL_IN_MILLIS } from 'constants/time';
import api from 'utils/api';
import { createBody } from 'utils/helper';
import { hideLoading, reset, setError, setLogin, showLoading } from './actions';

export const login = (username, password, remember) => {
	return dispatch => {
		dispatch(showLoading())

		const body = createBody({
			email_no_telp: username,
			password: password
		})

		api.post(LOGIN, body).then(response => {
			const data = response.data

			if (data.status === STATUS_SUCCESS) {
				const token = data.data.id_token
				const time = new Date().getTime()

				localStorage.setItem(TOKEN, JSON.stringify({
					token: token,
					expire: time + (remember ? time : TTL_IN_MILLIS)
				}))

				api.defaults.headers.common['Authorization'] = `Bearer ${token}`

				dispatch(setLogin({
					isLoggedIn: true,
					token: token
				}))
			} else {
				dispatch(setError(data.message))
			}

			dispatch(hideLoading())
		}).catch(error => {
			dispatch(setError(error))
			dispatch(hideLoading())
		})
	}
}

export const logout = () => {
	return dispatch => {
		localStorage.removeItem(TOKEN)
		dispatch(setLogin({
			isLoggedIn: false,
			token: null
		}))
	}
}

export const isLoggedIn = () => {
	return dispatch => {
		dispatch(showLoading())

		const token = localStorage.getItem(TOKEN)
		if (token === null) {
			dispatch(setLogin({
				isLoggedIn: false,
				token: null
			}))
			dispatch(hideLoading())
		} else {
			const data = JSON.parse(token)
			const now = new Date()

			if (now.getTime() > data.expire) {
				dispatch(logout())
			} else {
				api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`

				dispatch(setLogin({
					isLoggedIn: true,
					token: data.token
				}))
			}
		}

		dispatch(hideLoading())
	}
}

export const clearCommon = () => {
	return dispatch => {
		dispatch(reset())
	}
}