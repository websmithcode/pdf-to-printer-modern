export { default as print } from "./print/print";
export { default as getPrinters } from "./get-printers/get-printers";
export { default as getDefaultPrinter } from "./get-default-printer/get-default-printer";
export { default as getPagesNumbers } from "./get-pages-numbers/get-pages-numbers";
export { PrintOptions } from "./print/print";

export type Printer = {
  deviceId: string;
  name: string;
  paperSizes: string[];
};
