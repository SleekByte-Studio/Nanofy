import axios from 'axios';

const GEOLOCATION_API_URL = 'https://nominatim.openstreetmap.org/reverse';

type AddressType = {
	town: string;
	county: string;
	state_district: string;
	state: string;
	ISO3166_2_lvl4: string;
	postcode: string;
	country: string;
	country_code: string;
};

type LocationResponseType = {
	place_id: number;
	licence: string;
	osm_type: string;
	osm_id: number;
	lat: string;
	lon: string;
	class: string;
	type: string;
	place_rank: number;
	importance: number;
	addresstype: string;
	name: string;
	display_name: string;
	address: AddressType;
	boundingbox: string[];
};

export default class GeolocationService {
	static async getLocation(
		latitude: number,
		longitude: number
	): Promise<LocationResponseType> {
		const res = await axios.get(GEOLOCATION_API_URL, {
			params: {
				lat: latitude,
				lon: longitude,
				format: 'json'
			}
		});

		return res.data;
	}

}
