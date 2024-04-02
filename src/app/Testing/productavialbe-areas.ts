export class ProductavialbeAreas {

    availableAreas=['HSR Layout','Kormangala','MG Road'];
    constructor(){

    }
    getProductsAvaialbeAreas(){
        return this.availableAreas;
    }
    
    addNewAreaToAvailableAreas(areaName:string) {
        this.availableAreas.push(areaName);
    }
    

}
