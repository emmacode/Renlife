
import { __app } from "@/app/util/pre_def/app";
import Image from "next/image";

interface tsLocal {
    className?: string;
}
const AppBrandName = (props: tsLocal) => {

    return (
        <div className={`
                ${props.className || ''}
                text-primary text-2xl font-semibold font-familyB
                flex items-center w-[fit-content] rounded-[50px] border-[2.3px] border-greyA px-8 py-3
            `}
        >
            <Image
                className="w-[24px] h-[24px] mr-2"
                src={__app.logo_url}
                alt={`${__app.name} logo`}
                width={32}
                height={32}
            />
            <span>{__app.name}</span>
        </div>
    )
}

export default AppBrandName;