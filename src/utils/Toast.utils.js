import { toast } from "react-toastify";

export class ToastUtils {
  static success(message = "") {
    toast(message, {
      type: "success",
    });
  }

  static error(message = "") {
    toast(message, {
      type: "error",
    });
  }
}
