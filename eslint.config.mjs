/* eslint-disable quotes */
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.config({
        extends: ["next/core-web-vitals", "next/typescript", "prettier"],
        plugins: ["prettier"],
        rules: {
            "prettier/prettier": "error",
            "camelcase": "error",
            "capitalized-comments": "warn",
            "curly": "error",
            "indent": ["error", 4],
            "max-len": ["error", { "code": 120 }],
            "quotes": ["error", "single"],
            "semi": ["error", "always"],
            "no-console": "warn",
            "no-var": "error",
            "eqeqeq": ["error", "always"],
            "no-trailing-spaces": "error",
        }
    })
];

export default eslintConfig;
