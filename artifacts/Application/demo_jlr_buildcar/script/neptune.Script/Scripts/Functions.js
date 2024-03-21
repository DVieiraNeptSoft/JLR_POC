function initialBuilderData(filterTableBuilder) {
    var builderData = modeloMultiModelJaguarCarsModel_Builder.getData();

    debugger;

    var filteredBuilder = ModelData.FindFirst(
        builderData,
        "carModel",
        filterTableBuilder.carModel,
        "EQ"
    );

    //Filter Car Model Exterior Colour for Builder Settings
    var dataDetail = ModelData.FindFirst(
        filteredBuilder.carModelExteriorBuilder,
        "Colour",
        filterTableBuilder.exteriorColour,
        "EQ"
    );

    //Filter Car Model Interior Seat Colour for Builder Settings
    var dataDetailseat = ModelData.FindFirst(
        filteredBuilder.carModelInteriorBuilder,
        ["Colour", "Type"],
        ["Ebony", "Seat"],
        ["EQ", "EQ"]
    );

    filterTableBuilder.seatColour = dataDetailseat.Colour;
    filterTableBuilder.seatMaterial = dataDetailseat.Material;

    //Filter Car Model Car Interior Colour for Builder Settings
    var dataDetailCarInterior = ModelData.FindFirst(
        filteredBuilder.carModelInteriorBuilder,
        ["Colour", "Type"],
        ["Ebony", "Interior"],
        ["EQ", "EQ"]
    );

    filterTableBuilder.interiorColour = dataDetailCarInterior.Colour;
    filterTableBuilder.interiorMaterial = dataDetailCarInterior.Material;

    // generateBuilderData(filterTableBuilder, "Exterior");

    modelpageDetailBuild.setData(dataDetail);

    // debugger;
}

function generateBuilderData(carBuildSettings, selKey, interiorSelKey) {
    var builderData = modeloMultiModelJaguarCarsModel_Builder.getData();

    // debugger;

    //Filter Car Model for Builder Settings
    var filteredBuilder = ModelData.FindFirst(
        builderData,
        "carModel",
        carBuildSettings.carModel,
        "EQ"
    );

    var dataDetail;

    if (selKey === "Exterior") {
        //Filter Car Model Exterior Colour for Builder Settings
        dataDetail = ModelData.FindFirst(
            filteredBuilder.carModelExteriorBuilder,
            "Colour",
            carBuildSettings.exteriorColour,
            "EQ"
        );

        filterTableBuilder.exteriorColour = carBuildSettings.exteriorColour;
    } else {
        if (interiorSelKey === "Seats") {
            //Filter Car Model Interior Seat Colour for Builder Settings
            dataDetail = ModelData.FindFirst(
                filteredBuilder.carModelInteriorBuilder,
                ["Colour", "Type", "Material"],
                [carBuildSettings.seatColour, "Seat", carBuildSettings.seatMaterial],
                "EQ"
            );

            filterTableBuilder.seatColour = carBuildSettings.seatColour;
            filterTableBuilder.seatMaterial = carBuildSettings.seatMaterial;
            filterTableBuilder.interiorColour = carBuildSettings.seatColour;
        } else {
            //Filter Car Model Car Interior Colour for Builder Settings
            dataDetail = ModelData.FindFirst(
                filteredBuilder.carModelInteriorBuilder,
                ["Colour", "Type", "Material"],
                [carBuildSettings.interiorColour, "Interior", carBuildSettings.interiorMaterial],
                "EQ"
            );

            filterTableBuilder.interiorMaterial = carBuildSettings.interiorMaterial;
        }
    }

    // oModelObjectCarBuildSettings

    modelpageDetailBuild.setData(dataDetail);

    console.log(filterTableBuilder);
}

function generateSeatsConfigOptions() {
    var builderData = modeloMultiModelJaguarCarsModel_Builder.getData();

    //Filter Car Model for Builder Settings
    var filteredBuilder = ModelData.FindFirst(
        builderData,
        "carModel",
        filterTableBuilder.carModel,
        "EQ"
    );

    // filterTableBuilder
    var interiorSeatColours = ModelData.Find(
        filteredBuilder.carModelInteriorBuilder,
        "Type",
        "Seat",
        "EQ"
    );

    var configSeatColourObj = {};
    var configSeatColourArray = [];
    var configSeatColourConfigArray = [];

    var lastMat, lastColour;

    interiorSeatColours.forEach(function (interiorSeatColour, i) {
        configSeatColourObj = {};

        if (i === 0) {
            lastMat = interiorSeatColour.Material;
            configSeatColourObj.seatMaterial = interiorSeatColour.Material;
            configSeatColourArray.push(configSeatColourObj);
        } else {
            if (lastMat !== interiorSeatColour.Material) {
                lastMat = interiorSeatColour.Material;
                configSeatColourObj.seatMaterial = interiorSeatColour.Material;
                configSeatColourArray.push(configSeatColourObj);
            }
        }
        configSeatColourObj.seatMaterial = interiorSeatColour.Material;
        configSeatColourObj.seatColour = interiorSeatColour.Colour;
        configSeatColourConfigArray.push(configSeatColourObj);
    });

    var filteredList = [];

    const enableDuoLeather = ModelData.FindFirst(
        configSeatColourArray,
        "seatMaterial",
        "DuoLeather",
        "EQ"
    );
    if (enableDuoLeather) {
        duoLeatherRadioButton.setVisible(true);
    } else {
        duoLeatherRadioButton.setVisible(false);
    }

    const enablewindsorPerformance = ModelData.FindFirst(
        configSeatColourArray,
        "seatMaterial",
        "Windsor Performance",
        "EQ"
    );
    if (enablewindsorPerformance) {
        windsorPerformanceRadioButton.setVisible(true);
    } else {
        windsorPerformanceRadioButton.setVisible(false);
    }

    const enablewindsorSport = ModelData.FindFirst(
        configSeatColourArray,
        "seatMaterial",
        "Windsor Sport",
        "EQ"
    );
    if (enablewindsorSport) {
        windsorSportRadioButton.setVisible(true);
    } else {
        windsorSportRadioButton.setVisible(false);
    }
}

function generateBuilderConfigSeatMaterialColour(filterTableBuilder, selKey) {
    var builderData = modeloMultiModelJaguarCarsModel_Builder.getData();

    //Filter Car Model for Builder Settings
    var filteredBuilder = ModelData.FindFirst(
        builderData,
        "carModel",
        filterTableBuilder.carModel,
        "EQ"
    );

    // filterTableBuilder
    var interiorSeatColours = ModelData.Find(
        filteredBuilder.carModelInteriorBuilder,
        ["Type", "Material"],
        ["Seat", selKey],
        "EQ"
    );

    var seatColoursObj = {},
        seatColourArray = [];

    interiorSeatColours.forEach(function (interiorSeatColour) {
        seatColoursObj = {};

        seatColoursObj.seatColourImage = interiorSeatColour.IconColour;
        seatColoursObj.seatColourText = interiorSeatColour.Colour;
        seatColoursObj.seatColourPrice = "1.668,37€";
        seatColoursObj.seatColourPrice2 = 1668;

        seatColourArray.push(seatColoursObj);
    });

    modellistInteriorSeatColours.setData(seatColourArray);
}

function generateCarInteriorConfigOptions() {
    var builderData = modeloMultiModelJaguarCarsModel_Builder.getData();

    //Filter Car Model for Builder Settings
    var filteredBuilder = ModelData.FindFirst(
        builderData,
        "carModel",
        filterTableBuilder.carModel,
        "EQ"
    );

    // filterTableBuilder
    var interiorCarColours = ModelData.Find(
        filteredBuilder.carModelInteriorBuilder,
        "Type",
        "Interior",
        "EQ"
    );

    var configCarInteriorColourObj = {};
    var configCarInteriorColourArray = [];

    var lastMat;

    interiorCarColours.forEach(function (interiorCarColour, i) {
        configCarInteriorColourObj = {};

        if (i === 0) {
            lastMat = interiorCarColour.Material;
            configCarInteriorColourObj.carInteriorColourText = interiorCarColour.Material;
            configCarInteriorColourArray.push(configCarInteriorColourObj);
        } else {
            if (lastMat !== interiorCarColour.Material) {
                lastMat = interiorCarColour.Material;
                configCarInteriorColourObj.carInteriorColourText = interiorCarColour.Material;

                configCarInteriorColourArray.push(configCarInteriorColourObj);
            }
        }
    });

    var filteredList = [];

    configCarInteriorColourArray.forEach(function (carInteriorColour) {
        configCarInteriorColourObj = {};

        const checkMat = ModelData.FindFirst(
            listInteriorCarInteriorColours,
            "carInteriorColourText",
            carInteriorColour.carInteriorColourText,
            "EQ"
        );

        if (checkMat !== undefined) {
            configCarInteriorColourObj.carInteriorColourImage = checkMat.carInteriorColourImage;
            configCarInteriorColourObj.carInteriorColourText = checkMat.carInteriorColourText;
            configCarInteriorColourObj.carInteriorColourPrice = checkMat.carInteriorColourPrice;
            configCarInteriorColourObj.carInteriorColourPrice2 = checkMat.carInteriorColourPrice2;

            filteredList.push(configCarInteriorColourObj);
        }
    });

    modellistInteriorCarInteriorColours.setData(filteredList);
}

function buildListAvailableCars(availableListCars) {
    var availableCarsArray = [],
        formattedText1,
        formattedText2,
        formattedText3,
        formattedText4,
        formattedText5,
        formattedText6;

    var carModelForConfig = ModelData.FindFirst(
        modellistCarTypeModelsDetail,
        "carModel",
        modelpageMasterBuild.getData().carModel,
        "EQ"
    );
    var carConfigInfo = ModelData.FindFirst(
        modeloMultiModelJaguarCarsModel_Builder,
        "carModel",
        modelpageMasterBuild.getData().carModel,
        "EQ"
    );

    availableListCars.forEach(function (carData, i) {
        var carImage = ModelData.FindFirst(
            carConfigInfo.carModelExteriorBuilder,
            "Colour",
            carData.exteriorColour,
            "EQ"
        );

        var availableCarsObj = Object.assign({}, carModelForConfig);
        availableCarsObj.carImage = carImage.Image;

        // formattedText = "";

        // formattedText = "\u2022 " + "Exterior Colour: " + carData.exteriorColour;
        // formattedText =
        //     formattedText +
        //     "\n\u2022 " +
        //     "Seat Material: " +
        //     carData.seatMaterial +
        //     " Seat Colour: " +
        //     carData.seatColour;
        // formattedText =
        //     formattedText +
        //     "\n\u2022 " +
        //     "Interior Material: " +
        //     carData.interiorMaterial +
        //     " Interior Colour: " +
        //     carData.interiorColour;

        // filterTableBuilder.exteriorColour,
        // filterTableBuilder.seatColour,
        // filterTableBuilder.seatMaterial,
        // filterTableBuilder.interiorColour,
        // filterTableBuilder.interiorMaterial

        if (filterTableBuilder.exteriorColour === carData.exteriorColour) {
            availableCarsObj.formattedText1state = "None";
        } else {
            availableCarsObj.formattedText1state = "Error";
        }

        availableCarsObj.formattedText1 = "\u2022 " + "Exterior Colour: " + carData.exteriorColour;

        if (filterTableBuilder.seatMaterial === carData.seatMaterial) {
            availableCarsObj.formattedText2state = "None";
        } else {
            availableCarsObj.formattedText2state = "Error";
        }

        availableCarsObj.formattedText2 = "\u2022 " + "Seat Material: " + carData.seatMaterial;

        if (filterTableBuilder.seatColour === carData.seatColour) {
            availableCarsObj.formattedText3state = "None";
        } else {
            availableCarsObj.formattedText3state = "Error";
        }

        availableCarsObj.formattedText3 = "\u2022 " + "Seat Colour: " + carData.seatColour;

        if (filterTableBuilder.interiorMaterial === carData.interiorMaterial) {
            availableCarsObj.formattedText4state = "None";
        } else {
            availableCarsObj.formattedText4state = "Error";
        }

        availableCarsObj.formattedText4 =
            "\u2022 " + "Interior Material: " + carData.interiorMaterial;

        if (filterTableBuilder.interiorColour === carData.interiorColour) {
            availableCarsObj.formattedText5state = "None";
        } else {
            availableCarsObj.formattedText5state = "Error";
        }

        availableCarsObj.formattedText5 = "\u2022 " + "Interior Colour: " + carData.interiorColour;

        // availableCarsObj.bulletText = formattedText;

        if (availableCarsObj.carTypeConsumption === "Fuel") {
            availableCarsObj.carAutonomy = availableCarsObj.carEmission;
        }

        switch (i) {
            case 0:
                availableCarsObj.leadTime = "3 days";
                break;

            case 1:
                availableCarsObj.leadTime = "1 Week";
                break;

            case 2:
                availableCarsObj.leadTime = "2 Months";
                break;
        }

        availableCarsArray.push(availableCarsObj);
    });

    modellistAvailableCars.setData(availableCarsArray);

    DialogListAvailable.open();
}
