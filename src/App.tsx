import React from 'react';
import StatusUpCard from "./components/upStatusCard.tsx";
import UserDetailsCard from "./components/userDetailsCard.tsx";
import CreateWebDownloadForm from "./components/createWebDownloadForm.tsx";
//import { Button, Space, DatePicker, message, Alert, version } from 'antd';

const App = () => {
  return (
    <div>
      <h1>Torbox Stats</h1>
      <StatusUpCard />
      <UserDetailsCard />
      <CreateWebDownloadForm />
    </div>
  );
};

export default App
