class Noun {
  constructor({
    root,
    fall='nom',
    plural='false',
    pronoun='false',
    conjugationKey='ich'
  }) {
    console.log(root, fall)
    this.root = root;
    this.fall = fall;
    this.plural = plural;
    this.pronoun = pronoun;
    this.conjugationKey = conjugationKey;
    this.article = this.getArticle(root, fall);
  }

  getArticle(root, fall) {
    let article;
    let isGuess = false;

    article = root.match(/\w{3}\s/) && root.match(/\w{3}\s/)[0];
    article = article.slice(0,3);


    if (!article) {
      article = this.guessArticle(root)
      isGuess = true;
    }

    article = this.declineArticle(article, fall);

    this.root = this.root.slice(4);
    return article;
  }

  declineArticle(article, fall) {
    if (fall === 'nom') return article;

    let declinedArticle;

    const standard = {
      'der': {
        akk: 'den',
        dat: 'dem',
      },
      'das': {
        akk: 'das',
        dat: 'dem',
      },
      'die': {
        akk: 'die',
        dat: 'der',
      }
    };

    console.log(article, fall, standard[article])

    try {
      declinedArticle = standard[article][fall]
    } catch(e) {
      throw Error('something went wrong declining article')
    }

    return declinedArticle;
  }

  guessArticle(root) {
    const masculine = /(ant|ar|är|ent|eur|ismus|ist|or|ör)$/;
    const feminine = /(age|ei|enz|esse|euse|heit|ie|ion|itis|keit|schaft|tät|ung|ur)$/;
    const nueter = /(chen|ett|lein|ment|nis|sel|um)$/;

    if (!!root.match(nueter)) {
      // console.log(`${root.match(nueter)[0]} indicates nueter ending`)
      return 'das';

    } else if (!!root.match(masculine)) {
      // console.log(`${root.match(nueter)[0]} indicates masculine ending`)
      return 'der';

    } else if (!!root.match(feminine)) {
      // console.log(`${root.match(nueter)[0]} indicates feminine ending`)
      return 'die';
    }
  }

  print() {
    return `${this.article} ${this.root}`
  }

}

module.exports = Noun;
