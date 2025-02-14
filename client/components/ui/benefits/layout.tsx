import {benefitsLayoutProps} from "@/types/uiPropsTypes/ui";
const Layout = ({content, svgComponent}: benefitsLayoutProps) => {
    return <div className="flex flex-col items-center py-[16px] px-[32px] bg-benefits rounded-3xl w-[300px]">
        <div className="fill-white w-[64px]">
            {svgComponent}
        </div>
        <span className="text-center text-xl font-nunito text-white mt-[10px]">{content}</span>
    </div>;
}
export default Layout
