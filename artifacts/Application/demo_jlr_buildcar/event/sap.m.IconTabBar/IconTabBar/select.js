switch (this.getSelectedKey()) {
    case "Exterior":
        //execute code block for 'vegan'
        console.log("Exterior");

        generateBuilderData(filterTableBuilder, this.getSelectedKey());

        break;

    case "Interior":
        //execute code block 'gluten-free'
        console.log("Interior");

        generateSeatsConfigOptions();

        generateCarInteriorConfigOptions();

        generateBuilderData(filterTableBuilder, this.getSelectedKey(), "Seats");
        break;

    default:
        //Default catches all cases not specified above
        console.log("Generic Error");
        break;
}
