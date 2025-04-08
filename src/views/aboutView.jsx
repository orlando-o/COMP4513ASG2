import Header from "./partials/header";
const AboutView = ({ redirect, openFavouritesModal, favouritesEmpty }) => {
  return (
    <div>
      <Header
        redirect={redirect}
        openFavouritesModal={openFavouritesModal}
        favouritesEmpty={favouritesEmpty}
      />
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h1 className="text-3xl font-bold mb-4">
            COMP 4513 Assignment #2: React
          </h1>
          <p className="text-gray-700 mb-2">
            <strong>Developed by:</strong> Orlando Ormon, Alyssa Landeta
          </p>
          <p className="text-gray-700">
            This project is a single-page application built using React for COMP
            4513. It retrieves and displays art-related data using a web API
            developed earlier in the course. The application consists of
            multiple views, including a login page, artist and gallery listings,
            and a painting viewer.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              <strong>Login View:</strong> Simulated authentication to access
              the app.
            </li>
            <li>
              <strong>Gallery View:</strong> Displays galleries with sorting and
              filtering options.
            </li>
            <li>
              <strong>Artist View:</strong> Lists artists and their associated
              paintings.
            </li>
            <li>
              <strong>Genre View:</strong> Categorizes paintings by genre.
            </li>
            <li>
              <strong>Painting View:</strong> Filters paintings with sorting
              options.
            </li>
            <li>
              <strong>Favorites:</strong> Allows users to save and view their
              favorite galleries, artists, and paintings.
            </li>
            <li>
              <strong>Modal Dialogs:</strong> Displays additional details about
              paintings.
            </li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>React with Vite</li>
            <li>React Router for navigation</li>
            <li>API consumption</li>
            <li>CSS (Tailwind)</li>
          </ul>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4">
            React Component Libraries:
          </h2>
          <ul>
            <li>
              <a
                href="https://fkhadra.github.io/react-toastify/"
                target="_blank"
              >
                React-toastify - allows you to add notifications to your app
                with ease.
              </a>
            </li>
            <li>
              <a href="https://lucide.dev/" target="_blank">
                Lucide - open-source icon library that provides vector files for
                displaying icons.
              </a>
            </li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4">Sources</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              loginBackground.jpg in loginPage.jsx -{" "}
              <a href="https://ormon.ca/" target="_blank">
                Orlando Ormon
              </a>
            </li>
            <li>
              Every single line of changeMapView.jsx -{" "}
              <a
                href="https://medium.com/@ewelina14/my-first-react-application-using-a-leaflet-library-e376a852be85"
                target="_blank"
              >
                Ewelina Kowalczyk via Medium
              </a>
            </li>
            <li>
              useNavigate() Hook in App.jsx -{" "}
              <a
                href="https://www.geeksforgeeks.org/reactjs-usenavigate-hook/"
                target="_blank"
              >
                GeeksForGeeks
              </a>
            </li>
            <li>
              toast() in App.jsx -{" "}
              <a
                href="https://fkhadra.github.io/react-toastify/api/toast"
                target="_blank"
              >
                Toast API Docs
              </a>
            </li>
            <li>
              {"<ToastContainer />"} in App.jsx -{" "}
              <a
                href="https://github.com/fkhadra/react-toastify/tree/main"
                target="_blank"
              >
                Toast Docs
              </a>
            </li>
            <li>
              JSON.Stringify() in App.jsx -{" "}
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify"
                target="_blank"
              >
                Mozilla Docs
              </a>
            </li>
            <li>
              JSON.Parse() in App.jsx -{" "}
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify"
                target="_blank"
              >
                Mozilla Docs
              </a>
            </li>
            <li>
              localStorage.setItem() in App.jsx -{" "}
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"
                target="_blank"
              >
                Mozilla Docs
              </a>
            </li>
            <li>
              localStorage.getItem() in App.jsx -{" "}
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"
                target="_blank"
              >
                Mozilla Docs
              </a>
            </li>
            <li>
              React Router -{" "}
              <a
                href="https://www.w3schools.com/react/react_router.asp"
                target="_blank"
              >
                W3 Schools
              </a>
            </li>
            <li>
              {"<MapContainer />"} and children -{" "}
              <a
                href="https://react-leaflet.js.org/docs/start-setup/"
                target="_blank"
              >
                React Leaflet Docs
              </a>
            </li>
            <li>
              Leaflet Map Styling in index.css -{" "}
              <a
                href="https://gis.stackexchange.com/questions/246689/leaflet-layer-control-and-legend"
                target="_blank"
              >
                GIS Stack Exchange
              </a>
            </li>
            <li>
              preventDefault() in paintingFilters.jsx -{" "}
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault"
                target="_blank"
              >
                Mozilla Docs
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutView;
