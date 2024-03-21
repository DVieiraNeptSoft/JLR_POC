var detailData = modeloMultiModelJaguarCarsModel_Detail.oData;

var formattedText;

detailData.forEach(function (carData) {
    formattedText = "\u2022 " + carData.carDetails.text01;
    formattedText = formattedText + "\n\u2022 " + carData.carDetails.text02;
    formattedText = formattedText + "\n\u2022 " + carData.carDetails.text03;
    formattedText = formattedText + "\n\u2022 " + carData.carDetails.text04;
    formattedText = formattedText + "\n\u2022 " + carData.carDetails.text05;

    if (carData.carDetails.text06 !== "") {
        formattedText = formattedText + "\n\u2022 " + carData.carDetails.text06;
    }

    carModelDetailObj = carData;
    carModelDetailObj.bulletText = formattedText;

    if (carModelDetailObj.carTypeConsumption === "Fuel") {
        carModelDetailObj.carAutonomy = carModelDetailObj.carEmission;
    }
});

modellistCarTypeModelsDetail.setData(detailData);

SplitApp.toDetail(detailPage);
