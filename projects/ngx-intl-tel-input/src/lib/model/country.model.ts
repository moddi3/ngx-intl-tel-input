import { CountryISO } from "projects/ngx-intl-tel-input/src/public_api";

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
