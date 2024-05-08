import { ReactNode } from "react";

interface local {
    children: ReactNode;
    className?: string;
    id?: string;
}
const Wrapperstic = (props: local) => {

    return (
        <div
            id={`${props.id || ''}`}
            className={`${props.className || ''} mx-auto sm:max-w-[500px] md:max-w-[1440px]`}
        >
            {props.children}
        </div>
    );
}

export default Wrapperstic;