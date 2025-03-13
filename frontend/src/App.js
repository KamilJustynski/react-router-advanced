// Challenge / Exercise

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import EventDetailPage, {
  deleteAction,
  eventsDetailLoader,
} from "./pages/EventDetailPage";
import NewEventPage, { action } from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import EventsPage, { loaderData } from "./pages/EventsPage";
import EventsRoot from "./pages/EventsRoot";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRoot />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: loaderData,
          },
          {
            path: ":id",
            id: "event-detail",
            loader: eventsDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteAction,
              },
              { path: "edit", element: <EditEventPage /> },
            ],
          },
          { path: "new", element: <NewEventPage />, action: action },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
