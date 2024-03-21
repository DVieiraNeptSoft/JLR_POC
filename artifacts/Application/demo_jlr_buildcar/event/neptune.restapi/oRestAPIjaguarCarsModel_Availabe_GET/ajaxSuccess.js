var availableListCars = ModelData.Find(
    modeloMultiModelJaguarCarsModel_Available,
    ["exteriorColour", "seatColour", "seatMaterial", "interiorColour", "interiorMaterial"],
    [
        filterTableBuilder.exteriorColour,
        filterTableBuilder.seatColour,
        filterTableBuilder.seatMaterial,
        filterTableBuilder.interiorColour,
        filterTableBuilder.interiorMaterial,
    ],
    "EQ"
);

if (availableListCars.length > 0) {
    //it has the available car with the config built by the user
    buildListAvailableCars(availableListCars);
} else {
    //it has similar available cars of the same model but with a different config
    DialogAvailableSimilarCars.open();
}
