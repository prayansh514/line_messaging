
# Line Messaging App 

A messaging application, which supports sending friend requests,text chat and video calling functionality


## Tech Stack used

1. Node.js & Express.js: RESTful API server, leveraging TanStack Query for data fetching and client-side state management.

1. MongoDB: NoSQL database for storing users, messages, and call logs.

3. React.js: Frontend UI with React Router and Context API for state management.

4. Stream Video API: Real-time video call infrastructure.

5. TanStack Query: Efficient data fetching, caching, and synchronization for chat messages, user presence, and application state.


## .env setup in backend

PORT=5001

MONGO_URI=your_mongo_uri

STEAM_API_KEY=your_steam_api_key

STEAM_API_SECRET=your_steam_api_secret
JWT_SECRET_KEY=your_jwt_secret

NODE_ENV=development
## .env setup in frontend

VITE_STREAM_API_KEY=your_stream_api_key
## Run the backend

cd backend
npm install
npm run dev
## Run the frontend

cd frontend
npm install
npm run dev
## Testing out chatting

To test out chatting or video calling use two different accounts and sign up into these two accounts kept open on two seperate browser windows on one account send a friend request to your other account and on the other accept it then you will be able to start chatting 

## Demo video

Incase the deployed site is showing too many requests or bad connection , here is a demo video on the deployed the website

[▶️ Watch Admin View Demo (Google Drive)](https://drive.google.com/file/d/1TvZ_YuPs_mLIpT5RPobeF0ogUDLeiqgH/preview)

## Deployed website link

    https://line-messaging-sjkz.onrender.com/login
