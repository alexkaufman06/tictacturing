import Auth0Lock from 'auth0-lock'
const authDomain = 'alexkaufman06.auth0.com'
const clientId = 'uwFgYSWRWDsLh1U5Uj8w21zc6lPg0x20'

class AuthService {
	constructor() {
		this.lock = new Auth0Lock(clientId, authDomain, {
			auth: {
				params: {
					scope: 'openid emails'
				},
			},
		})

		this.showLock = this.showLock.bind(this)

		this.lock.on('authenticated', this.authProcess.bind(this))
	}

	authProcess = (authResult) => {
		console.log(authResult)
	}

	showLock() {
		this.lock.show()
	}

	setToken = (authFields) => {
		let {
			idToken,
			exp
		} = authFields
		localStorage.setItem('idToken', idToken)
		localStorage.setItem('exp', exp * 1000)
	}

	isCurrent = () => {
		let expString = localStorage.getItem('exp')
		if (!expString) {
			localStorage.removeItem('idToken')
			return false
		}
		let now = new Date()
		let exp = new Date(parseInt(expString, 10)) // 10 is a radix parameter
		if (exp < now) {
			this.logout()
			return false
		} else {
			return true
		}
	}

	getToken() {
		let idToken = localStorage.getItem('idToken')
		if (this.isCurrent() && idToken) {
			return idToken
		} else {
			localStorage.removeItem('idToken')
			localStorage.removeItem('exp')
			return false
		}
	}

	logout = () => {
		localStorage.removeItem('idToken')
		localStorage.removeItem('exp')
		window.location.reload()
	}
}

const auth = new AuthService()
export default auth