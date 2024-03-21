var multiModelData = modeloMultiModelJaguarCarsModel.oData;

multiModelData.forEach(function (modelType, i) {
    carTypesObj = {
        carType: modelType.carType,
        carTypeModels: []
    };

    carTypes.push(carTypesObj);

    modelType.carModel.forEach(function (modelTypeCar) {
        carTypeModelsObj = {
            carType: modelType.carType,
            carID: modelTypeCar.carID,
            carImage: modelTypeCar.carImage,
            carModelName: modelTypeCar.carModelName,
        };

        carTypeModels.push(carTypeModelsObj);
        // carTypes[i].carTypeModels.push(carTypeModelsObj);
    });
});

var filteredSUV = ModelData.Find(carTypeModels, "carType", "SUV", "EQ");

modellistCarTypeModelsSUV.setData(filteredSUV);