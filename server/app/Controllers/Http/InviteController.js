'use strict'

/**
 * Resourceful controller for interacting with invites
 */
class InviteController {
	/**
	 * Show a list of all invites.
	 * GET invites
	 */
	async index({ request, response, view }) {}

	/**
	 * Create/save a new invite.
	 * POST invites
	 */
	async store({ request, response }) {}

	/**
	 * Display a single invite.
	 * GET invites/:id
	 */
	async show({ params, request, response, view }) {}

	/**
	 * Update invite details.
	 * PUT or PATCH invites/:id
	 */
	async update({ params, request, response }) {}

	/**
	 * Delete a invite with id.
	 * DELETE invites/:id
	 */
	async destroy({ params, request, response }) {}
}

module.exports = InviteController
