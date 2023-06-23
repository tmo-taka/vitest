import { render , screen} from '@testing-library/vue'
import  userEvent from '@testing-library/user-event'
import Form from '../../components/Form.vue'

const user = userEvent.setup();

const reRender = () => {
    render(Form);
}

const inputtedMail = async(mail:string) => {
    const mailForm = screen.getByRole('textbox', {name: 'メールアドレス'});
    await user.type(mailForm, mail);
}

const inputtedTel = async(tel:string) => {
    const telForm = screen.getByRole('textbox', {name: '電話番号'});
    await user.type(telForm, tel);
}

const clickButton = async(name: string) => {
    await user.click(screen.getByRole('button', {name}))
}

export {reRender, inputtedMail, inputtedTel, clickButton}