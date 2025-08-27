# Reactotron Setup Guide

## Overview

Reactotron is now configured in your Mobile Movie App to help you debug network calls, state changes, and general app behavior.

## What's Been Set Up

### 1. Configuration Files

- **`ReactotronConfig.ts`** - Main Reactotron configuration
- **`services/reactotron.ts`** - Utility functions for custom logging
- **Updated `app/_layout.tsx`** - Imports Reactotron in development mode
- **`services/api.ts`** - Clean API functions (network calls auto-logged)

### 2. Features Enabled

- ✅ **Automatic** network request/response logging
- ✅ Console logging integration
- ✅ Custom application logging
- ✅ Error logging
- ✅ Development-only activation

## How to Use Reactotron

### 1. Install Reactotron Desktop App

Download and install Reactotron from: <https://github.com/infinitered/reactotron/releases>

### 2. Start Your App

```bash
npm start
# or
expo start
```

### 3. Connect Reactotron

1. Open the Reactotron desktop app
2. Your app should automatically connect when running in development mode
3. You'll see "Mobile Movie App" in the connection list

### 4. What You'll See

#### Network Requests

All API calls to TMDB will be automatically logged with:

- Request details (URL, headers, method)
- Response data
- Response time
- Status codes

#### Automatic Network Logging

All network requests (including movie API calls) are automatically logged:

- 📡 Request details (URL, method, headers, body)
- ✅ Response data and status codes
- ⏱️ Response timing
- 🚫 Error responses with full details

#### Console Integration

All console.log statements will appear in both:

- Device console
- Reactotron timeline

## Custom Logging Functions

You can use these functions throughout your app for custom logging:

```typescript
import { log, logError, logWarn, display } from "./services/reactotron";

// Basic logging
log("User action", { action: "search", query: "batman" });

// Error logging
logError("Failed to load movies", error);

// Warning logging
logWarn("Rate limit approaching", { remaining: 10 });

// Custom display logging
display("User State", { userId: 123, preferences: {...} }, "User logged in");
```

**Note**: Network requests are automatically logged - no need for explicit API logging!

## Debugging Network Calls

### Viewing Network Requests

1. Open Reactotron desktop app
2. Go to the "Network" tab
3. All fetch requests will appear here with full request/response details

### API Call Debugging

- **All network requests are automatically intercepted and logged**
- No explicit logging code needed in your API functions
- Request/response data, headers, and timing are captured
- Error states and status codes are clearly displayed
- Search queries and responses are automatically tracked

## Troubleshooting

### App Not Connecting

1. Make sure Reactotron desktop app is running
2. Check that your device/simulator is on the same network
3. Look for "Reactotron Configured" log in your console

### Network Requests Not Showing

1. Verify that the networking plugin is enabled (it should be by default)
2. Check that you're making requests in development mode
3. Ensure your API calls are using the standard fetch API

### Manual Connection (if auto-connect fails)

If automatic connection fails, you can manually specify the host in `ReactotronConfig.ts`:

```typescript
.configure({
  name: 'Mobile Movie App',
  host: 'YOUR_COMPUTER_IP_ADDRESS', // e.g., '192.168.1.100'
})
```

## Example Usage

When you search for movies in the app, you'll see:

1. **Automatic network request logging** in the Network tab
2. Request details (URL, headers, search query)
3. Response data with full JSON payload
4. Response timing and status codes
5. Any errors with detailed error information

## Tips

- Reactotron only runs in development mode (`__DEV__`)
- Clear Reactotron logs using the clear button in the desktop app
- Use the Timeline view to see chronological events
- Bookmark important log entries for later reference
- Use the State tab to inspect React component state changes

## Next Steps

Now you can:

1. Monitor all network requests to the TMDB API
2. Debug search functionality
3. Track API errors and response times
4. Add custom logging throughout your app using the utility functions

Happy debugging! 🎬
