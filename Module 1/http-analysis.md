# HTTP Analysis of [Fitchburg State website](https://www.fitchburgstate.edu/)
## Request 1: image (international-night26.jpg)

#### Request Method:
GET

#### Request URL: 
https://www.fitchburgstate.edu/sites/default/files/styles/gen_list_sm/public/media/images/2026-07/InternationalNight26.jpg?h=62dbc0fb&itok=H9c0C1wq 

#### Response Status Code:
200

#### Headers:

    date: The date on whih the information was retrieved
    content-type: The file type of the image


## Request 2: simplebar.css

### Request Method:
GET
### Request URL:
https://cdn.jsdelivr.net/npm/simplebar@latest/dist/simplebar.css

#### Response Status Code:
200 

#### Header:

    etag: A unique identifier for a web resource
    content-length: The length (in bytes) sent to the recipient

## Request 3: sharethis.js

#### Request Method:
GET

#### Request URL:
https://platform-api.sharethis.com/js/sharethis.js

#### Response Status Code:
304 

#### Header: 

    server: The software used by the original server handling the request
    method: The method used to handle the request




## HTTP Post-Analysis: 
It was hard to tell which web resource uploaded first because the loading times were so fast. It seems that most of the scripts were received first, all of them taking roughly 0ms. One reason for this may be that the files are easily cacheable and load into the browser right away. They also are relatively small compared to a lot of the other resources that take more time to upload to the webpage. 

The resource that took the longest to load was one called "beacon," which would ping roughly every 60 seconds. We believe this is because it runs a check to see if you are still connected to the website. If the client is still connected, the beacon notifies the server to be prepared to send over more data as quickly as possible.

One thing that surprised us was that the beacon kept showing up under network, and we had no idea why. It wasn't until we thought about how a beacon works that we realized its potential purpose. It makes sense to have a resource like this on a website of this magnitude due to the sheer amount of resources available. We wonder how that might compare to other websites that have significantly fewer resources to serve to the user.
