# Daily-Weather | Serverless SMS Cron Job
Recurring weather alerts with Twilio SMS API, OpenWeatherMap API, deployed serverless on GCloud Functions with a daily GCloud Pub/Sub cron job trigger. <br/> 


## Demo & How-To-Build

The image below shows a sample text I receive every morning at 6:30am (EST). <br/>
<img src="/RepoFiles/demo.png">

If you're interested in learning how to build this project yourself, I actually wrote a Medium article on how to! Check it out here: https://link.medium.com/PQ2tGyP9g8 <br/>


## Inspiration & Purpose

Before COVID, I had an extremely consistent routine in the early mornings to go to the gym, and hated having to either hope I was dressed accordingly for the bipolar weather of that is Canada, or stand there and wait for the slow Weather Network app to load. If this sounds like a very 'first world problem', it's because it honestly is :) <br/>
I really just wanted to be able to wakeup, glance at my phone's notification drawer, and see the relevant weather information for the day before heading out. <br/>
At the time of writing this and when I first created this project, that level of customizability wasn't available in the weather network app or Google's discrete weather updates, so I just decided to build it myself. <br/>


## Technical Stack

If you've made it this far, surely you're interested in knowing a bit more about the underlying tools and technologies I used! <br/>

Mini project was built entirely on Google Cloud Platform with additional APIs from Twilio SMS and OpenWeatherMap. <br/>
Specifically Firebase's Realtime Database, and hosted through GCP's Cloud Hosting as the integration of everything was seamless. <br/>
I went with GCP because I needed a couple cloud services/products, had previously used GCP, and the documentation was immensely detailed. The latter bit mattered the most for this project as it is a bit niche, and I found little help online to put the pieces together for this particular use case.

<br/> <br/>
  
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
