import { getUserInfo } from './getUserInfoTs';
import { IUser } from './IUser';

describe('getUserInfoTs', () => {
  it('renders minimum data safely', () => {
    const user: IUser = {
      name: 'John Doe'
    };

    const result = getUserInfo(user);

    expect(result).toBe('John Doe');
  });
  it('renders almost full data safely', () => {
    const user: IUser = {
      name: 'John Doe',
      address: {
        country: {
          name: 'Denmark'
        },
        street: 'Some address'
      }
    };

    const result = getUserInfo(user);

    expect(result).toBe('John Doe Denmark() Somes address');
  });
  it('renders full data safely', () => {
    const user: IUser = {
      name: 'John Doe',
      address: {
        country: {
          name: 'Denmark',
          isoCode: 'DK'
        },
        street: 'Some address'
      }
    };

    const result = getUserInfo(user);

    expect(result).toBe('John Doe Denmark(DK) Somes address');
  });
});
