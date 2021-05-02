const Employee = require("../lib/employee");


describe("Employee", () => {
  describe("constructor", () => {

    it("should constuct card data from employee name, id and email input", () => {

      const name = "Thom Williams";
      const id = "7";
      const email = "thomwilliams1990@gmail.com";
  
      const result = new Employee();

      expect(result).toEqual(name, id, email);
    });
  });


  describe("getName", () => {

    it("get the name of the employee", () => {

      const name = "Thom Williams";
  
      const result = new Employee().getName();

      expect(result).toEqual(name);
    });
  });

  describe("getId", () => {

    it("get the ID of the employee", () => {

      const id = "7";

      const result = new Employee().getId();

      expect(result).toEqual(id);
    });
  });

  describe("getEmail", () => {

    it("get the email address of the employee", () => {

      const email = "thomWilliams1990@gmail.com";
  
      const result = new Employee().getEmail();
  
      expect(result).toEqual(email);
    });
  });


  describe("getRole", () => {

    it("get the role of the employee", () => {

      const role = "Employee";
  
      const result = new Employee().getRole();
 
      expect(result).toEqual(role);
    });

});








});



