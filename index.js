class Message{
  constructor(text = 'Texto não informado', created = Date.now()){
    this._text = text;
    this._created = created;
  }

  get created () {
    return this._created;
  }

  set created(created) {
    if(!created || isNaN(created)) {
      throw new Error('Invalid Created');
    }
    this._created = created;
  }

  get text() {
    return this._text;
  }

  set text(text) {
    if(!text || !isNaN(text)) {
      throw new Error('Invalid text');
    }
    this._text = text;
  }

  toString() {
    return `Message created at: ${this.created} - Text: ${this.text}`;
  }
}

class ImageMessage extends Message {
  constructor(text = '', created = Date.now(), url = '', thumbnail = ''){
    super(text, created);
    this.url = url;
    this.thumbnail = thumbnail;
  }

  toString() {
    return `Photo ${super.toString()} ` + 
          `- URL: ${this.url} ` + 
          `Thumbnail: ${this.thumbnail}`;
  }
}

var text = 'some text';
var created = Date.now();
var duckTypeMessage = {
  text,
  created
};
console.log(duckTypeMessage);

var emptyMessage = new Message();
var textMessage = new Message('Yesterday message', Date.now() - 86400);
var photoMessage = new ImageMessage();
console.log(String(emptyMessage));
console.log(String(textMessage));
console.log(String(photoMessage));

console.log(emptyMessage instanceof Message);
console.log(textMessage instanceof Message);
console.log(photoMessage instanceof Message);
console.log(photoMessage instanceof ImageMessage);

console.log(emptyMessage instanceof ImageMessage);
console.log(textMessage instanceof ImageMessage);