{
  interface PhoneNumberDictionary {
    [phone: string]: {
      num: number;
    };
  }

  interface Contact {
    name: string;
    address: string;
    phones: PhoneNumberDictionary;
  }

  // api
  // TODO: 아래 함수의 반환 타입을 지정해보세요.
  function fetchContacts(): Promise<Contact[]> {
    // TODO: 아래 변수의 타입을 지정해보세요.
    const contacts: Contact[] = [ // 정의되어 있는 Contact 의 구조와 동일하기 때문에 Contact 배열로 처리.
      {
        name: 'Tony',
        address: 'Malibu',
        phones: {
          home: {
            num: 11122223333,
          },
          office: {
            num: 44455556666,
          },
        },
      },
      {
        name: 'Banner',
        address: 'New York',
        phones: {
          home: {
            num: 77788889999,
          },
        },
      },
      {
        name: '마동석',
        address: '서울시 강남구',
        phones: {
          home: {
            num: 213423452,
          },
          studio: {
            num: 314882045,
          },
        },
      },
    ];
    return new Promise(resolve => { // Promise 는 Promise 를 반환한다.
      setTimeout(() => resolve(contacts), 2000);
    });
  }

  // main
  class AddressBook {
    // TODO: 아래 변수의 타입을 지정해보세요.
    contacts: Contact[] = []; // 생성자에서 fetchContacts 메서드를 통해 Contact의 배열이 반환되어 할당된다.

    constructor() {
      this.fetchData();
    }

    fetchData() {
      fetchContacts().then(response => {
        this.contacts = response;
      });
    }

    /* TODO: 아래 함수들의 파라미터 타입과 반환 타입을 지정해보세요 */
    findContactByName(name: string): Contact[] {  // filter 메서드는 조건에 맞는 객체의 배열을 반환해준다
      return this.contacts.filter(contact => contact.name === name);
    }

    findContactByAddress(address: string): Contact[] {
      return this.contacts.filter(contact => contact.address === address);
    }

    findContactByPhone(phoneNumber: number, phoneType: string): Contact[] {
      return this.contacts.filter(
        contact => contact.phones[phoneType].num === phoneNumber
      );
    }

    addContact(contact: Contact) { 
      this.contacts.push(contact);
    }

    displayListByName(): string[] { // map 메서드는 콜백 함수의 반환값으로 새로운 배열을 만들어 반환한다. -> string[]
      return this.contacts.map(contact => contact.name);
    }

    displayListByAddress(): string[] {
      return this.contacts.map(contact => contact.address);
    }
    /* ------------------------------------------------ */
  }

  new AddressBook();
}