// import { Usermessage } from './usermessage';

import { usermessage } from "./usermessage";

// describe('Usermessage', () => {
//   it('should create an instance', () => {
//     expect(new Usermessage()).toBeTruthy();
//   });
// });

describe("User level Test cases", () => {
  //1 spec---->1 it---->1 test case 
  it("test case to return Username with message", () => {
    //Initialization
    let userName = 'Vikram';
    let expectedUserName = `Welcome-${userName}`;

    //Act
    let actualUserName = usermessage(userName);


    //Assert
    expect(actualUserName).toEqual(expectedUserName);
  });
});