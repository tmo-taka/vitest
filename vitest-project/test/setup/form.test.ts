import { render , screen} from '@testing-library/vue'
import  userEvent from '@testing-library/user-event'
import Form from '../components/Form.vue'

const user = userEvent.setup();

export const setup = async() => {
    render(Form);
    const inputtedMail = async(mail:string) => {
        const mailForm = screen.getByRole('text-box', {name: 'メールアドレス'});
        await user.type(mailForm, mail);
    }

    const inputtedTel = async(tel:string) => {
        const telForm = screen.getByRole('text-box', {name: '電話番号'});
        await user.type(telForm, tel);
    }

    const clickButton = async(name: string) => {
        await user.click(screen.getByRole('button', {name}))
    }

    return {inputtedMail, inputtedTel, clickButton}
}