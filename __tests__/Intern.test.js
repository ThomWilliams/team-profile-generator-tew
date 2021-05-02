const Intern = require("../lib/intern");

describe("Intern", () => {
  
    it("assign the role of intern", () => {
      
        const result = new Intern ("Thom Williams", 7, "thomwilliams1990@gmail.com", "Manchester");
    
          expect(result.getRole()).toBe("Intern");
    });

    it("get the email address of the Intern", () => {
  
        const result = new Intern ("Thom Williams", 7, "thomwilliams1990@gmail.com", "Manchester");
  
      expect(result.getEmail()).toBe("thomwilliams1990@gmail.com");
    });

    it("get the name of the Intern", () => {
  
        const result = new Intern ("Thom Williams", 7, "thomwilliams1990@gmail.com", "Manchester");
  
      expect(result.getName()).toBe("Thom Williams");
    });
    
    it("get the id of the Intern", () => {
  
        const result = new Intern ("Thom Williams", 7, "thomwilliams1990@gmail.com", "Manchester");
  
      expect(result.getId()).toBe(7);
    });
    
    it("get the school of the intern", () => {
  
        const result = new Intern ("Thom Williams", 7, "thomwilliams1990@gmail.com", "Manchester");
  
      expect(result.getSchool()).toBe("Manchester");
    });

});


