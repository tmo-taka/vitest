import { describe, expect, test, beforeEach } from 'vitest';
import { screen} from '@testing-library/vue'
import  userEvent from '@testing-library/user-event'
import {reRender, inputtedMail, inputtedTel, clickButton} from './setup/form.test'

describe('FormComponent', () => {
    beforeEach(() => {
        // レンタリング
        reRender()
    });

    test('dummyValue Input', async() =>{
        const value = 'test@mail.com'
        await inputtedMail(value);
        expect(screen.getByDisplayValue(value)).toBeInTheDocument();
    })

    test('first not display alert', () =>{
        // NOTE: ない可能性があるためクエリにした
        const alert = screen.queryByText('入力文字に"@"を入れてください。');
        expect(alert).not.toBeInTheDocument();
    })

    test('dummyValue Inputted display alert', async() =>{
        const value = 'test'
        await inputtedMail(value);
        await userEvent.tab();
        expect(screen.getByText('入力文字に"@"を入れてください。')).toBeInTheDocument();
    })
});

describe('FormComponent inputData Submit', () => {
    beforeEach(() => {
        // レンタリング
        reRender()
    });

    test('first click submit button', async() =>{
        const value = '送信';
        await clickButton(value)
        expect(screen.queryByText('送信が完了しました！')).not.toBeInTheDocument();
    })

    test('dummyValue MailInput', async() =>{
        const value = 'test@mail.com';
        await inputtedMail(value);
        await userEvent.tab();
        const alert = screen.queryByText('入力文字に"@"を入れてください。');
        expect(alert).not.toBeInTheDocument();
    })

    test('dummyValue TelInput', async() =>{
        const value = '08035323909';
        await inputtedTel(value);
        await userEvent.tab();
        const alert = screen.queryByText('数値で入力してください。');
        expect(alert).not.toBeInTheDocument();
    })
});