
import clsx from "clsx";
import Image from "next/image";

export function AsideSearchList (){


    return(
        <aside  className={clsx("  w-[380px] flex flex-col flex-wrap items-center" )}>
            <p className={clsx( "text-h5 ")}>Listado de lugares de interés</p>
            
            <div className="flex  flex-col items-start mt-2 w-[221px]">
            <p className="text-h3">Hoteles</p>
                        <div className="flex mb-6">
                        <Image
                            src="/location_on.svg"
                            width={20}
                            height={20}
                            alt="gps pin icon"
                          />
                          <p className="font-body text-regular text-azulGris900 ml-4">
                            Lugar de interés
                          </p>
                        </div>
                          
                        <div className="flex mb-6">
                        <Image
                            src="/location_on.svg"
                            width={20}
                            height={20}
                            alt="gps pin icon"
                          />
                          <p className="font-body text-regular text-azulGris900 ml-4">
                            Lugar de interés
                          </p>
                        </div>
                        <p className="text-h3">Restaurantes</p>
                        <div className="flex mb-6">
                        <Image
                            src="/location_on.svg"
                            width={20}
                            height={20}
                            alt="gps pin icon"
                          />
                          <p className="font-body text-regular text-azulGris900 ml-4">
                            Lugar de interés
                          </p>
                        </div>
                          
                        <div className="flex mb-6">
                        <Image
                            src="/location_on.svg"
                            width={20}
                            height={20}
                            alt="gps pin icon"
                          />
                          <p className="font-body text-regular text-azulGris900 ml-4">
                            Lugar de interés
                          </p>
                        </div>
                        
                        <p className="text-h3">Atracciones turísticas</p>
                        <div className="flex mb-6">
                        <Image
                            src="/location_on.svg"
                            width={20}
                            height={20}
                            alt="gps pin icon"
                          />
                          <p className="font-body text-regular text-azulGris900 ml-4">
                            Lugar de interés
                          </p>
                        </div>
                          
                        <div className="flex mb-6">
                        <Image
                            src="/location_on.svg"
                            width={20}
                            height={20}
                            alt="gps pin icon"
                          />
                          <p className="font-body text-regular text-azulGris900 ml-4">
                            Lugar de interés
                          </p>
                        </div>
                        
                        <p className="text-h3">Vida nocturna</p>
                        <div className="flex mb-6">
                        <Image
                            src="/location_on.svg"
                            width={20}
                            height={20}
                            alt="gps pin icon"
                          />
                          <p className="font-body text-regular text-azulGris900 ml-4">
                            Lugar de interés
                          </p>
                        </div>
                          
                        <div className="flex mb-6">
                        <Image
                            src="/location_on.svg"
                            width={20}
                            height={20}
                            alt="gps pin icon"
                          />
                          <p className="font-body text-regular text-azulGris900 ml-4">
                            Lugar de interés
                          </p>
                        </div>
                        
                        <p className="text-h3">Museos y Arte</p>
                        <div className="flex mb-6">
                        <Image
                            src="/location_on.svg"
                            width={20}
                            height={20}
                            alt="gps pin icon"
                          />
                          <p className="font-body text-regular text-azulGris900 ml-4">
                            Lugar de interés
                          </p>
                        </div>
                          
                        <div className="flex mb-6">
                        <Image
                            src="/location_on.svg"
                            width={20}
                            height={20}
                            alt="gps pin icon"
                          />
                          <p className="font-body text-regular text-azulGris900 ml-4">
                            Lugar de interés
                          </p>
                        </div>
                        
                        </div>
                        
            
        </aside>
    )
}