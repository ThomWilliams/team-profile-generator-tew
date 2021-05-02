const Engineer = require("../lib/engineer");


describe("Employee", () => {
  
    describe("constructor", () => {

        it("should constuct card data from engineer name, id and email input", () => {
    
          const name = "Thom Williams";
          const id = "7";
          const email = "thomwilliams1990@gmail.com";
      
          const result = new Engineer();
    
          expect(result).toEqual(name, id, email);
        });
    });


  describe("getGithub", () => {

    it("get the github address of the Engineer", () => {

      const gitHub = "GitHub Profile";
  
      const result = new Engineer().getGithub();
  
      expect(result).toEqual(gitHub);
    });
  });


  describe("getRole", () => {

    it("get the role of the Engineer", () => {

      const role = "Engineer";
  
      const result = new Engineer().getRole();
 
      expect(result).toEqual(role);
    });

});


});