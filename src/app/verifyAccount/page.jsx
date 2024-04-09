export default async function VerifyPage() {
    return(
    <>
    <section className="flex justify-center items-center h-full w-[screen]">
    <div className="bg-white w-[fit] h-[fit] rounded-2xl drop-shadow-lg flex flex-col items-center m-8 p-8">
            <img 
                src="/PDPLogo.svg"
                className="w-[350px] h-auto m-2 flex justify-center items-start"
            />
            <h1 className="font-heading text-2xl text-center mb-4">¡Gracias por registrarte!</h1>
            <p className="font-body text-regular text-center mx-8">
                Hemos enviado al correo electrónico que nos proporcionaste un correo para verificar tu cuenta.</p>
            <p className="font-body text-regular text-center mx-8">
                Es importante que <a className="underline decoration-4 decoration-secondary text-regularSemiBold font-body">verifiques tu cuenta</a> para poder acceder a la plataforma.</p>
        </div>
    </section>
    </>
    )
}
