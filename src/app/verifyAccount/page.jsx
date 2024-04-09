export default async function VerifyPage() {
    return(
    <>
    <section className="flex justify-center items-center h-full w-[screen]">
    <div className="bg-white w-[380px] h-[380px] rounded-2xl drop-shadow-lg flex flex-col justify-center items-center m-8">
            <h1 className="font-heading text-2xl text-center">Gracias por registrarte en </h1>
            <img 
                src="/PDPLogo.svg"
                className="w-[350px] h-auto m-2 flex justify-center"
            />
            <p className="font-body text-regular text-center mx-8">
                Hemos enviado a tu email un correo para verificar tu cuenta.</p>
            <p className="font-body text-regular text-center mx-8">
                Es importante que <a className="underline decoration-4 decoration-secondary text-inviteSmallText font-body">verifiques tu cuenta</a> para poder acceder a la plataforma.</p>
        </div>
    </section>
    </>
    )
}
