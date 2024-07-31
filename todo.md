Add user_id to the users table
Change activities_analytics name to sessions_analytics
Replace email in activities_analytics

Create new table: user*details
-- created_at
-- last_active
-- status: active | pending | removed
-- user_id: uuid
-- logs: [
-- -- *active_session*: \_timestamp* => When a user begins to navigate and the active*session_exp is expired, marking a new active_session log
-- -- *active_session_exp*: \_timestamp* => uppon entering a new page, an expireation is set
-- -- _status_change_: {
-- -- -- (from): _status_
-- -- -- (to): _status_
-- -- -- (reason)?: _string_
-- -- }
-- ]
