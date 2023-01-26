function encodeAndDecodeMessages() {
  const [sendBtn, readBtn] = Array.from(document.querySelectorAll("button"));
  const [senderText, recieverText] = Array.from(document.querySelectorAll("textarea"));
  sendBtn.addEventListener("click", encode);
  readBtn.addEventListener("click", decode);

  function encode() {
    const input = senderText.value;
    let encodedMessage = "";
    for (let i = 0; i < input.length; i++) {
      const el = input[i];
      encodedMessage += String.fromCharCode(el.charCodeAt() + 1);
    }
    recieverText.value = encodedMessage;
    senderText.value = "";
  }
  function decode() {
    const input = recieverText.value;
    let decodedMessage = "";
    for (let i = 0; i < input.length; i++) {
      const el = input[i];
      decodedMessage += String.fromCharCode(el.charCodeAt() - 1);
    }
    recieverText.value = decodedMessage;
  }
}
