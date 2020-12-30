import {
    getCategoryDatabase,
    getProductDetailDatabase,
    getProductListDatabase,
    getProductListDatabaseByCategory,
    getProductListDatabaseBySearchText,
    getBranchs,
    getTags,
    getCommentListDatabaseByProductId
} from "../models/productModels";
import catchAsync from "../libs/catchAsync";

// Hàm : lấy array paginate chi tiết (gồm page , isCurrentPage)
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

// Lấy danh sách sản phẩm 
export const getProductListPage = catchAsync(
    async (req, res) => {

        const currentPage = +req.query.page || 1;
        const limitPerPage = 9;
        const list = await getProductListDatabase(limitPerPage, currentPage);
        const category = await getCategoryDatabase();
        const branchs = getBranchs();
        const tags = getTags();

        const totalCount = list.count || 0;
        const pageCount = Math.ceil(totalCount / limitPerPage);
        const previousPage = currentPage - 1;
        const nextPage = currentPage + 1;
        const isPreviousPage = (currentPage <= 1 ? false : true);
        const isNextPage = (currentPage >= pageCount ? false : true);

        res.render("product/product-list", {
            title: "Danh sách sản phẩm",
            productList: list.rows, category, branchs, tags,
            currentPage, pageCount, previousPage, nextPage, isPreviousPage, isNextPage,
            listPaginate: getListPaginate(currentPage, pageCount)
        });
    }
);

// Lấy danh sách sản phẩm (dựa vào loại sản phẩm)
export const getProductListPageByCategoryPage = catchAsync(
    async (req, res) => {

        const type = req.params.id || "1"; // loại sản phẩm
        const currentPage = +req.query.page || 1;
        const limitPerPage = 9;
        const list = await getProductListDatabaseByCategory(limitPerPage, currentPage, type);
        const category = await getCategoryDatabase();
        const branchs = getBranchs();
        const tags = getTags();

        const totalCount = list.count || 0;
        const pageCount = Math.ceil(totalCount / limitPerPage);
        const previousPage = currentPage - 1;
        const nextPage = currentPage + 1;
        const isPreviousPage = (currentPage <= 1 ? false : true);
        const isNextPage = (currentPage >= pageCount ? false : true);

        res.render("product/product-list-by-category", {
            title: "Danh sách sản phẩm theo phân loại",
            productList: list.rows, category, branchs, tags,
            currentPage, pageCount, previousPage, nextPage, isPreviousPage, isNextPage,
            listPaginate: getListPaginate(currentPage, pageCount),
            type
        });
    }
);

// Lấy danh sách sản phẩm (dựa vào từ khóa tìm kiếm)
export const getProductListPageBySearchText = catchAsync(
    async (req, res) => {

        const text = req.query.text || ""; // text to search
        if (text === "") {
            res.redirect("/product");
            return;
        }

        const currentPage = +req.query.page || 1;
        const limitPerPage = 9;
        const list = await getProductListDatabaseBySearchText(limitPerPage, currentPage, text);
        const category = await getCategoryDatabase();
        const branchs = getBranchs();
        const tags = getTags();

        const totalCount = list.count || 0;
        const pageCount = Math.ceil(totalCount / limitPerPage);
        const previousPage = currentPage - 1;
        const nextPage = currentPage + 1;
        const isPreviousPage = (currentPage <= 1 ? false : true);
        const isNextPage = (currentPage >= pageCount ? false : true);

        res.render("product/search", {
            title: "Tìm kiếm sản phẩm",
            productList: list.rows, category, branchs, tags,
            currentPage, pageCount, previousPage, nextPage, isPreviousPage, isNextPage,
            listPaginate: getListPaginate(currentPage, pageCount),
            text
        });
    }
);

// Chi tiết sản phẩm
export const getProductDetailPage = catchAsync(
    async (req, res) => {
        const productId = req.params.id || "1";
        const item = await getProductDetailDatabase(productId);
        if (item === null) {
            res.render("product/product-not-found", { title: "Chi tiết sản phẩm" });
            return;
        }

        const category = await getCategoryDatabase();
        const branchs = getBranchs();
        const tags = getTags();
        const relativeProduct = await getProductListDatabaseByCategory(5, 1, item.type);
        const getComments = await getCommentListDatabaseByProductId(2, 1, item.id);

        res.render("product/product-detail", {
            title: "Chi tiết sản phẩm",
            item, relativeProducts: relativeProduct.rows, category, branchs, tags,
            reviewList: getComments.rows
        });
    }
);