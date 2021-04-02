window.addEventListener('message', function(event) {
	let data = event.data
	if(data.Vehicleinfo) {
		document.getElementById("VID").innerHTML =  data.ID;
        document.getElementById("VName").innerHTML =  data.VName;
        document.getElementById("VPlate").innerHTML =  data.VPlate;
        document.getElementById("VStats").innerHTML =  data.VStats;

        document.getElementById("VAxle").innerHTML =  data.VAxle;
        document.getElementById("VClutch").innerHTML =  data.VClutch;
        document.getElementById("VFuel").innerHTML =  data.VFuel;
        document.getElementById("VT").innerHTML =  data.VT;
        document.getElementById("VBrakes").innerHTML =  data.VBrakes;
        document.getElementById("VRadiator").innerHTML =  data.VRadiator;
        document.getElementById("VFuelInjector").innerHTML =  data.VFuelInjector;
        document.getElementById("VElectronics").innerHTML =  data.VElectronics;
        document.getElementById("VSuspension").innerHTML =  data.VSuspension;
        document.getElementById("VTires").innerHTML =  data.VTires;
        document.getElementById("VBody").innerHTML =  data.VBody;
        document.getElementById("VEngine").innerHTML =  data.VEngine;

    }
})




/*SAMPLE LUA
SendNUIMessage({
    Vehicleinfo = True
	ID = "1",
    VName = "Sultan RS",
})

*/ 
