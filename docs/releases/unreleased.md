# TaskNotes - Unreleased

<!--

**Added** for new features.
**Changed** for changes in existing functionality.
**Deprecated** for soon-to-be removed features.
**Removed** for now removed features.
**Fixed** for any bug fixes.
**Security** in case of vulnerabilities.

Always acknowledge contributors and those who report issues.

Example:

```
## Fixed

- (#768) Fixed calendar view appearing empty in week and day views due to invalid time configuration values
  - Added time validation in settings UI with proper error messages and debouncing
  - Prevents "Cannot read properties of null (reading 'years')" error from FullCalendar
  - Thanks to @userhandle for reporting and help debugging
```

When a change has user-facing documentation, include a canonical tasknotes.dev link:

```
## Added

- Added materialized occurrence notes for recurring tasks. See [Recurring Tasks](https://tasknotes.dev/features/recurring-tasks/#materialized-occurrence-notes) for setup and calendar behavior.
```

-->
## Fixed

- Long task titles now keep their sanitized filename prefix and truncate at 241 UTF-8 bytes instead of falling back to a generated task ID.

## Added

- Added an optional Google Calendar export setting to sync only tasks with a scheduled time and positive time estimate. Date-only tasks, due-only tasks, and timed reminders without a duration stay out of Google Calendar, and removing eligibility cleans up linked events with retries when offline. See [Calendar Integration](https://tasknotes.dev/features/calendar-integration/).
