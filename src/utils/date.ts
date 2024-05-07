export default function generateDateTextsFromDate(
	date: Date,
	n: number = 30
): string[] {
	const dateTexts: string[] = [];
	for (let i = 0; i < n; i++) {
		const currentDate = new Date(date);
		currentDate.setDate(date.getDate() - i);

		// Formatting Date to String
		const formattedDate = Intl.DateTimeFormat('en', {
			month: 'short',
			day: '2-digit'
		}).format(new Date(currentDate));

		dateTexts.push(formattedDate);
	}
	return dateTexts;
}
