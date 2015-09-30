var Thermostat = function() {
	this.temperature = 20;
	this.minTemperature = 10;
	this.maxTemperature = 32;
	this.isPowerSaveOn = true;
	this.defaultChange = 1;
	this.PowerSaveMax = 25;
};

Thermostat.prototype.increase = function(passedValue) {
	if (this.isPowerSaveOn) {
		this.increasePowerSaveOn(passedValue);
	} else {
		this.increasePowerSaveOff(passedValue);
	}
};

Thermostat.prototype.increasePowerSaveOn = function(passedValue) {
	if (passedValue == null && (this.temperature+this.defaultChange<this.PowerSaveMax)) {
		this.temperature += this.defaultChange;
	} else if (this.temperature+passedValue<=this.PowerSaveMax) {
		this.temperature += passedValue;
	} else if (this.temperature+passedValue>this.PowerSaveMax) {
		this.temperature = this.PowerSaveMax;
	}
};

Thermostat.prototype.increasePowerSaveOff = function(passedValue) {
	if (passedValue == null && (this.temperature+this.defaultChange<this.maxTemperature)) {
		this.temperature += this.defaultChange;
	} else if (this.temperature+passedValue<=this.maxTemperature) {
		this.temperature += passedValue;
	} else if (this.temperature+passedValue>this.maxTemperature) {
		this.temperature = this.maxTemperature;
	}
};

Thermostat.prototype.decrease = function(passedValue) {
	if (this.isAboveMin() && (passedValue == null)) {
		this.temperature -=1;
	} else if ((this.temperature-passedValue)>=this.minTemperature) {
		this.temperature -= passedValue;
	} else if ((this.temperature-passedValue)<this.minTemperature) {
		this.temperature = this.minTemperature
	}
};

Thermostat.prototype.isAboveMin = function() {
	return this.temperature > this.minTemperature;
};

Thermostat.prototype.powerSaveSwitch = function() {
	this.isPowerSaveOn = !this.isPowerSaveOn;
};

Thermostat.prototype.reset = function() {
	this.temperature = 20;
};

