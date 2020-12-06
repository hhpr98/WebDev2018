import { getCategoryDatabase, getProductDetailDatabase, getProductListDatabase, getReview } from "../models/productModels";
import catchAsync from "../libs/catchAsync";

const getListPaginate = (currentPage, pageCount) => {
    const arrPage = [];
    for (var i = 1; i <= pageCount; i++) {
        arrPage.push({
            isCurrentPage: i === currentPage ? true : false,
            pageId: i
        });
    }
    return arrPage;
}

export const getProductListPage = catchAsync(
    async (req, res) => {

        const currentPage = +req.query.page || 1;
        const limitPerPage = 9;
        const list = await getProductListDatabase(limitPerPage, currentPage);
        const category = await getCategoryDatabase();

        const totalCount = list.count || 0;
        const pageCount = Math.ceil(totalCount / limitPerPage);
        const previousPage = currentPage - 1;
        const nextPage = currentPage + 1;
        const isPreviousPage = (currentPage <= 1 ? false : true);
        const isNextPage = (currentPage >= pageCount ? false : true);

        res.render("product/product-list", {
            title: "Danh sách sản phẩm",
            productList: list.rows, category,
            currentPage, pageCount, previousPage, nextPage, isPreviousPage, isNextPage,
            listPaginate: getListPaginate(currentPage, pageCount)
        });
    }
);

export const getProductDetailPage = catchAsync(
    async (req, res) => {
        const productId = req.params.id || "1";
        const productList = await getProductList();
        const reviewList = getReview();
        const productDisplay = await getProductDetailDatabase(productId);
        if (productDisplay === null) {
            res.render("product/product-not-found", { title: "Chi tiết sản phẩm" });
        } else {
            res.render("product/product-detail", { title: "Chi tiết sản phẩm", item: productDisplay, productList, reviewList, category: getCategoryRightBar() });
        }
    }
);