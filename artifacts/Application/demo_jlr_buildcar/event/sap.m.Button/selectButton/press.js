// Replace yourField with FieldName
const context = oEvent.oSource.getBindingContext();

// Get Entire Model
const data = context.getObject();

filterTableBuilder.carModel = data.carModel; 
filterTableBuilder.exteriorColour = "White";

modelpageMasterBuild.setData(data);

initialBuilderData(filterTableBuilder);

IconTabBar.setSelectedKey("Exterior");

SplitApp.toMaster(pageMasterBuild);
SplitApp.toDetail(pageDetailBuild);

carPrice.setText("Total Cost: " + data.carPrice);