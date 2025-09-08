# Custom F1 API Integration Setup

This document explains how to set up and use your custom F1 API (hugoogb/f1-api) with this Vue.js application.

## 🚀 Quick Setup

### 1. Start Your F1 API Server

First, make sure your custom F1 API is running. Based on typical Node.js API setups:

```bash
# Clone and setup your F1 API (if not already done)
git clone https://github.com/hugoogb/f1-api.git
cd f1-api

# Install dependencies
npm install

# Start the API server (typically on port 3001)
npm start
# or
npm run dev
```

### 2. Configure the Frontend

The frontend is already configured to use your custom API. The environment variable is set to:

```bash
VITE_API_BASE_URL=http://localhost:3001
```

### 3. Start the Frontend

```bash
# In this project directory
npm run dev
```

## 📋 Expected API Endpoints

The application expects your F1 API to provide the following endpoints:

### Teams Endpoint
```
GET /api/teams
```

Expected response format:
```json
[
  {
    "id": 1,
    "name": "Red Bull Racing",
    "color": "#0600EF",
    "logo": "https://example.com/logo.png",
    "logoSmall": "https://example.com/logo-small.png",
    "imageCar": "https://example.com/car.png",
    "base": "Milton Keynes, United Kingdom",
    "teamChief": "Christian Horner",
    "technicalChief": "Adrian Newey",
    "chassis": "RB19",
    "powerUnit": "Honda RBPT",
    "firstTeamEntry": 2005,
    "worldChampionships": 5,
    "highestRaceFinish": "1st (x91)",
    "polePositions": 91,
    "fastestLaps": 91
  }
]
```

### Drivers Endpoint
```
GET /api/drivers
```

Expected response format:
```json
[
  {
    "id": 1,
    "firstName": "Max",
    "lastName": "Verstappen",
    "team": "Red Bull Racing",
    "number": 1,
    "image": "https://example.com/driver.png",
    "numberLogo": "https://example.com/number.png",
    "nationality": "Dutch",
    "birthDate": "1997-09-30",
    "points": 575
  }
]
```

### Optional Endpoints (if available)

#### Races
```
GET /api/races
```

#### Sessions
```
GET /api/sessions
```

#### Individual Items
```
GET /api/teams/:id
GET /api/drivers/:id
```

#### Health Check
```
GET /health
```

## 🔧 API Response Format

The application can handle two response formats:

### Direct Array/Object Response
```json
[
  { "id": 1, "name": "Team Name" }
]
```

### Wrapped Response
```json
{
  "data": [
    { "id": 1, "name": "Team Name" }
  ],
  "success": true,
  "message": "Data retrieved successfully"
}
```

## 🎨 Customization

### Updating Data Structure

If your API uses different property names, update the TypeScript interfaces in `/src/types/f1.ts`:

```typescript
export interface Driver {
  id: number
  firstName: string    // Change to match your API
  lastName: string     // Change to match your API
  team: string         // Change to match your API
  // ... other properties
}
```

### Updating API Endpoints

If your API uses different endpoint paths, update them in `/src/composables/useF1Api.ts`:

```typescript
// Change these URLs to match your API structure
const getTeams = async (): Promise<Team[]> => {
  const result = await handleRequest(async () => {
    return await fetchWithCache<Team[]>(`${API_BASE_URL}/your-teams-endpoint`)
  })
  return result || []
}
```

### Environment Configuration

You can change the API URL by updating the `.env` file:

```bash
# For local development
VITE_API_BASE_URL=http://localhost:3001

# For production
VITE_API_BASE_URL=https://your-api-domain.com

# For different port
VITE_API_BASE_URL=http://localhost:8000
```

## 🐛 Troubleshooting

### Common Issues

1. **CORS Errors**
   - Ensure your F1 API has CORS enabled for the frontend URL
   - Add appropriate CORS headers in your API

2. **Connection Refused**
   - Verify your F1 API is running on the correct port
   - Check the `VITE_API_BASE_URL` in `.env` file

3. **Data Not Loading**
   - Check browser console for API errors
   - Verify API endpoints return data in expected format
   - Use browser network tab to inspect API responses

4. **TypeScript Errors**
   - Update interfaces in `/src/types/f1.ts` to match your API response structure

### Debug Mode

To enable detailed API logging, check the browser console. All API errors are logged with detailed information.

## 🔄 API Integration Checklist

- [ ] F1 API server is running
- [ ] `/api/teams` endpoint returns team data
- [ ] `/api/drivers` endpoint returns driver data
- [ ] CORS is configured correctly
- [ ] Environment variable `VITE_API_BASE_URL` points to correct URL
- [ ] Data structure matches TypeScript interfaces
- [ ] Images/assets are accessible (if using URLs from API)

## 📞 Support

If you encounter issues:

1. Check that your F1 API matches the expected endpoint structure
2. Verify data formats match the TypeScript interfaces
3. Ensure CORS is properly configured
4. Check browser console for detailed error messages

The application includes comprehensive error handling and will display user-friendly error messages when API calls fail.