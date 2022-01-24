import { IUser } from './IUser';

// This function should return the following
// {name} {country} ({isoCode}) {street address}
// Run pnpm test to validte
export function getUserInfo(user: IUser): string {
  const stringArray = [
    ...[user.name],
    ...(user.address
      ? [
          user.address.country.name,
          ...(user.address.country.isoCode ? [`(${user.address.country.isoCode})`] : []),
          user.address.street
        ]
      : [])
  ];
  return stringArray.join(' ');
}
