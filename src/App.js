import React from "react";
import "./App.css";
import AppHeader from "./AppHeader";
import ProfileCard from "./ProfileCard";
import profiles from "./profiles.json";

function App() {
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <form></form>
      <main className="ProfileList">
        {profiles.map(profile => (
          <ProfileCard key={profile.id} profile={profile}></ProfileCard>
        ))}
      </main>
    </div>
  );
}

export default App;
