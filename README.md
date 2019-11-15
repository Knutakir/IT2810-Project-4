# Project 4

Mountain Finder is a website with over 1000 mountains with height over 2000 meters. You can search, sort and filter the mountains, and by clicking a specific mountain in the list, a modal appears with detailed mountain data. In this modal, you can rate the chosen mountain from 1-5, and see the total score. The mountain is rated by clicking the number of stars wanted. You can only rate once for every phone (or download instance). 

## Install and Run

The client is set up to use the server on the VM, to use your own server with database ...

### Server
```sh
$ cd server
$ npm install
$ npm run init-db
$ npm start
```

### Client
```sh
$ cd client
$ npm install
$ npm start
```

## React Native and reuse code 
React Native was used for this project. To reuse code from the previous project which used React, some changes had to be done. The components from React and React Native does not only have different names, but often different functionality and/or styling too. 

View div

TouchableOpacity button

css stylesheet
structure -> only one file


## Expo
Expo is used for this project to make the development of the React Native applicaton fast and easy. Expo is a a platform for making universal applications with React Native that runs on iOS and Android. It has a lot of useful tools that is built around React Native that we used in this project, such as the `expo-cli` and `@expo/vector-icons`. The group used the expo CLI for installing, initializing and running the project:
```sh
$ npm install --global expo-cli
$ expo init <project-name>
$ cd <project-name>
$ expo start
```
The CLI worked as a provider of the mobile client by using a mobile client of expo on the phones and either scanning a QR-code (which directed to a URL) or by manually insering a URL in the web browser. This started the downloading of the application to the phone and running it afterwards.
The command line interface also provided fast upload of the application after every safe of source files in the project to the devices.

## Redux

## AsyncStorage
In this project the group used `AsyncStorage` for storing the if the user has rated a mountain in the mobile application. AsyncStorage made it possible for persistance data to be stored on the device from one to the next run. `AsyncStorage` works similiar to `LocalStorage` for the web, but is asynchronous and returns a `Promise`. The feature we implemented is available after searching/filtering/sorting and selecting a mountain to open the modal with the given mountain. Then on the bottom of the modal there is stars that can be used for rate the selected mountain. The user of the application is only available to rate a mountain once and this is stored in the AsyncStorage and checked every time a mountain is selected. If a selected mountain is already rated by the user of the application, then a message appears to the user over the stars and if the user presses the stars. 

## Git usage and code style
The group used issues with connected branches for the bigger tasks of the project. The commits was also marked with which issue they contributed to. 

### Lint
The group used ESLint for linting. To run the linting, use this command in the `server` or `client` directory: 
```sh
$ npm run lint
```

## Testing
### Responsive design and OS


The group tested the application and made sure that the different filtering options worked together, and that they worked with search and sorting. The pagination and rating was tested. The group made sure that AsyncStorage worked as intended, also after reopening the application. 

All of these functionalites were tested on both iOS and Android. There was also done testing of the responsive design, to make sure that it woked well on different sizes. 

The group tested the application on three different mobile devices, an iPhone 5s with iOS, a Samsung Galaxy Tab S2 with Android and a Samsung Galaxy S9+.

Picker, small other changes

Another challenge was to adapt the application to both the iPhone and the Samsung Tab. The iPhone that were used is a very small device, and the tab is significantly larger. This lead to "småfiksing" to make the application look good enough on all of the devices, where a library with viewport height and width came in handy. 

Screenshots from the different devices: 
<div style="text-align: center">
<strong>Image 1 and 2: Iphone 5s<strong><br>
<img src="./images/iphone1.png" height=350/> <img src="./images/iphone2.png" height=350/><br>

<strong>Image 3 and 4: Iphone 5s<strong><br>
<img src="./images/iphone3.png" height=350/> <img src="./images/iphone4.png" height=350/>

<strong>Image 5: Iphone 5s<strong><br>
<img src="./images/iphone5.png" height=350/> 

<strong>Image 6 and 7: Samsung Galaxy S9+<strong><br>
<img src="./images/samsung94.png" height=350/> <img src="./images/samsung93.png" height=350/><br>

<strong>Image 8 and 9: Samsung Galaxy S9+<strong><br>
<img src="./images/samsung92.png" height=350/> <img src="./images/samsung91.png" height=350/><br>

<strong>Image 10 and 11: Samsung Galaxy Tab S2<strong><br>
<img src="./images/samsung22.png" height=350/> <img src="./images/samsung24.png" height=350/><br>

<strong>Image 12 and 13: Samsung Galaxy Tab S2<strong><br>
<img src="./images/samsung25.png" height=350/> <img src="./images/samsung21.png" height=350/><br>
</div>



### Manual end-to-end testing

#### Scenario 1
Test that two filters can be used on the data at the same time.
1. Filter on country `Australia`.
2. Filter on height from `2000-4060`.
3. Expect that the list will show the mountain `Mount Walter` first.

#### Scenario 2
Test that sorting is not reset after filtering. 
1. Sort by height. 
2. Click arrow to point up.
3. Expect `Mount Le Conte` to be at the top of the list (with 2010 m height).
4. Filter by only mountains over 8500 m.
5. Expect 4 results where `Lhotse` is at the top and `Mount Everest` (highest mountain) is at the bottom of the list.  

#### Scenario 3
Test that a user only can rate a mountain one time (on the same phone/application instance).
1. Click an unrated mountain to get detailed information.
2. Click at the number of stars wanted to rate.
3. Click `Yes` when getting the alert notification.
4. Expect message `You have rated this mountain _ stars!` to appear above the rating. 
5. Click one of the stars again. 
6. Expect to get alert `You have already voted for this mountain!`.
7. Close and reopen the app.
8. Expect that the rating is saved for the same mountain. 

#### Scenario 4
Test that it is possible to cancel a rating when the alert appears.
1. Click an unrated mountain to get detailed information.
2. Click at the number of stars wanted to rate. 
3. Click `Cancel` when getting the alert notification.
4. Expect no rating to be saved. 

#### Scenario 5
Test that the active page number resets.
1. Go to page number 3.
2. Search for `F`.
3. Expect to be on page number 1.

#### Scenario 6
Test that the pagination works. 
1. Search for `H`.
2. Scroll to the bottom.
3. Expect to see maximum page as 21.
4. Click on page 21.
5. Expect to see `Mount Heng (Shanxi)` as last the mountain.

#### Scenario 7
Test that the application returns no mountains and a message when there are no results.
1. Search for `Donut`. None of the mountains are called that. 
2. Expect to get message `No results!`

#### Scenario 8
Test country searching. 
1. Search for `Norway`.
2. Expect to get three mountains as result.


### Tests
To run server tests from the previous project run these commands: 
```sh
$ cd server
$ npm test
```

## Other Third Party Components and Libraries

Less third party components because native comps

### <a href="https://expo.github.io/vector-icons/">@expo/vector-icons Ionicons</a>

### <a href="https://github.com/ptomasroos/react-native-multi-slider">react-native-multi-slider</a>

### <a href="https://github.com/joetakara/react-native-expo-viewport-units">react-native-expo-viewport-units</a>

## Credits
* Header image is created by <a href="https://www.freepik.com/free-vector/mountain-landscape_4391852.htm"> kjpargeter - Freepik</a>.

* The list of mountains is from <a href="https://en.wikipedia.org/wiki/List_of_mountains_by_elevation"> Wikipedia</a>. 

* Mountain coordinates and country from <a href="https://www.openstreetmap.org">OpenStreetMap</a>.