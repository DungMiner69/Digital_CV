"use strict";
/**
 * Người viết: Nguyễn Tiến Dũng
 */

/* Khai báo các biến DOM cần thiết */
const emailBox = document.getElementById("email-box"),
  submitButton = document.getElementById("submit"),
  emailBoxDiv = document.getElementById("enter-email-box"),
  personalInfoDiv = document.getElementById("personal-info-box"),
  wrongEmailNofication = document.getElementById("wrong-email");

/* Hàm kiểm tra email người dùng nhập đúng hay sai */
const checkEmail = function (email) {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test(email)) return true;
  return false;
};

/** Hàm ẩn mục submit email và hiển thị mục thông tin cá nhân */
const transition = function () {
  emailBoxDiv.classList.add("hidden");
  personalInfoDiv.classList.remove("hidden");
};

/* Hàm khi người dùng nhắn vào nút submit */
const submitAction = function () {
  /** Khi người dùng nhập đúng email thì sẽ gọi hàm hiển thị thông tin cá nhân
   * Khi người dùng nhập sai email thì sẽ hiện thông báo nhập sai
   */
  if (checkEmail(emailBox.value)) {
    transition();
  } else {
    wrongEmailNofication.classList.remove("hidden");
  }
};

/** Gọi Event Listener khi người dùng nhấn vào nút submit */
submitButton.addEventListener("click", submitAction);
