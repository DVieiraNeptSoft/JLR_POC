// Custom Init - Happens only once when mounting the component
sap.ui.getCore().attachInit(function (startParams) {
    modellistExteriorColours.setData(tableExteriorColours);
    modellistInteriorSeatColours.setData(tableInteriorSeatColours);
    modellistInteriorCarInteriorColours.setData(tableInteriorCarInteriorColours);

    var options = {
        parameters: {
            where: "", // Optional
            select: "", // Optional
            take: "", // Optional
            skip: "", // Optional
            order: "", // Optional
        },
    };

    apioRestAPIjaguarCarsModel_Builder_GET(options);
});
