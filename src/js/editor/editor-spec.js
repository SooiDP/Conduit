import EditorCtrl from './editor.controller';

describe('editor', () => {


    it('artikels starten zonder title, body of description', () => {
        
        let controller = new EditorCtrl();

        expect(controller.article.title).toBe('');
        expect(controller.article.body).toBe('');
        expect(controller.article.description).toBe('');

    })

})