import timezones from '@/constants/timezones';
import country from '@/constants/country-codes';

export function getCountryCode() {
	const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
	return timezones[timezone];
}
