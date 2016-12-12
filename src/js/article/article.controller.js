import marked from 'marked';

class ArticleCtrl {
  constructor(article, $sce, $rootScope) {
    'ngInject';

    this.article = article;

    // Update page title
    $rootScope.setPageTitle(this.article.title);

    // Transform markdown into html
    this.article.body = $sce.trustAsHtml(marked(this.article.body, {sanitize: true }));

  }
}


export default ArticleCtrl;
