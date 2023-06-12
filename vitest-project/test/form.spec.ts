import { describe, expect, test } from 'vitest';
import { render , screen} from '@testing-library/vue'
import  userEvent from '@testing-library/user-event'
import Form from '../components/Form.vue'

const user = userEvent.setup();

describe('FormComponent', () => {
    test('dummyValue Input', async() =>{
        render(Form)
        const form = screen.getByRole('textbox',{name: 'メールアドレス'});
        screen.debug(form);
        const mailValue = 'test@mail.com';
        await user.type(form, mailValue);
        expect(screen.getByDisplayValue(mailValue)).toBeInTheDocument();
    })
});