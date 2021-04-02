window.addEventListener('message', (event) => {
	let data = event.data
	if(data.Vehicleinfo) {
		document.getElementById("VID").innerHTML =  data.ID;
        document.getElementById("VName").innerHTML =  data.VName;
    }
})




/*SAMPLE LUA
SendNUIMessage({
    Vehicleinfo = True
	ID = "1",
    VName = "Sultan RS",
})

*/ 