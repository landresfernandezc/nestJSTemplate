"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const path_1 = require("path");
const uuid_1 = require("uuid");
const imageFileFilter = (req, file, callback) => {
    if (!path_1.extname(file.originalname).match(/\.(jpg|jpeg|png|gif)$/)) {
        callback(new common_1.HttpException('Only image files are allowed', common_1.HttpStatus.BAD_REQUEST), false);
    }
    else {
        callback(null, true);
    }
};
const editFileName = (req, file, callback) => {
    const fileExtName = path_1.extname(file.originalname);
    callback(null, `${uuid_1.v4()}${fileExtName}`);
};
module.exports = {
    imageFileFilter,
    editFileName
};
//# sourceMappingURL=file-upload.utils.js.map