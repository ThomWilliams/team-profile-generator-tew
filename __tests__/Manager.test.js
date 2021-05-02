const Manager = require("../lib/manager");


describe("Manager", () => {
  
    describe("constructor", () => {

        it("should constuct card data from Manager name, id and email input", () => {
    
          const name = "Thom Williams";
          const id = "7";
          const email = "thomwilliams1990@gmail.com";
        
          const result = new Manager();
    
          expect(result).toEqual(name, id, email);
        });
    });

    describe("getOfficeNumber", () => {

        it("get the office number for the manager", () => {
    
          const officeNumber = "8";
      
          const result = new Manager().getOfficeNumber();
     
          expect(result).toEqual(officeNumber);
        });
    
        });

  describe("getRole", () => {

    it("get the role of the manager", () => {

      const role = "Manager";
  
      const result = new Manager().getRole();
 
      expect(result).toEqual(role);
    });

    });


});