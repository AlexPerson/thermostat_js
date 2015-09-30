describe("Thermostat", function() {
	var thermostat;

	beforeEach(function() {
		thermostat = new Thermostat();
	});

	it("should be twenty degrees when created", function() {
		expect(thermostat.temperature).toEqual(20);
	});

	it("has a minimum temperature of 10 degrees", function() {
		expect(thermostat.MIN_TEMPERATURE).toEqual(10);
	});

	it("temperature should increase by one when increase button is pressed", function() {
		thermostat.increase();
		expect(thermostat.temperature).toEqual(21);
	});

	it("temperature should decrease by one when decrease button is pressed", function() {
		thermostat.decrease();
		expect(thermostat.temperature).toEqual(19);
	});

	it("temperature cannot drop below 10 degrees", function() {
		for (var i = 1; i <= 11; i += 1) { thermostat.decrease() };
		expect(thermostat.temperature).toEqual(10)
	});

	it("power saving mode is on by default", function() {
		expect(thermostat.isPowerSaveOn).toEqual(true)
	});

	it("temperature cannot pass 25 degrees when power-save mode is on", function() {
		for (var i = 1; i <= 11; i += 1) { thermostat.increase() };
	});

});