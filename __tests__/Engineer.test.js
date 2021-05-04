const Engineer = require("../lib/engineer");


describe("Engineer", () => {
  
    it("should constuct card data from engineer name, id and email input", () => {
      
      const result = new Engineer ("Thom Williams", 7, "thomwilliams1990@gmail.com", "GitHub Profile");
    
          expect(result.getRole()).toBe("Engineer");
    });

    it("get the email address of the Engineer", () => {
  
      const result = new Engineer ("Thom Williams", 7, "thomwilliams1990@gmail.com", "GitHub Profile");
  
      expect(result.getEmail()).toBe("thomwilliams1990@gmail.com");
    });

    it("get the name of the Engineer", () => {
  
      const result = new Engineer ("Thom Williams", 7, "thomwilliams1990@gmail.com", "GitHub Profile");
  
      expect(result.getName()).toBe("Thom Williams");
    });
    
    it("get the id of the Engineer", () => {
  
      const result = new Engineer ("Thom Williams", 7, "thomwilliams1990@gmail.com", "GitHub Profile");
  
      expect(result.getId()).toBe(7);
    });
    
    it("get the GitHub profile of the Engineer", () => {
  
        const result = new Engineer ("Thom Williams", 7, "thomwilliams1990@gmail.com", "GitHub Profile");
  
      expect(result.getGithub()).toBe("GitHub Profile");
    });

});


