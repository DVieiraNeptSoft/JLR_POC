var carTypes = [],
    carTypesObj = {},
    carTypeModels = [],
    carTypeModelsObj = {},
    carModelDetail = [],
    carModelDetailObj = {};

var tableExteriorColours = [
    {
        exteriorColourImage:
            "https://assets.config.jaguar.com/jag2/f-pace/k24/paint/pnt_f-pace_k24_n-1aa-sml.jpg?v=4ar18",
        exteriorColourText: "White",
        exteriorColourPrice: "0,00€",
        exteriorColourPrice2: 0,
    },
    {
        exteriorColourImage:
            "https://assets.config.jaguar.com/jag2/f-pace/k24/paint/pnt_f-pace_k24_n-1ag-sml.jpg?v=4ar18",
        exteriorColourText: "Santorini Black",
        exteriorColourPrice: "1.069,00€",
        exteriorColourPrice2: 1069,
    },
    {
        exteriorColourImage:
            "https://assets.config.jaguar.com/jag2/f-pace/k24/paint/pnt_f-pace_k24_n-1af-sml.jpg?v=4ar18",
        exteriorColourText: "Firenze Red",
        exteriorColourPrice: "1.069,00€",
        exteriorColourPrice2: 1069,
    },

    {
        exteriorColourImage:
            "https://assets.config.jaguar.com/jag2/f-pace/k24/paint/pnt_f-pace_k24_n-1df-sml.jpg?v=4ar18",
        exteriorColourText: "Eiger Grey",
        exteriorColourPrice: "1.069,00€",
        exteriorColourPrice2: 1069
    },
    {
        exteriorColourImage:
            "https://assets.config.jaguar.com/jag2/f-pace/k24/paint/pnt_f-pace_k24_n-1dg-sml.jpg?v=4ar18",
        exteriorColourText: "Portofino Blue",
        exteriorColourPrice: "1.069,00€",
        exteriorColourPrice2: 1069
    },
    {
        exteriorColourImage:
            "https://assets.config.jaguar.com/jag2/f-pace/k24/paint/pnt_f-pace_k24_n-1ej-sml.jpg?v=4ar18",
        exteriorColourText: "Ostuni Pearl White",
        exteriorColourPrice: "1.069,00€",
        exteriorColourPrice2: 1069
    },
];

var tableInteriorSeatColours = [
    {
        seatColourImage:
            "https://assets.config.jaguar.com/jag2/f-pace/k24/interior/int_f-pace_k24_n-301ye-sml.jpg?v=4ar18",
        seatColourText: "Ebony",
        seatColourPrice: "1.668,00€",
        seatColourPrice2: 1668
    },
    {
        seatColourImage:
            "https://assets.config.jaguar.com/jag2/f-pace/k24/interior/int_f-pace_k24_n-301yf-sml.jpg?v=4ar18",
        seatColourText: "Light Oyster",
        seatColourPrice: "1.668,00€",
        seatColourPrice2: 1668
    },
    {
        seatColourImage:
            "https://assets.config.jaguar.com/jag2/f-pace/k24/interior/int_f-pace_k24_n-301yg-sml.jpg?v=4ar18",
        seatColourText: "Mars Red",
        seatColourPrice: "1.668,00€",
        seatColourPrice2: 1668
    },
];

var tableInteriorCarInteriorColours = [
    {
        carInteriorColourImage:
            "https://assets.config.jaguar.com/jag2/f-pace/k24/intfeat/int_f-pace_k24_n-088tn-sml.jpg?v=4ar18",
        carInteriorColourText: "Aluminium",
        carInteriorColourPrice: "448,00€",
        carInteriorColourPrice2: 448
    },
    {
        carInteriorColourImage:
            "https://assets.config.jaguar.com/jag2/f-pace/k24/intfeat/int_f-pace_k24_n-088km-sml.jpg?v=4ar18",
        carInteriorColourText: "Charcoal Ash",
        carInteriorColourPrice: "448,00€",
        carInteriorColourPrice2: 448
    },
    {
        carInteriorColourImage:
            "https://assets.config.jaguar.com/jag2/i-pace/k24/intfeat/int_i-pace_k24_n-188hd-med.jpg?v=4ar18",
        carInteriorColourText: "Ebony Morzine",
        carInteriorColourPrice: "448,00€",
        carInteriorColourPrice2: 448
    },
        {
        carInteriorColourImage:
            "https://assets.config.jaguar.com/jag2/i-pace/k24/intfeat/int_i-pace_k24_n-188ha-med.jpg?v=4ar18",
        carInteriorColourText: "Light Oyster Morzine",
        carInteriorColourPrice: "448,00€",
        carInteriorColourPrice2: 448
    },
];

var filterTableBuilder = {
    carModel: "",
    exteriorColour: "",
    seatColour: "",
    seatMaterial: "",
    interiorColour: "",
    interiorMaterial: ""
};

var totalPrice = {
    originalPrice: "",
    exteriorPrice: "",
    seatPrice: "",
    carInteriorPrice: "",
    totalPrice: ""
}