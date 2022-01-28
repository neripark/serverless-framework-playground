// 問題1 なぜか参照できない
import lighthouse from "lighthouse";
// const lighthouse = require("lighthouse");

export const execLighthouse = () => {
  // 問題2？ これをコメントアウトすると落ちる
  // lighthouse();
  return "executed lighthouse!";
};
