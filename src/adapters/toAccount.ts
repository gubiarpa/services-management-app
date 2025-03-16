import { Account, AccountResponse } from '../types/account';

export function toAccount(account: AccountResponse): Account {
	return {
		id: account._id,
		fullname: account.fullname,
		phone: account.phone,
		email: account.email,
		roles: account.roles,
		active: account.active,
		buildings: account.buildings,
	};
}
