import { describe, expect, test } from 'vitest';
import { screen} from '@testing-library/vue'
import  userEvent from '@testing-library/user-event'
import {reRender, inputtedMail, inputtedTel, clickButton} from './setup/form.test'

describe('FormComponent', () => {
    test('dummyValue Input', async() =>{
        reRender()
        const value = 'test@mail.com'
        await inputtedMail(value);
        expect(screen.getByDisplayValue(value)).toBeInTheDocument();
    })

    test('first not display alert', () =>{
        reRender()
        // NOTE: ない可能性があるためクエリにした
        const alert = screen.queryByText('入力文字に"@"を入れてください。');
        expect(alert).not.toBeInTheDocument();
    })

    test('dummyValue Inputted display alert', async() =>{
        reRender()
        const value = 'test'
        await inputtedMail(value);
        await userEvent.tab();
        expect(screen.getByText('入力文字に"@"を入れてください。')).toBeInTheDocument();
    })
});