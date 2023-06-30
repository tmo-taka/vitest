import { Meta, StoryObj } from "@storybook/vue3";
import List from "../List.vue";

type Story = StoryObj<typeof List>;

const meta: Meta<typeof List>  = {
    title: "components/List",
    component: List,
    render: (args) => ({
        components: { List },
        setup() {
            return { args };
        },
        template: "<List v-bind='args'/>",
    }),
    args: {
        lists: [
            {
                title: 'ダミータイトル',
                tags: ['ダミータグ'],
                text: 'ダミーテキスト'
            }
        ]
    },
    tags: ["autodocs"]
};

export const Default: Story = {
    args: {
        lists: [
            {
                title: 'ダミータイトル',
                tags: ['ダミータグ'],
                text: 'ダミーテキスト'
            }
        ]
    },
};

export const Test: Story = {
    args: {
        lists: [
            {
                title: 'すごい文字数のタイトル',
                tags: ['1個目のタグ','2個目のタグ'],
                text: 'ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト'
            },
            {
                title: 'これもすごい文字数のタイトル',
                tags: ['1個目のタグ','w個目のタグ','3個目のタグ'],
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            }
        ]
    },
};

export default meta;