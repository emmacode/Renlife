
interface tsLocal {
    title: string;
    text: string;
    onClose?: () => void;
}

const Overlay = (props: tsLocal) => {
    return (
        <div className="fixed left-0 top-0 right-0 bottom-0 bg-blackA/[.7]">
            <div className="relative w-full h-full px-8 flex items-center justify-center">
                <div className="cursor-pointer absolute left-0 top-0 right-0 bottom-0" onClick={props.onClose}></div>
                <div className="relative bg-white text-blackA rounded-xl p-8 md:p-24 text-center">
                    <div className="text-3xl font-semibold">{props.title}</div>
                    <div className="mt-4">{props.text}</div>
                </div>
            </div>
        </div>
    )
}

export default Overlay;