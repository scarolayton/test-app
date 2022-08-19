import React from "react";
import { Helmet } from "react-helmet";
import imgios1 from '../assets/ios-instructions.jpeg'
import imgios2 from '../assets/ios-instructions2.jpeg'
import imgios3 from '../assets/ios-instructions3.jpeg'
import logo from '../assets/cubes-solid.svg';
import {NavLink} from 'react-router-dom'
import './instructions.css'
function Instructions() {
  const [isReadyForInstall, setIsReadyForInstall] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      // Prevent the mini-infobar from appearing on mobile.
      event.preventDefault();
      console.log("👍", "beforeinstallprompt", event);
      // Stash the event so it can be triggered later.
      window.deferredPrompt = event;
      // Remove the 'hidden' class from the install button container.
      setIsReadyForInstall(true);
    });
  }, []);
  async function downloadApp() {
    console.log("👍", "butInstall-clicked");
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      // The deferred prompt isn't available.
      console.log("oops, no prompt event guardado en window");
      return;
    }
    // Show the install prompt.
    promptEvent.prompt();
    // Log the result
    const result = await promptEvent.userChoice;
    console.log("👍", "userChoice", result);
    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    window.deferredPrompt = null;
    // Hide the install button.
    setIsReadyForInstall(false);
  }
  return (
    <React.Fragment>
      <Helmet><title>Icfes quizz - Instructions</title></Helmet>
      <div id="InstructionsContainer">
        <h1>How works this App</h1>
        <h2>If you are in ios</h2>
        <p>Open it in Safari</p>
        <ol>
          <li>Tap in the share options</li>
          <img src={imgios1} alt="Tap in the share options"/>
          <li>Tap in the option 'Add to Home Screen'</li>
          <img src={imgios2} alt="'Add to Home Screen'"/>
          <li>Tap in 'Add' and now you have the app in your homescreen</li>
          <img src={imgios3} alt="'Add to Home Screen'"/>
        </ol>
        <h2>If you are in an Android</h2>
        <ol>
          <li>Tap the settings button in the top</li>
          <img src={logo} alt="Tap the settings button in the top"/>
          <li>Select "Add to Home Screen"</li>
          <img src={logo} alt="Add to Home Screen"/>
          <li>Tap Automatically Add</li>
        </ol>
        {isReadyForInstall && (<button onClick={downloadApp}>Download</button>)}

        <NavLink to={'/Questions'}>Okey, Let´s do this</NavLink>
      </div>

    </React.Fragment>
  )
}

export {Instructions}