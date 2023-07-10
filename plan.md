Prompt: Build an event platform using Angular on the frontend and Node with Express or NestJS on the backend with the following features:

- Listing events
- Creating events
- Filtering events

The event can have the following properties (data model):

Event name (String)
Event host (String)
Event date (Date)
Event location (String)

---

Angular Frontend:

- Event Component (Main page) - List Events, Form for creating events, form for filtering
- Event Service - Handling Async HTTP calls to API
- Event Interface - Data Typing

Node/Express Backend:
Routes:

- GET /events - get Event List
- POST /createEvent - create a new event
- GET /search/:searchParam - filter/search

Controllers:

- getEventList()
- createEvent()
- searchEvent()

Step by Step Plan:

# API is created first because it doesn't depend on frontend

1. Set up the Node/Express Backend

   - Set up Server, Routes, Controller, Model, CORS

2. Set up Angular Frontend
   - Created Event component
     - Import Service
     - getEventList from service
     - stored data in local state/variable
   - Created Event service
     - Imported HttpClient
     - getEventList - GET /events to API
   - Created Event interface
