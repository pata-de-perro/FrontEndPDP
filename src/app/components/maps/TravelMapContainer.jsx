'use client'
import clsx from "clsx";
import React from "react";
import { GoogleMap } from "./GoogleMap";
import {AsideSearchList} from "./AsideSearchList";



export function TravelMapContainer() {

  return (
     <div className={clsx(
      "h-[500px]",
      "mt-4",
      "flex",
      
     )}>
      <GoogleMap/>
      <AsideSearchList></AsideSearchList>
     </div>
  );
  }
 
    
