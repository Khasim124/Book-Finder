# Book Finder — Aganitha Take Home

**Candidate ID:** Naukri0925  
**Name:** Shaik Peda Khasim

## Live Demo
[Book Finder Live Link](https://662jds-5173.csb.app/)

## What I Built
A React app to search books using the Open Library Search API:
- Search by title with debounce
- Quick searches by popular terms
- Shows cover (if available), author(s), publish year
- Responsive layout and error handling
- Recent search history (last 5 searches)
- Filter by year with clear button
- Accessible with ARIA roles and live regions

## How to Run Locally
1. Clone the repository:  
   `git clone https://github.com/Khasim124/Book-Finder.git`
2. Navigate to project folder:  
   `cd Book-Finder`
3. Install dependencies:  
   `npm install`
4. Run the app:  
   `npm run dev`
5. Open in browser:  
   [http://localhost:5173](http://localhost:5173)

## LLM / AI Proof
The file `chatgpt_conversation.txt` contains the conversation with ChatGPT used to plan and implement the app.

## Repo & Deploy
- GitHub: [https://github.com/Khasim124/Book-Finder](https://github.com/Khasim124/Book-Finder)  
- Deployed: [https://662jds-5173.csb.app/](https://662jds-5173.csb.app/)

## Notes
- Candidate ID: **Naukri0925**
- Optional video demo: `video_demo.mp4`
- Tested on desktop and mobile for responsiveness
- Accessibility: Tabs and buttons have ARIA labels; results grid uses `aria-live="polite"`

## Demo Script
Hi — I'm Shaik Peda Khasim, Candidate ID Naukri0925.  
This is my Book Finder app for Aganitha.

1. Open app and search for "Harry Potter" — results with covers and authors appear.  
2. Show no-results handling by searching a random string.  
3. Resize window to mobile view to demonstrate responsive grid.  
4. Show recent searches tab and click-to-search functionality.  
5. Open `src/api/openLibrary.js` and `src/components/BookCard.jsx` to show key code.  
6. Show `chatgpt_conversation.txt` as AI proof.

Thank you — I can explain choices in the interview.
