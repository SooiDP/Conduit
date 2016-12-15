import EditorCtrl from './editor.controller';

describe('editor', () => {


    it('nieuwe controller zonder meegegeven artikel = leeg artikel', () => {
        
        let controller = new EditorCtrl();
        

        // controller.submitForm();
        expect(controller.article.body).toBe('');
    })

})