'use strict'

const Invite = use('App/Models/Invite')

/**
 * Resourceful controller for interacting with invites
 */
class InviteController {
	/**
	 * Create/save a new invite.
	 * POST invites
	 */
	async store({ request, auth }) {
		const invites = request.input('invites')

		const serializedInvites = invites.map(email => ({
			email,
			user_id: auth.user.id,
			team_id: request.team.id,
		}))

		Invite.createMany(serializedInvites)

		return serializedInvites
	}
}

module.exports = InviteController
