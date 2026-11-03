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

## Added

- Added a per-task Google Calendar availability override through the `availability` frontmatter property (`free` or `busy`) and an option to sync only tasks with a scheduled date and time. See [Calendar Integration](https://tasknotes.dev/features/calendar-integration/#google-calendar-task-availability).

## Fixed

- Fixed title-based filename notices to distinguish UTF-8 byte-limit truncation from filename sanitization.
- Fixed boolean user-field groups so the no-value bucket sorts before `true` and `false`.
