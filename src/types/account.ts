export interface AccountPhone {
	value: string;
	verified: boolean;
}

export interface AccountEmail {
	value: string;
	verified: boolean;
}

export interface Account {
	id: string;
	fullname: string;
	phone: AccountPhone;
	email: AccountEmail;
	roles: string[];
	active: boolean;
	buildings: string[];
}

export interface AccountResponse {
	_id: string;
	fullname: string;
	phone: string;
	email: string;
	roles: string[];
	active: boolean;
	buildings: string[];
}
