/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

class Component<T> {
  constructor (public props:T) {

  }
}

interface PageData {
  title: string;
}

class Page extends Component<PageData> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};