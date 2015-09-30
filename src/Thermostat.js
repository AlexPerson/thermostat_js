var Thermostat = function() {
	this.temperature = 20;
	this.MIN_TEMPERATURE = 10;
	this.isPowerSaveOn = true;
	this.defaultChange = 1;
};

Thermostat.prototype.increase = function(passedValue) {
	if (this.passedValue == nil) {
		this.temperature += this.defaultChange;
	} else {
		this.temperature += passedValue;
	}
};

Thermostat.prototype.decrease = function() {
	if (this.isAboveMin()) {
		this.temperature -=1; 
	}
};

Thermostat.prototype.isAboveMin = function() {
	return this.temperature > this.MIN_TEMPERATURE;
};
