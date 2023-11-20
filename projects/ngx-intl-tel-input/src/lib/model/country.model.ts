import { CountryISO } from "../enums/country-iso.enum";

export interface Country {
	name: string;
	iso2: CountryISO | string;
	dialCode: string;
	priority: number;
	areaCodes?: string[];
	htmlId: string;
	flagClass: string;
	placeHolder: string;
}
