Create new table: `user_details`
-- created_at
-- last_active
-- status: active | pending | removed
-- user_id: uuid
-- logs: [
-- -- `active_session`: `timestamp` => When a user begins to navigate and the `active_session_exp` is expired, marking a new `active_session` log
-- -- `active_session_exp`: `timestamp` => uppon entering a new page, an expireation is set
-- -- `status_change`: {
-- -- -- (from): `status`
-- -- -- (to): `status`
-- -- -- (reason)?: `string`
-- -- }
-- ]

Make a check to make sure all href links lead to an actual page.

Reset local db
try running script again
