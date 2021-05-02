const Intern = require("../lib/intern");


describe("Intern", () => {
  
    describe("constructor", () => {

        it("should constuct card data from intern name, id and email input", () => {
    
          const name = "Thom Williams";
          const id = "7";
          const email = "thomwilliams1990@gmail.com";
      
          const result = new Intern();
    
          expect(result).toEqual(name, id, email);
        });
    });


  describe("getSchool", () => {

    it("get the school name of the intern", () => {

      const school = "Manchester";
  
      const result = new Intern().getSchool();
  
      expect(result).toEqual(school);
    });
  });


  describe("getRole", () => {

    it("get the role of the Intern", () => {

      const role = "Intern";
  
      const result = new Intern().getRole();
 
      expect(result).toEqual(role);
    });

});


});