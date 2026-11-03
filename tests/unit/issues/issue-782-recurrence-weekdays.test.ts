import {
	buildWeekdaysOnlyRecurrenceRule,
	getOrderedRecurrenceWeekdays,
	getWeekdayOnlyRRuleCodes,
} from "../../../src/components/RecurrenceContextMenu";

describe("Issue #782: recurrence weekdays respect locale and first-day settings", () => {
	it("keeps the default weekdays-only rule as Monday through Friday for US-style locales", () => {
		expect(getWeekdayOnlyRRuleCodes("en-US")).toEqual(["MO", "TU", "WE", "TH", "FR"]);
		expect(buildWeekdaysOnlyRecurrenceRule("20260518", "en-US")).toBe(
			"DTSTART:20260518;FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR"
		);
	});

	it("uses the current locale weekend data to build weekdays-only rules", () => {
		const weekend = new Set(
			new Intl.Locale("ar-SA").weekInfo?.weekend?.map((day) => day % 7) ?? []
		);
		const localeWeekdays = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"].filter(
			(_, dateIndex) => !weekend.has(dateIndex)
		);
		const expectedWeekdays =
			localeWeekdays.length > 0 && localeWeekdays.length < 7
				? localeWeekdays
				: ["MO", "TU", "WE", "TH", "FR"];

		expect(getWeekdayOnlyRRuleCodes("ar-SA")).toEqual(expectedWeekdays);
		expect(buildWeekdaysOnlyRecurrenceRule("20260518", "ar-SA")).toBe(
			`DTSTART:20260518;FREQ=WEEKLY;BYDAY=${expectedWeekdays.join(",")}`
		);
	});

	it("orders custom recurrence weekday choices by first day of week", () => {
		expect(getOrderedRecurrenceWeekdays(0).map((day) => day.code)).toEqual([
			"SU",
			"MO",
			"TU",
			"WE",
			"TH",
			"FR",
			"SA",
		]);
		expect(getOrderedRecurrenceWeekdays(1).map((day) => day.code)).toEqual([
			"MO",
			"TU",
			"WE",
			"TH",
			"FR",
			"SA",
			"SU",
		]);
		expect(getOrderedRecurrenceWeekdays(6).map((day) => day.code)).toEqual([
			"SA",
			"SU",
			"MO",
			"TU",
			"WE",
			"TH",
			"FR",
		]);
	});
});
