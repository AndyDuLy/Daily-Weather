exports.helloPubSub = (event, context) => {
    const https = require('https');
  
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_ACCOUNT_AUTH;
    const client = require('twilio')(accountSid, authToken);
  
    const weatherAPIKey = process.env.WEATHER_MAP_API_KEY;
    const weatherAPI_Endpoint = "https://api.openweathermap.org/data/2.5/onecall?lat=43.58&lon=-79.66&units=metric&exclude=daily,minutely,hourly&appid=" + weatherAPIKey; 
  
    https.get(`${weatherAPI_Endpoint}`, (resp) => {
      resp.on('data', (result) => {
        const data = JSON.parse(result);
        const currentTemp_Feels = [data.current.temp, data.current.feels_like];
        const currentPrecip_Snow = [data.current.rain, data.current.snow];
        const dewPoint = data.current.dew_point;
  
        const message = 
        `
          Temp: ${currentTemp_Feels[0]}, Feels like: ${currentTemp_Feels[1]}
          Dew Point: ${dewPoint}, Precip: ${currentPrecip_Snow[0]}, Snow: ${currentPrecip_Snow[1]}
        `
  
        client.messages
          .create({
            body: message,
            from: process.env.TWILIO_REGISTERED_NUMBER,
            to: process.env.TWILIO_PERSONAL_NUMBER
          })
          .then(message => console.log(message.sid));
      });
    }).on("error", (err) => {
      client.messages
        .create({
          body: 'Weather could not be scraped. Check weather API key',
          from: process.env.TWILIO_REGISTERED_NUMBER,
          to: process.env.TWILIO_PERSONAL_NUMBER
        })
        .then(message => console.log(message.sid));
    });
    
  };
    