import catchAsync from "../libs/catchAsync";
import { genProduct } from "./genProduct";
import { genAccount } from "./genAccount";
import { genCategory } from "./genCategory";


export const genService = catchAsync(
    async (req, res) => {
        console.log("============================== GENERATE PRODUCT ==============================");
        await genProduct();
        console.log("============================== GENERATE USER ==============================");
        await genAccount();
        console.log("============================== GENERATE CATEGORY ==============================");
        await genCategory();
        res.render("error/errorCustom", { errorContent: "Generate dữ liệu thành công!" });
    }
);