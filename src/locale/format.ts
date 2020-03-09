function hasOwn(obj: any, key: string): boolean {
    return obj.hasOwnProperty(key);
}

const RE_NARGS = /(%|)\{([0-9a-zA-Z_]+)\}/g;

/**
 *  String format template
 *  - Inspired:
 *    https://github.com/Matt-Esch/string-template/index.js
 */

function template(content: string, ...args: any): string {

    if (args.length === 1 && typeof args[0] === "object") {
        args = args[0];
    }

    if (!args || !args.hasOwnProperty) {
        args = {};
    }

    return content.replace(RE_NARGS, (match, prefix, i, index) => {
        let result;

        if (content[index - 1] === "{" &&
            content[index + match.length] === "}") {
            return i;
        } else {
            result = hasOwn(args, i) ? args[i] : null;
            if (result === null || result === undefined) {
                return "";
            }

            return result;
        }
    });
}

export default template;
