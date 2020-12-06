import hbs from "hbs";

export const registerHelper = () => {
    hbs.registerHelper("formatCurencyVND", function (price) {
        return typeof (price) === "undefined" ? "chưa có" : price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'); // 5,000 ; 23,000; 130,000 ; 2,400,000
    });

    hbs.registerHelper("titleHelper", function (title) {
        return typeof (title) === "undefined" ? "HDD Shop" : title.toString() + " - HDD Shop";
    });
}