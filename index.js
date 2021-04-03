$(document).ready(() => {

window.addEventListener('message', function(event) {
        let data = event.data
        if(data.Vehicleinfo) {
            $("#VID").html(data.ID);
            $("#VName").html(data.VName);
            $("#VPlate").html(data.VPlate);
            $("#VStats").html(data.VStats);
            $("#VAxle").html(data.VAxle);
            $("#VClutch").html(data.VClutch);
            $("#VFuel").html(data.VFuel);
            $("#VT").html(data.VT);
            $("#VBrakes").html(data.VBrakes);
            $("#VRadiator").html(data.VRadiator);
            $("#VFuelInjector").html(data.VFuelInjector);
            $("#VElectronics").html(data.VElectronics);
            $("#VSuspension").html(data.VSuspension);
            $("#VTires").html(data.VTires);
            $("#VBody").html(data.VBody);
            $("#VEngine").html(data.VEngine);

        }

        if(item.openSection == "openNotepad") {
            $(".container").fadeIn(100); 
          }
          if(item.openSection == "close") {
            $(".container").fadeOut(100)
          }  
    });


});
