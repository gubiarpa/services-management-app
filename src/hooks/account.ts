import { useQuery } from '@tanstack/react-query';
import queryKeys from '../constants/queryKeys';
import { getAccount } from '../services/account';

const accountStaletime = import.meta.env.VITE_ACCOUNT_STALETIME;

export function useAccount() {
	return useQuery({
		queryKey: [queryKeys.ACCOUNT],
		queryFn: () => getAccount(),
		staleTime: accountStaletime,
	});
}
