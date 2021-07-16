export const state = () => ({
	contacts: [],
	aboutMeInfo: {},
	personInfo: {},
	skills: [],
	content: [],
	otherProjects: [],
})

export const mutations = {
	saveContacts(state, value) {
		state.contacts = value
	},
	saveSkills(state, value) {
		state.skills = value
	},
	savePersonInfo(state, value) {
		state.personInfo = value
	},
	saveAboutMeInfo(state, value) {
		state.aboutMeInfo = value
	},
	saveContent(state, value) {
		state.content = value
	},
	saveContent(state, value) {
		state.content = value
	},
	saveOtherProjects(state, value) {
		state.otherProjects = value
	},
}

export const actions = {
	async nuxtServerInit ({ commit }) {
		const { contacts } = await this.$content('contacts')
		.fetch()
		.catch(error => {
			console.log(error)
		})
		const { skills } = await this.$content('skills')
		.fetch()
		.catch(error => {
			console.log(error)
		})
		const personInfo = await this.$content('personInfo')
		.fetch()
		.catch(error => {
			console.log(error)
		})
		const aboutMeInfo = await this.$content('aboutMe')
		.fetch()
		.catch(error => {
			console.log(error)
		})
		const { content } = await this.$content('content')
		.fetch()
		.catch(error => {
			console.log(error)
		})
		const { otherProjects } = await this.$content('otherProjects')
		.fetch()
		.catch(error => {
			console.log(error)
		})
		commit('saveContacts', contacts)
		commit('saveSkills', skills)
		commit('savePersonInfo', personInfo)
		commit('saveAboutMeInfo', aboutMeInfo)
		commit('saveContent', content)
		commit('saveOtherProjects', otherProjects)
	}
}

export const getters = {
	GET_CONTACTS: state => state.contacts,
	GET_PERSON_INFO: state => state.personInfo,
	GET_SKILLS: state => state.skills,
	GET_ABOUT_ME: state => state.aboutMeInfo,
	GET_CONTENT: state => state.content,
	GET_OTHER_PROJECTS: state => state.otherProjects,
}
