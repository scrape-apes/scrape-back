#### As a thrifter I want to search for an item once and find it in many places
  - Feature Task: WebScraping offerUp, craigslist, ebay etc...
  - Acceptance Test: ensure that we provide all the results on one page


#### As a user I want to be able to log in and have the app remember me
  - Feature Task : Create an Auth/login/signup front page
  - Acceptance Test: Ensure the user can login via form and redirect to scrape page


#### As a thrifter I want to be able to avoid going to big box stores and throwing my money at giant corporations
  -  Feature Task: lookup is an app for upcycling goods, ones mans trash is another mans treasure
  - Acceptance Test: Ensure that user is provided access to local site data via Craigslist, etc


#### As a user I want to be able to do this on my Android AND iOS phone
  - Feature Task: Use React Native to port to Android and iOS using Expo
  - Acceptance Test: Ensure it works on two phone simulations

#### As a user I want to be notified when a new item that fits my criteria is added
  - Feature Task: Stretch: utilize push notifications to notify the user on their device
  - Acceptance Test: Ensure that tests verify users are able to receive notifications via Expo


#### As a user, I want to search for items that are within a certain distance from my location
  - Feature Task: Geolocation data obtained from gps provided by phone through react native/expo OR geolocation API
  - Acceptance Test: Ensure that when a user agrees to allow phone to utilize location, the correct location is populated on the back end

## Vision

#### What is it?

The vision is to aggregate local 2nd hand marketplaces under one search app.

#### What does it solve?

This product solves the pain point of searching for the same product on multiple marketplaces. If you want to find a 2nd hand desk, this will show you all of the options near you.

#### Why should we care about the product?

When spending on a budget, it is important to find the best and most cost effective option available. This app will do that for you.

## Scope

#### IN

Features

- The App will provide a search field for 2nd hand items
- It will scrape Craigslist, Offerup, varagesale and provide an aggregated list of results
- It will provide results based on user location, and display price - not necessarily ordered
- It will display these results on iOS and Android devices as Native apps
- Users will be able to click the result link and their default browser will open to that page

#### OUT

- This product will not buy the product - there is no ecommerce site linked to this
- This does not save their searches (as per mvp)
- It will not brush their teeth


#### MVP
The minimum end product will allow a user to login, search for an item, be provided results, and redirect to those sites provided in results

#### Stretch
- Order results based on price
- Discord bot search and results
- Save one item to be "watched"
- Continuous scraping - notification of when a new listing matching their criteria appears
- Display condition of item
- Web based search in addition to Reactive Native

#### Functional Requirements
- A user can sign up
- A user can enter a search term
- A user is provided with results links
- A user successfully is able to travel to those links


#### Non-Functional Requirements
- Security - we'll be using EnsureAuth to verify our users on login. User data will be stored using postgreSQL. We will use bcyrpt to encrypt passwords and store the pass as a hash with 8-14 salt rounds. 
- Usability - we will provide access with 2 or more mobile devices using Expo. These two or more devices will be the latest models of the Google Pixel and iPhone. Our team will also ensure usability of this app with their respective iOS devices, such as various iPads.
- Testability - we will test on 2 or more mobile devices as described above. We will follow a blackbox QA test plan. The plan will walk a user through signup/auth, search, results, and redirect.
- Location access: A user should provide location access. If the user refuses it will be limited to broad searches. A stretch goal is to allow the user to enter in a zipcode with the search. 

#### Data Flow
- The user downloads the app from the app store (Or is creates the build manually on their phone).
- The chooses to deny or allow location access
- The user is prompted to sign up/log in. Upon sign up/log in, the user is redirected to the seach page. 
- At the search page the user enters a max price, and a search term. (Stretch: user enters zip).
- Once the users submits the search, our frontend communications with the backend, sending the backend the search term and location data.
- At this point, on the front end, React Native uses an isLoading animation while the front and back end sync.
- The backened uses puppeteer to access each site, providing necessary search criteria as required by each site. 
- The backend then scrapes the site and sends the frontend the results
- The frontend displays the results using React Native on the results page. The user is redirected to this page. 
- The user is able to scroll the the results.
- The user can return back to the search page, or the user can click through to be redirected to search result listing on its parent web page. This will pop up via the user's native browser.

