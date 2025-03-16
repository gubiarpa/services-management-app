import apiBase from './base/apiBase';
import apiUrl from '../constants/apiUrl';

import { AccountResponse } from '../types/account';
import { toAccount } from '../adapters/toAccount';

export async function getAccount() {
	const url = apiUrl.ACCOUNT;
	const { data } = await apiBase.get<AccountResponse>(url);
	const account = toAccount(data);
	return account;
}
