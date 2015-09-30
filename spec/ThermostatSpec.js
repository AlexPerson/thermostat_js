describe("Thermostat", function() {
	var thermostat

	beforeEach(function() {
		thermostat = new Thermostat();
	});

	it("should be twenty degrees when created", function() {
		expect(thermostat.temperature).toEqual(20);
	});

	it("has a minimum temperature of 10 degrees", function() {
		expect(thermostat.minTemperature).toEqual(10);
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
		thermostat.decrease(11);
		expect(thermostat.temperature).toEqual(10);
	});

	it("power saving mode is on by default", function() {
		expect(thermostat.isPowerSaveOn).toEqual(true);
	});

	it("temperature should increase by whatever parameter is passed", function() {
		thermostat.increase(4);
		expect(thermostat.temperature).toEqual(24);
	});

	it("temperature should decrease by whatever parameter is passed", function() {
		thermostat.decrease(4);
		expect(thermostat.temperature).toEqual(16);
	});

	it("temperature cannot pass 25 degrees when power-save mode is on", function() {
		thermostat.increase(6);
		expect(thermostat.temperature).toEqual(25);
	});

	it("power saving mode should be able to turn off", function() {
		thermostat.powerSaveSwitch();
		expect(thermostat.isPowerSaveOn).toEqual(false);
	});

	it("power saving mode should be able to turn on when off", function() {
		thermostat.powerSaveSwitch();
		thermostat.powerSaveSwitch();
		expect(thermostat.isPowerSaveOn).toEqual(true);
	});

	it("temperature should never rise above 32 degrees when power save is off", function() {
		thermostat.powerSaveSwitch();
		thermostat.increase(13);
		expect(thermostat.temperature).toEqual(32);
	});

	it("temperature is 20 after reset", function() {
		thermostat.increase(4);
		thermostat.reset();
		expect(thermostat.temperature).toEqual(20);
	});

});







