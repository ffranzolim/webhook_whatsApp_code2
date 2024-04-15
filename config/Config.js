// ODA Details

//bots4saas
//exports.ODA_WEBHOOK_URL = process.env.ODA_WEBHOOK_URL || 'https://oda-d14593577687412ba373ef4e52cb7089-da2.data.digitalassistant.oci.oraclecloud.com/connectors/v2/listeners/webhook/channels/2b3cb40a-0c19-4648-b65c-168151c29d30'; 
//exports.ODA_WEBHOOK_SECRET = process.env.ODA_WEBHOOK_SECRET || 'ygtegfPb3ZgyKIWElJVoBWBKBLjFlvvM'; 

//arsp
//exports.ODA_WEBHOOK_URL = process.env.ODA_WEBHOOK_URL || 'https://oda-27ac513e872642dc9984fe27bd60a41d-da10.data.digitalassistant.oci.oraclecloud.com/connectors/v2/listeners/webhook/channels/72d2d06a-3d2d-4145-a5ec-6efa23e52fc9'; 
//exports.ODA_WEBHOOK_SECRET = process.env.ODA_WEBHOOK_SECRET || 'KjG6E2lKy2tFxIYOs9u79xt49v7PtvRz'; 

//faf
exports.ODA_WEBHOOK_URL = process.env.ODA_WEBHOOK_URL || 'https://oda-3110b5afa8704606b646827cd009be56-da10.data.digitalassistant.oci.oraclecloud.com/connectors/v2/listeners/webhook/channels/1bd16f4d-2e70-437c-8d61-de81e91f2da4'; 
exports.ODA_WEBHOOK_SECRET = process.env.ODA_WEBHOOK_SECRET || 'l8SFIdXC9bHw6fVdw4c40dFcg4lNWl8o'; 

// WhatsApp Details
exports.API_URL = 'https://graph.facebook.com';
exports.ENDPOINT_API = 'messages';
exports.VERIFY_TOKEN = process.env.VERIFY_TOKEN || 'tokenfaf'; 
exports.ACCESS_TOKEN = process.env.ACCESS_TOKEN || 'EAASXdveDHD4BOZCWnda9KBtxyiZAVPFiScvACayoc37YQ7OqhO21JC5wQr0OuIe1cVImsAGu5MTXNKtNJ62w8lhmBThGI26OAdTX63nYI6APA9Qr7BrDEQZBwbrD4vbB7Ga7KzN6GSbTpNuJihigYwUehKpQQ70lTmY4Brb9ELpi0vGMZBr5OxnYhl3wsC61aHzhTNYXFyZALFZARiAEUZD';
exports.API_VERSION = process.env.VERSION || 'v19.0';
exports.PHONE_NUMBER_ID = process.env.PHONE_NUMBER_ID || '112470085110760';
exports.LIST_TITLE_DEFAULT_LABEL = 'Selecionar um(a)';

// General Detail
exports.port = process.env.port || 3000;
exports.FILES_URL = 'https://f7ed-201-92-13-246.ngrok-free.app'; //your app server url //Ngrok
exports.LOG_LEVEL = 'info'


// WhatsApp Sender event IDs
exports.EVENT_QUEUE_MESSAGE_TO_WHATSAPP = "100";
exports.EVENT_WHATSAPP_MESSAGE_DELIVERED = "1000";
exports.EVENT_PROCESS_NEXT_WHATSAPP_MESSAGE = "2000";