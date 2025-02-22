"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const merge_1 = __importDefault(require("./merge"));
const validate_1 = __importDefault(require("./validate"));
const yamlToJson_1 = __importDefault(require("./yamlToJson"));
const jsonToYaml_1 = __importDefault(require("./jsonToYaml"));
const csvToJson_1 = __importDefault(require("./csvToJson"));
const stringSplit_1 = __importDefault(require("./stringSplit"));
const stringReplace_1 = __importDefault(require("./stringReplace"));
const fileRead_1 = __importDefault(require("./fileRead"));
const fileWrite_1 = __importDefault(require("./fileWrite"));
const fileDelete_1 = __importDefault(require("./fileDelete"));
const fileCheck_1 = __importDefault(require("./fileCheck"));
const mergeObjects_1 = __importDefault(require("./mergeObjects"));
const mergeRemoveKey_1 = __importDefault(require("./mergeRemoveKey"));
const mergeRemoveArrayValue_1 = __importDefault(require("./mergeRemoveArrayValue"));
const mergeReplaceArrayElement_1 = __importDefault(require("./mergeReplaceArrayElement"));
const dmapper_1 = __importDefault(require("./dmapper"));
const fileReadDir_1 = __importDefault(require("./fileReadDir"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json()); // to support JSON-encoded bodies
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/file/read', fileRead_1.default);
app.use('/file/read-directory', fileReadDir_1.default);
app.use('/file/write', fileWrite_1.default);
app.use('/file/delete', fileDelete_1.default);
app.use('/file/check', fileCheck_1.default);
app.use('/merge', merge_1.default);
app.use('/merge/objects', mergeObjects_1.default);
app.use('/merge/remove-key', mergeRemoveKey_1.default);
app.use('/merge/remove-array-value', mergeRemoveArrayValue_1.default);
app.use('/merge/replace-array-element', mergeReplaceArrayElement_1.default);
app.use('/validate/array-elements-length', validate_1.default);
app.use('/convert/yaml-to-json', yamlToJson_1.default);
app.use('/convert/json-to-yaml', jsonToYaml_1.default);
app.use('/convert/csv-to-json', csvToJson_1.default);
app.use('/convert/string/split', stringSplit_1.default);
app.use('/convert/string/replace', stringReplace_1.default);
app.use('/dmapper', dmapper_1.default);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
