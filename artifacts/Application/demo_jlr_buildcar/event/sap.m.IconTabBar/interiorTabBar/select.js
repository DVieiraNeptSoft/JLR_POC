switch (this.getSelectedKey()) {
    case "Seats":
        //execute code block for 'vegan'
        console.log("Seats");        

        generateBuilderData(filterTableBuilder, 'Interior', this.getSelectedKey());

        break;

    case "Car Interior":
        //execute code block 'gluten-free'
        console.log("Car Interior");

        // generateCarInteriorConfigOptions();

        generateBuilderData(filterTableBuilder, 'Interior', this.getSelectedKey());
        break;

    default:
        //Default catches all cases not specified above
        console.log("Generic Error");
        break;
}