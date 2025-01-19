import https from "https";
import twilio from "twilio";
import { Request, Response } from "express";

export const helloPubSub = (req: Request, res: Response): void => {
  const accountSid: string = process.env.TWILIO_ACCOUNT_SID as string;
  const authToken: string = process.env.TWILIO_ACCOUNT_AUTH as string;
  const client = twilio(accountSid, authToken);

  const weatherAPIKey: string = process.env.WEATHER_MAP_API_KEY as string;
  const weatherAPIEndpoint: string = `https://api.openweathermap.org/data/2.5/onecall?lat=43.58&lon=-79.66&units=metric&exclude=daily,minutely,hourly&appid=${weatherAPIKey}`;

  https
    .get(weatherAPIEndpoint, (resp) => {
      let data = "";

      resp.on("data", (chunk) => {
        data += chunk;
      });

      resp.on("end", () => {
        try {
          const parsedData = JSON.parse(data);
          const currentTempFeels: [number, number] = [
            parsedData.current.temp,
            parsedData.current.feels_like,
          ];
          const currentPrecipSnow: [number | null, number | null] = [
            parsedData.current.rain || 0,
            parsedData.current.snow || 0,
          ];
          const dewPoint: number = parsedData.current.dew_point;

          const message = `
            Temp: ${currentTempFeels[0]}, Feels like: ${currentTempFeels[1]}
            Dew Point: ${dewPoint}, Precip: ${currentPrecipSnow[0]}, Snow: ${currentPrecipSnow[1]}
          `.trim();

          client.messages
            .create({
              body: message,
              from: process.env.TWILIO_REGISTERED_NUMBER as string,
              to: process.env.TWILIO_PERSONAL_NUMBER as string,
            })
            .then((msg) => {
              console.log("Twilio Message Sent:", msg.sid);
              res.status(200).send("SMS sent successfully.");
            })
            .catch((err) => {
              console.error("Twilio Error:", err);
              res.status(500).send("Failed to send SMS.");
            });
        } catch (error) {
          console.error("Parsing Error:", error);
          res.status(500).send("Failed to parse weather data.");
        }
      });
    })
    .on("error", (err) => {
      console.error("HTTPS Request Error:", err);

      client.messages
        .create({
          body: "Weather could not be scraped. Check weather API key",
          from: process.env.TWILIO_REGISTERED_NUMBER as string,
          to: process.env.TWILIO_PERSONAL_NUMBER as string,
        })
        .then((msg) => {
          console.log("Twilio Error Message Sent:", msg.sid);
          res
            .status(500)
            .send("Weather API request failed. SMS notification sent.");
        })
        .catch((err) => {
          console.error("Twilio Error:", err);
          res
            .status(500)
            .send("Weather API request failed. Failed to send error SMS.");
        });
    });
};
