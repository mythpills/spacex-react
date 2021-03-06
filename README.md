# Space X React.

## React project that uses public Space X API to load the list of rockets and display information about them.

You can preview the Rockets API response using `curl`*

```bash
curl --location --request GET https://api.spacexdata.com/v4/rockets | json_pp
```

### Stack used
- Typescript 
- Reactstrap (less bloat, good documentation)
- Axios (data fetching)
- React 
- Redux (state management)
- Local Storage (local storage for scenarios where page refreshed, when no data available the local storage can be used to avoid abrupt crash )
- Jest, React Testing Library (unit testing components)
- Cypress (end to end testing)

![image](https://user-images.githubusercontent.com/11517358/119571732-a2992400-bda9-11eb-9eb5-7999dd3341cf.png)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### npm start

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### npm test

Runs the unit test
![image](https://user-images.githubusercontent.com/11517358/119577641-f1978700-bdb2-11eb-946e-510abdcd7525.png)


### npm run e2e

Runs the cypress e2e test in the browser
![image](https://user-images.githubusercontent.com/11517358/119575398-eb071080-bdae-11eb-81a7-ec1323c04f47.png)


### Code analysis report
Its a code review tool that does basic checks - https://embold.io/

![image](https://user-images.githubusercontent.com/11517358/119547146-a79baa80-bd8c-11eb-8a59-04ff6b73a4f0.png)
