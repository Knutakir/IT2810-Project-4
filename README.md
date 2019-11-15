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

## Redux

## AsyncStorage

## Git usage and code style
The group used issues with connected branches for the bigger tasks of the project. The commits was also marked with which issue they contributed to. 

### Lint
The group used ESLint for linting. To run the linting, use this command in the `server` or `client` directory: 
```sh
$ npm run lint
```

## Testing
### Responsive design and OS
The group tested the application on three different mobile devices, an iPhone 5s with iOS, a Samsung Galaxy Tab S2 with Android and a Samsung Galaxy S9+.

Picker, small other changes

Another challenge was to adapt the application to both the iPhone and the Samsung Tab. The iPhone that were used is a very small device, and the tab is significantly larger. This lead to "småfiksing" to make the application look good enough on all of the devices, where a library with viewport height and width came in handy. 

Some screenshots: 


### Manual end-to-end testing
SKriv om hva vi testet, flere filter osv.
Tested on both iOS and Android.  


#### Scenario 1
1. Chose filtering option country: `Australia`
2. Chose filtering option mountain height from `2000`-4060:
3. Expect that the list will show `Mount Walter` first.

#### Scenario 2
1. Sort by height 
2. Click arrow to point up
3. Expect `Mount Le Conte` to be at the top of the list (with 2010 m) 
4. Filter by only mountains over 8500 m.
5. expect 4 results where `Lhotse` is at top and `Mount Everest` (highest mountain) is at the bottom of the list.  

#### Scenario 3
1. Click an unrated mountain to get detailed information.
2. Click at the number of stars wanted to rate
3. Click `Yes` when getting the alert notification.
4. Expect message `You have rated this mountain _ stars!` to appear above the rating. 
5. Click a star again. 
6. Expect to get alert `You have already voted for this mountain!`.
7. Close and reopen the app.
8. Expect that the rating is saved for the same mountain. 

#### Scenario 4
1. Click an unrated mountain to get detailed information.
2. Click at the number of stars wanted to rate. 
3. Click `Cancel` when getting the alert notification.
4. Expect no rating to be saved. 

#### Scenario 5
Test that the current page number resets.
1. Go to page number 3.
2. Search for `F`.
3. Expect to be on page number 1.

#### Scenario 6
Test 
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