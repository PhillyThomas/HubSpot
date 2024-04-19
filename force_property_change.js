//============================
// This CC block will force a type update to a property
// Useful when you need to update a property that's being used in many places in HubSpot, as this bypasses the requirement to remove the property from all areas it's attached to.
//============================

const hubspot = require('@hubspot/api-client');
exports.main = async (event, callback) => {

  const hubspotClient = new hubspot.Client({
    accessToken: process.env.SECRET_KEY
  });

  const PropertyUpdate = { type: "string", fieldType: "text" };
  const objectType = "0-2";
  const propertyName = "premium";

  try {
    const apiResponse = await hubspotClient.crm.properties.coreApi.update(objectType, propertyName, PropertyUpdate);
    console.log(JSON.stringify(apiResponse, null, 2));
  } catch (e) {
    e.message === 'HTTP request failed'
      ? console.error(JSON.stringify(e.response, null, 2))
      : console.error(e)
  }
  
  callback({
    outputFields: {
   
    }
  });
}
