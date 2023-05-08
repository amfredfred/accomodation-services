import { ILayouts } from "../../../Constants/Interfaces";

export default function HomeLayout(props: ILayouts) {
    const { children } = props
    return <div>{children}</div>
}