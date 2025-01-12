import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom"

import RegistrationPage from "./registration"
import IndexPage from "./indexpage"
import Layout from "./layout"
import PageNotFound from "./404"
import SurveyLayout from "./surveylayout"
import {action as loadingAction} from "./registration"
import { loginloader} from "./registration"
import { loader as survyLoader } from "./surveylayout";
import { requireAuth } from "./utilis";
import EditEvent from "./EditEvent";
import FleetLayout from "./fleetlayout";
import SummaryLayout from "./summarylayout"



export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<IndexPage />} />
      <Route path="/" element={<Layout />}>
        <Route
          path="/registration"
          element={<RegistrationPage />}
          loader={loginloader}
          action={loadingAction}
        />

        <Route path="/summary" element={<SummaryLayout/>} loader={survyLoader}>
        <Route
              path="/summary"
              element={<SummaryLayout />}
              loader={async ({ request }) => {
                return await requireAuth(request);
              }}
            />

            <Route
              path="/summary/edit"
              element={<EditEvent />}
              loader={async ({ request }) => {
                return await requireAuth(request);
              }}
            />
        </Route>

        <Route path="/wholesale" element={<SurveyLayout />} loader={survyLoader}>
          <Route
            path="/wholesale"
            element={<FleetLayout />}
            loader={async ({ request }) => {
              return await requireAuth(request);
            }}
          >
            <Route
              path="/wholesale/edit"
              element={<EditEvent />}
              loader={async ({ request }) => {
                return await requireAuth(request);
              }}
            />

          </Route>
        </Route>
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);