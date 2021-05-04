const Manager = require("../lib/manager");


describe("Manager", () => {
  
    it("assign the role of Manager", () => {
      
      const result = new Manager ("Thom Williams", 7, "thomwilliams1990@gmail.com", 88888);
    
          expect(result.getRole()).toBe("Manager");
    });

    it("get the email address of the Manager", () => {
  
      const result = new Manager ("Thom Williams", 7, "thomwilliams1990@gmail.com", 88888);
  
      expect(result.getEmail()).toBe("thomwilliams1990@gmail.com");
    });

    it("get the name of the Manager", () => {
  
      const result = new Manager ("Thom Williams", 7, "thomwilliams1990@gmail.com", 88888);
  
      expect(result.getName()).toBe("Thom Williams");
    });
    
    it("get the id of the Manager", () => {
  
      const result = new Manager ("Thom Williams", 7, "thomwilliams1990@gmail.com", 88888);
  
      expect(result.getId()).toBe(7);
    });
    
    it("get the office number of the manager", () => {
  
        const result = new Manager ("Thom Williams", 7, "thomwilliams1990@gmail.com", 88888);
  
      expect(result.getOfficeNumber()).toBe(88888);
    });

});
