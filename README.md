# CINEMATE

CINEMATE is a web application designed to help users explore movies and TV shows seamlessly. Powered by React and The Movie Database (TMDB) API, the platform provides information on trending, highly-rated, and popular titles, all presented with a clean and responsive UI.

---

## Features
- **Explore Trending Content**: Discover trending movies and TV shows for the past week.
- **Category Browsing**:
  - Top-rated movies and TV series.
  - Most popular TV series.
  - Trending movies.
- **Search**: Search for movies or TV shows by title using TMDB's extensive database.
- **Detailed Information**:
  - View movie/TV show title, release date, and rating.
- **Tabs**:
  - Separate views for all movies and TV shows.

---

## Architecture
The app features:
- **Landing Page**:
  - Dynamic slides showcasing trending movies and TV shows.
  - Categories for trending, top-rated, and popular content.
  - A responsive search bar.
- **Navigation Tabs**:
  - "All Movies" and "All TV Series" for in-depth browsing.

---

## Technologies Used
- **Frontend Frameworks & Libraries**:
  - React.js
  - React Router DOM (navigation)
  - React Redux (state management)
  - React Icons (UI elements)
  - Moment.js (date formatting)
- **Styling**:
  - Tailwind CSS
- **API Integration**:
  - Axios (for API requests)
  - TMDB API (data source)
- **Tools**:
  - Git & GitHub (version control)
  - Vercel (deployment)

---

## Installation and Setup
To run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd [repository-folder]
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your TMDB API key:
   ```env
   REACT_APP_TMDB_API_KEY=your_tmdb_api_key
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open the app in your browser at `http://localhost:3000`.

---

## Deployment
The project is deployed on Vercel. Visit the live site here: [Live Application URL](#).

---

## Development Highlights
### Successes
- Integrated TMDB API for real-time content updates.
- Built a responsive and visually appealing UI.
- Implemented dynamic routing and state management with React Router DOM and Redux.

### Challenges
- Managing API rate limits effectively.
- Debugging Redux-related state issues.

### Areas for Improvement
- Add "Favorites" feature for personalized lists.
- Include detailed movie/TV show views (e.g., full description, runtime, cast).

---

## Lessons Learned
- Deepened understanding of React and state management with Redux.
- Improved skills in API integration and responsive design.
- Gained experience in project structuring and debugging.

---

## Future Features
- **Favorites**: Allow users to add movies and TV shows to their favorites.
- **Detailed Information**: Display runtime, cast, and full descriptions for movies and TV shows.
- **User Authentication**: Enable personalized experiences with login functionality.
- **Backend Integration**: Store user preferences and data persistently.

---

## Contributing
Contributions are welcome! If you find any issues or have ideas for new features, feel free to open a pull request or submit an issue.


---

## Acknowledgments
- Special thanks to [TMDB](https://www.themoviedb.org/) for their comprehensive API.
- Gratitude to my ALX mentors and peers for their guidance and feedback.

---

## Contact
For inquiries or feedback, reach out via [LinkedIn](https://www.linkedin.com/in/erick-kamanda/).
