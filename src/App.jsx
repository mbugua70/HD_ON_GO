import ParentRouter from "./components/parentrouter";
import {App} from "@capacitor/app"
import { FormProvider } from "./contextApi/selectelement_context";
import { useEffect } from "react";
import { Capacitor } from '@capacitor/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Keyboard } from '@capacitor/keyboard';
import { IonApp, IonHeader, IonToolbar, IonTitle, IonContent, IonPage } from '@ionic/react';




if (Capacitor.isNativePlatform()) {
  StatusBar.hide().catch(err => console.error('Error hiding StatusBar:', err));
}


const MyApp = () => {

 useEffect(() => {
    // Hide the accessory bar on iOS
    Keyboard.setAccessoryBarVisible({ isVisible: false });
 }, []);


  useEffect(() => {
    let handler;
     const setupBackButton = async() => {
      handler = await App.addListener("backButton", (event) => {
        if (window.location.pathname === "/") {
          App.exitApp();
        } else {
          window.history.back();
        }
      });
     }

     setupBackButton();
    return () => {
      handler && handler.remove()
    }
  }, []);

  return (
    <>
      {/* for importing parentRouter component below */}
      <FormProvider>
        <ParentRouter />
      </FormProvider>
    </>
  );
};

export default MyApp;
