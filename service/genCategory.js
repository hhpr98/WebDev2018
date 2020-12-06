import { Categories } from "../database/models";

export const genCategory = async () => {

    const typeName = ["Quần", "Áo", "Phụ kiện", "Khác"];

    for (var i = 1; i < 5; i++) {
        await Categories.create({
            name: typeName[i - 1]
        });
    }
}