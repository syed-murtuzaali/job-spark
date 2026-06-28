# Backend Server Errors - Fix Plan & Progress

## Steps
- [x] Fix `authenticateToken` middleware bug in `Backend/middleware/isAuthenticated.js`
- [x] Change `/api/application/apply/:id` from GET to POST (if frontend expects POST)
- [x] Fix inconsistent job `salary` type (Number vs String)
- [x] Fix misleading status codes in `company.controller.js` (400 instead of 401)
- [x] Add global error handler middleware in `Backend/index.js`

- [ ] Run backend + verify `/api/user/register` no longer returns 500
- [ ] Verify auth-protected endpoints with a valid cookie token

