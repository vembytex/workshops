import { getUserInfo } from './getUserInfo';
import { IUser } from './IUser';

describe('getUserInfo', () => {
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

    expect(result).toBe('John Doe Denmark Some address');
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

    expect(result).toBe('John Doe Denmark (DK) Some address');
  });
});
