export default class UserInfo {
  constructor(nameSelector, aboutSelector) {
    this._nameElement = document.querySelector(nameSelector);
    this._aboutElement = document.querySelector(aboutSelector);
  }

  getUserInfo() {
    this._userInfo = {};

    this._userInfo["name"] = this._nameElement.textContent;
    this._userInfo["about"] = this._aboutElement.textContent;

    return this._userInfo;
  }

  setUserInfo(name, about) {
    this._nameElement.textContent = name;
    this._aboutElement.textContent = about;
  }
}
