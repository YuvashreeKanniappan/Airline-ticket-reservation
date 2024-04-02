

import { ProductavialbeAreas } from './productavialbe-areas';

describe('ProductavialbeAreas', () => {
  it('Test to Check Available Areas Return Success', () => {

    //instance creation
    let productavialbeAreas = new ProductavialbeAreas();

    //Act
    let acatualResult = productavialbeAreas.getProductsAvaialbeAreas();

    //Assert
    expect(acatualResult[0]).toEqual('HSR Layout');

  });

  it('Test to Add new areaName Check avaialble in GetAllAvailableAreas', () => {

    let newAreaName: string = 'Maratahalli';
    //instance creation
    let productavialbeAreas = new ProductavialbeAreas();
    //Act
    productavialbeAreas.addNewAreaToAvailableAreas(newAreaName);
    let actualResult = productavialbeAreas.getProductsAvaialbeAreas();
    //Assert
    expect(actualResult[actualResult.length - 1]).toEqual('Maratahalli');
    expect(actualResult.length).toEqual(4);

  });
});


