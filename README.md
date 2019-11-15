# Project 4

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


#### Scenario 1
1. Chose filtering option ... 
2. Chose filtering option ...
3. Expect that the list will show ... first

#### Scenario 2
1. Sort by height 
2. Click arrow
3. Expect .. to 
4. Filter by only mountains over 8...
5. expect 3 results.. 

#### Scenario 3
1. rate
2. get message
3. cant rate again
4. close app
5. check mountain, cant rate again 

#### Scenario 4
1. page 3
2. search
3. Expect to be on page 1

#### Scenario 5
1. search
2. bla ned
3. Expect to show .. pages
4. click last page
5. expect to see .. as last mountains

### Test
To run server tests from the previous project run these commands: 
```sh
$ cd server
$ npm test
```

## Other Third Party Components and Libraries

## Credits
* Header image is created by <a href="https://www.freepik.com/free-vector/mountain-landscape_4391852.htm"> kjpargeter - Freepik</a>.

* The list of mountains is from <a href="https://en.wikipedia.org/wiki/List_of_mountains_by_elevation"> Wikipedia</a>. 

* Mountain coordinates and country from <a href="https://www.openstreetmap.org">OpenStreetMap</a>.