import "polyfills/no_zonejs";

var component = null;

describe("CustomerSearchComponent", function() {
  beforeEach(function() {
    component = new CustomerSearchComponent();
  });

  describe("initial state", function() {
    it("sets customers to null", function() {
      expect(component.customers).toBe(null);
    });
    it("sets keywords to the empty string", function() {
      expect(component.keywords).toBe("");
    });
  });
});
