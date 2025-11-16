# Portfolio React Project Fixes

## Issues Identified
- Incorrect JSON server port (3000 instead of 3002)
- Fetch URLs using specific endpoints instead of /data
- Missing data fields in db.json (duration and achievements)
- No error handling in fetch calls
- Certificates component lacks loading state
- Potential undefined data access

## Tasks
- [x] Update package.json to use port 3002
- [x] Restructure db.json to have "data" key containing all information
- [x] Update Hero.jsx fetch URL to /data and add error handling
- [x] Update ExperienceList.jsx fetch URL to /data and add error handling
- [x] Update Certificates.jsx fetch URL to /data, add loading state and error handling
- [x] Add missing duration and achievements fields to experience data
- [x] Ensure all components have proper fallbacks to prevent blank screens
- [x] Test the application to ensure no white screen
