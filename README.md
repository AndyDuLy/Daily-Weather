# daily-weather-cron
Recurring weather alerts with Twilio SMS &amp; OpenWeather API, deployed serverless on GCloud Functions with a daily GCloud Pub/Sub cron job trigger.  
  
  
===== Installation & Usage ======
> Clone the repo  
  
> API Keys & Accounts:
Sign up and acquire your own Twilio phone number at [https://www.twilio.com/sms]  
Sign up and acquire your own OpenWeatherMap account and API key at [https://openweathermap.org/api/one-call-api]  
Sign up and create a Google Cloud Platform project at [https://cloud.google.com/appengine/docs/standard/nodejs/building-app/creating-project]  
  
> Code:
Throw the index.js into a GCloud Function to run the code serverless-ly at [https://cloud.google.com/functions]  
Throw all your API and Auth keys into te GCloud Function's environment variables to keep them safe and secure  
Create a Cloud Pub/Sub to trigger your GCloud Function at [https://cloud.google.com/pubsub/docs]  
Create a Cloud Scheduler cron job to recurringly run your Pub/Sub trigger at an interval you specify at [https://cloud.google.com/scheduler]  
If you need help with cron job expressions, check out [https://crontab.guru/]  
  
Once the GCloud Function is deployed and your Scheduler is active, the GCloud Function will continuously be triggered at the interval you set earlier!  
You're now done the setup!  
  
** Index.js contents can be modified to extract different information than the bits I personally chose **  
  
  
===== License ======

MIT License

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
