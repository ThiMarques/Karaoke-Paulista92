import * as Dialog from "@radix-ui/react-dialog";

function CreateAdBanner() {
    return(
        <div>
            <div className="text-white m-4 gap-8 py-0 px-8 desktop:grid-flow-col desktop:justify-between desktop:my-0 desktop:mx-auto desktop:max-w-[1120px]">
                <Dialog.DialogTrigger className="bg-base-color h-14 inline-flex items-center py-0 px-8 mr-[0.625rem] rounded-[0.25rem] font-medium text-2xl font-body-font transition hover:bg-base-color-alt ">
                    Faça já a sua reserva conosco.
                </Dialog.DialogTrigger>
            </div>
        </div>
    );
}

export default CreateAdBanner