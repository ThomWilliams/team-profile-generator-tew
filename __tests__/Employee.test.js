const Employee = require("../lib/employee");


describe("Employee", () => {
  
    it("assign the role of Employee", () => {
      
        const result = new Employee ("Thom Williams", 7, "thomwilliams1990@gmail.com", "Employee");
    
          expect(result.getRole()).toBe("Employee");
    });

    it("get the email address of the Employee", () => {
  
        const result = new Employee ("Thom Williams", 7, "thomwilliams1990@gmail.com", "Employee");
  
      expect(result.getEmail()).toBe("thomwilliams1990@gmail.com");
    });

    it("get the name of the Employee", () => {
  
        const result = new Employee ("Thom Williams", 7, "thomwilliams1990@gmail.com", "Employee");
  
      expect(result.getName()).toBe("Thom Williams");
    });
    
    it("get the id of the Employee", () => {
  
        const result = new Employee ("Thom Williams", 7, "thomwilliams1990@gmail.com", "Employee");
  
      expect(result.getId()).toBe(7);
    });

});







